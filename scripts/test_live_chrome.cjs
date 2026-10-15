const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testUrlInChrome(url) {
  console.log(`\nTesting ${url} in Chrome...`);
  const proc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9229',
    '--no-sandbox',
    '--disable-gpu',
    '--window-size=1280,800',
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
    await new Promise(r => setTimeout(r, 2000));
    const listRes = await fetch('http://127.0.0.1:9229/json');
    const tabs = await listRes.json();
    const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    await send(ws, 'Page.enable');
    await send(ws, 'Security.enable');

    let securityState = 'unknown';
    ws.addEventListener('message', (evt) => {
      const data = JSON.parse(evt.data);
      if (data.method === 'Security.securityStateChanged') {
        securityState = data.params.securityState;
        console.log(`  [Security Event] State: ${securityState}`, data.params.summary || '');
      }
    });

    const nav = await send(ws, 'Page.navigate', { url });
    console.log(`  Navigation response:`, nav);
    await new Promise(r => setTimeout(r, 3000));

    const evalResult = await send(ws, 'Runtime.evaluate', {
      expression: `(() => ({
        url: window.location.href,
        title: document.title,
        heading: document.querySelector('h1')?.textContent?.trim() || '',
        bodyText: document.body?.innerText?.slice(0, 150) || ''
      }))()`,
      returnByValue: true
    });
    console.log(`  Result:`, evalResult.result.value);

    ws.close();
    proc.kill();
  } catch (err) {
    console.error(`  Error for ${url}:`, err);
    proc.kill();
  }
}

async function run() {
  await testUrlInChrome('http://digitify.live');
  await testUrlInChrome('https://digitify.live');
  await testUrlInChrome('http://www.digitify.live');
  await testUrlInChrome('https://www.digitify.live');
}

run();
