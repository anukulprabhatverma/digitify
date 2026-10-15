const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testUrlInChrome(url) {
  console.log(`\n==================================================`);
  console.log(`Testing: ${url}`);
  console.log(`==================================================`);
  
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-ssl-test-'));
  const proc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9230',
    `--user-data-dir=${tmpDir}`,
    '--no-sandbox',
    '--disable-gpu',
    'about:blank'
  ]);

  let id = 1;
  function send(ws, method, params = {}) {
    return new Promise((res, rej) => {
      const msgId = id++;
      const handler = (evt) => {
        const data = JSON.parse(evt.data);
        if (data.id === msgId) {
          ws.removeEventListener('message', handler);
          if (data.error) rej(data.error);
          else res(data.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  try {
    await new Promise(r => setTimeout(r, 1500));
    const listRes = await fetch('http://127.0.0.1:9230/json/list');
    const tabs = await listRes.json();
    const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    await send(ws, 'Page.enable');
    await send(ws, 'Security.enable');

    ws.addEventListener('message', (evt) => {
      const data = JSON.parse(evt.data);
      if (data.method === 'Security.securityStateChanged') {
        console.log(`  [Chrome Security State]: ${data.params.securityState}`);
        if (data.params.explanations) {
          data.params.explanations.forEach(exp => {
            console.log(`    - [${exp.securityState}] ${exp.description || exp.summary}`);
          });
        }
      }
      if (data.method === 'Page.loadEventFired') {
        console.log(`  [Page Event]: Load event fired`);
      }
    });

    const nav = await send(ws, 'Page.navigate', { url });
    console.log(`  Navigation response:`, nav);
    await new Promise(r => setTimeout(r, 3500));

    const evalResult = await send(ws, 'Runtime.evaluate', {
      expression: `(() => ({
        finalUrl: window.location.href,
        title: document.title,
        heading: document.querySelector('h1')?.textContent?.trim() || '',
        interstitial: document.body?.innerText?.includes('Your connection is not private') || document.body?.innerText?.includes('This site can’t provide a secure connection')
      }))()`,
      returnByValue: true
    });
    console.log(`  Page Evaluation:`, evalResult.result.value);

    ws.close();
    proc.kill();
  } catch (err) {
    console.error(`  Error for ${url}:`, err.message);
    proc.kill();
  } finally {
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch (e) {}
  }
}

async function run() {
  await testUrlInChrome('https://digitify.live');
  await testUrlInChrome('http://digitify.live');
  await testUrlInChrome('https://www.digitify.live');
  await testUrlInChrome('http://www.digitify.live');
}

run();
