const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:/Users/anuab/.gemini/antigravity/brain/5013d6ad-58a1-4320-a5c8-313023fbc5ff';

async function captureDevice({ width, height, filename }) {
  const proc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--no-sandbox',
    '--disable-gpu',
    `--window-size=${width},${height}`,
    'http://127.0.0.1:5173/about'
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

  await new Promise(r => setTimeout(r, 2000));
  const listRes = await fetch('http://127.0.0.1:9222/json');
  const tabs = await listRes.json();
  const tab = tabs.find(t => t.url.includes('5173')) || tabs[0];
  const ws = new WebSocket(tab.webSocketDebuggerUrl);

  await new Promise(res => {
    ws.onopen = async () => {
      try {
        await send(ws, 'Page.enable');
        await send(ws, 'Runtime.enable');
        await new Promise(r => setTimeout(r, 1000));

        await send(ws, 'Runtime.evaluate', {
          expression: `(() => {
            document.documentElement.classList.add('dark');
            const list = document.querySelector('.divide-y');
            if (list) {
              const rect = list.getBoundingClientRect();
              window.scrollTo(0, window.scrollY + rect.top - 70);
            }
          })()`
        });
        await new Promise(r => setTimeout(r, 700));
        const shot = await send(ws, 'Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(artifactDir + '/' + filename, Buffer.from(shot.data, 'base64'));
        console.log('Saved ' + filename);
        ws.close();
        proc.kill();
        res();
      } catch (e) {
        ws.close();
        proc.kill();
        console.error(e);
        res();
      }
    };
  });
}

async function run() {
  await captureDevice({ width: 768, height: 1024, filename: 'team_tablet_dark.png' });
  await new Promise(r => setTimeout(r, 1000));
  await captureDevice({ width: 390, height: 844, filename: 'team_mobile_dark.png' });
  console.log('Done captures!');
}

run().catch(console.error);
