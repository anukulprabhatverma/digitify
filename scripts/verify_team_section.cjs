const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:/Users/anuab/.gemini/antigravity/brain/5013d6ad-58a1-4320-a5c8-313023fbc5ff';

function verifyAndCapture({ width = 1440, height = 900, device = 'desktop', theme = 'dark' }) {
  return new Promise((resolve, reject) => {
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

    setTimeout(async () => {
      try {
        const listRes = await fetch('http://127.0.0.1:9222/json');
        const tabs = await listRes.json();
        const tab = tabs.find(t => t.url.includes('5173')) || tabs[0];
        const ws = new WebSocket(tab.webSocketDebuggerUrl);

        ws.onopen = async () => {
          try {
            await send(ws, 'Page.enable');
            await send(ws, 'Runtime.enable');
            await new Promise(r => setTimeout(r, 1200));

            // Remove overlay, set theme and scroll into TEAM section
            const evalResult = await send(ws, 'Runtime.evaluate', {
              expression: `(() => {
                document.getElementById('digitify-intro-overlay')?.remove();
                document.body.style.overflow = '';

                if ('${theme}' === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }

                const teamH2 = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('MULTIDISCIPLINARY'));
                if (teamH2) {
                  const section = teamH2.closest('section');
                  const rect = section.getBoundingClientRect();
                  window.scrollTo(0, window.scrollY + rect.top - 80);
                }

                // Verify text content
                const pageText = document.body.innerText;
                const hasAarti = pageText.includes('Aarti Kumari') || pageText.includes('Co-Founder & Operations') || pageText.includes('Leadership & Operations');
                
                // Get all team member rows
                const rows = Array.from(document.querySelectorAll('h3')).map(h3 => {
                  const container = h3.closest('.group');
                  if (!container) return null;
                  const numSpan = container.querySelector('span.font-mono');
                  return {
                    name: h3.innerText.trim(),
                    number: numSpan ? numSpan.innerText.trim() : null
                  };
                }).filter(Boolean);

                return {
                  hasAarti,
                  members: rows
                };
              })()`,
              returnByValue: true
            });

            console.log('[' + device + ' - ' + theme + '] Eval:', evalResult.result.value);

            await new Promise(r => setTimeout(r, 800));
            const shot = await send(ws, 'Page.captureScreenshot', { format: 'png' });
            const filename = 'team_' + device + '_' + theme + '.png';
            fs.writeFileSync(artifactDir + '/' + filename, Buffer.from(shot.data, 'base64'));
            console.log('Saved ' + filename);

            ws.close();
            proc.kill();
            resolve();
          } catch (e) {
            ws.close();
            proc.kill();
            reject(e);
          }
        };
      } catch (err) {
        proc.kill();
        reject(err);
      }
    }, 2000);
  });
}

async function run() {
  console.log('Testing Desktop Dark...');
  await verifyAndCapture({ width: 1440, height: 900, device: 'desktop', theme: 'dark' });
  await new Promise(r => setTimeout(r, 1000));

  console.log('Testing Desktop Light...');
  await verifyAndCapture({ width: 1440, height: 900, device: 'desktop', theme: 'light' });
  await new Promise(r => setTimeout(r, 1000));

  console.log('Testing Tablet Dark...');
  await verifyAndCapture({ width: 768, height: 1024, device: 'tablet', theme: 'dark' });
  await new Promise(r => setTimeout(r, 1000));

  console.log('Testing Mobile Dark...');
  await verifyAndCapture({ width: 390, height: 844, device: 'mobile', theme: 'dark' });
  console.log('All team captures completed!');
}

run().catch(console.error);
