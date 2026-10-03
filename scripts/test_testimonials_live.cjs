const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:/Users/anuab/.gemini/antigravity/brain/5013d6ad-58a1-4320-a5c8-313023fbc5ff';

function testAndCapture({ width = 1440, height = 900, isMobile = false }) {
  return new Promise((resolve, reject) => {
    const proc = spawn(chromePath, [
      '--headless=new',
      '--remote-debugging-port=9222',
      '--no-sandbox',
      '--disable-gpu',
      `--window-size=${width},${height}`,
      'http://127.0.0.1:5173/'
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

            // Scroll into WHAT PARTNERS SAY section
            await send(ws, 'Runtime.evaluate', {
              expression: `(() => {
                const h2 = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('WHAT PARTNERS SAY'));
                if (h2) {
                  const section = h2.closest('section');
                  const rect = section.getBoundingClientRect();
                  window.scrollTo(0, window.scrollY + rect.top - 80);
                }
              })()`
            });

            await new Promise(r => setTimeout(r, 800));

            // Test Slide 1
            const eval1 = await send(ws, 'Runtime.evaluate', {
              expression: `(() => {
                const text = document.body.innerText;
                const hasPlaceholder = text.includes('Verified Testimonial Placeholder') || text.includes('CLIENT TESTIMONIAL WILL BE ADDED HERE');
                const h2 = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('WHAT PARTNERS SAY'));
                const section = h2.closest('section');
                return {
                  hasPlaceholder,
                  sectionText: section.innerText
                };
              })()`,
              returnByValue: true
            });
            console.log('Slide 1 eval:', eval1.result.value);

            // Screenshot Slide 1 (Dark Desktop / Mobile)
            const shot1 = await send(ws, 'Page.captureScreenshot', { format: 'png' });
            fs.writeFileSync(`${artifactDir}/${isMobile ? 'testimonial_mobile_slide1.png' : 'testimonial_desktop_slide1.png'}`, Buffer.from(shot1.data, 'base64'));

            // Click Next Button to get to Slide 2
            await send(ws, 'Runtime.evaluate', {
              expression: `(() => {
                const nextBtn = document.querySelector('button[aria-label=\"Next testimonial\"]');
                if (nextBtn) nextBtn.click();
              })()`
            });
            await new Promise(r => setTimeout(r, 500));

            const eval2 = await send(ws, 'Runtime.evaluate', {
              expression: `(() => {
                const h2 = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('WHAT PARTNERS SAY'));
                return h2.closest('section').innerText;
              })()`,
              returnByValue: true
            });
            console.log('Slide 2 text snippet:\n', eval2.result.value);

            const shot2 = await send(ws, 'Page.captureScreenshot', { format: 'png' });
            fs.writeFileSync(`${artifactDir}/${isMobile ? 'testimonial_mobile_slide2.png' : 'testimonial_desktop_slide2.png'}`, Buffer.from(shot2.data, 'base64'));

            // Click Next Button to get to Slide 3
            await send(ws, 'Runtime.evaluate', {
              expression: `(() => {
                const nextBtn = document.querySelector('button[aria-label=\"Next testimonial\"]');
                if (nextBtn) nextBtn.click();
              })()`
            });
            await new Promise(r => setTimeout(r, 500));

            const eval3 = await send(ws, 'Runtime.evaluate', {
              expression: `(() => {
                const h2 = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('WHAT PARTNERS SAY'));
                return h2.closest('section').innerText;
              })()`,
              returnByValue: true
            });
            console.log('Slide 3 text snippet:\n', eval3.result.value);

            const shot3 = await send(ws, 'Page.captureScreenshot', { format: 'png' });
            fs.writeFileSync(`${artifactDir}/${isMobile ? 'testimonial_mobile_slide3.png' : 'testimonial_desktop_slide3.png'}`, Buffer.from(shot3.data, 'base64'));

            // Click Next Button to wrap around to Slide 1
            await send(ws, 'Runtime.evaluate', {
              expression: `(() => {
                const nextBtn = document.querySelector('button[aria-label=\"Next testimonial\"]');
                if (nextBtn) nextBtn.click();
              })()`
            });
            await new Promise(r => setTimeout(r, 500));

            const evalWrap = await send(ws, 'Runtime.evaluate', {
              expression: `(() => {
                const h2 = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('WHAT PARTNERS SAY'));
                return h2.closest('section').innerText.includes('01 / 03');
              })()`,
              returnByValue: true
            });
            console.log('Wrap-around to 01 / 03 successful:', evalWrap.result.value);

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
  console.log('Testing Desktop Viewport...');
  await testAndCapture({ width: 1440, height: 900, isMobile: false });
  await new Promise(r => setTimeout(r, 1000));

  console.log('Testing Mobile Viewport...');
  await testAndCapture({ width: 390, height: 844, isMobile: true });
  console.log('All live tests complete!');
}

run().catch(console.error);
