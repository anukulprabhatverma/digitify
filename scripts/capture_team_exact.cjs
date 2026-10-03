const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:/Users/anuab/.gemini/antigravity/brain/5013d6ad-58a1-4320-a5c8-313023fbc5ff';

async function capture() {
  const proc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--no-sandbox',
    '--disable-gpu',
    '--window-size=1440,1200',
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

  ws.onopen = async () => {
    try {
      await send(ws, 'Page.enable');
      await send(ws, 'Runtime.enable');
      await new Promise(r => setTimeout(r, 1000));

      // Scroll to team member cards
      await send(ws, 'Runtime.evaluate', {
        expression: `(() => {
          document.documentElement.classList.add('dark');
          const list = document.querySelector('.divide-y');
          if (list) {
            const rect = list.getBoundingClientRect();
            window.scrollTo(0, window.scrollY + rect.top - 100);
          }
        })()`
      });
      await new Promise(r => setTimeout(r, 700));
      const s1 = await send(ws, 'Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(artifactDir + '/team_desktop_dark.png', Buffer.from(s1.data, 'base64'));
      console.log('Saved team_desktop_dark.png');

      await send(ws, 'Runtime.evaluate', {
        expression: `(() => {
          document.documentElement.classList.remove('dark');
        })()`
      });
      await new Promise(r => setTimeout(r, 400));
      const s2 = await send(ws, 'Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(artifactDir + '/team_desktop_light.png', Buffer.from(s2.data, 'base64'));
      console.log('Saved team_desktop_light.png');

      ws.close();
      proc.kill();
    } catch (e) {
      ws.close();
      proc.kill();
      console.error(e);
    }
  };
}

capture().catch(console.error);
