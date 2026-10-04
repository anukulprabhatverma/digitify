const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:/Users/anuab/.gemini/antigravity/brain/5013d6ad-58a1-4320-a5c8-313023fbc5ff';

async function runTest() {
  console.log('Launching headless Chrome...');
  const proc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9225',
    '--no-sandbox',
    '--disable-gpu',
    '--window-size=1440,1100',
    'http://127.0.0.1:5173/work'
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
    await new Promise(r => setTimeout(r, 2500));
    const listRes = await fetch('http://127.0.0.1:9225/json');
    const tabs = await listRes.json();
    const tab = tabs.find(t => t.url.includes('5173')) || tabs[0];
    const ws = new WebSocket(tab.webSocketDebuggerUrl);

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    console.log('Connected to CDP websocket.');
    await send(ws, 'Page.enable');
    await send(ws, 'Runtime.enable');
    await new Promise(r => setTimeout(r, 1000));

    // Verify projects list in DOM
    const evalResult = await send(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const articles = Array.from(document.querySelectorAll('article'));
        return articles.map(a => {
          const num = a.querySelector('.text-digitify-purple')?.textContent?.trim() || '';
          const name = a.querySelector('h3')?.textContent?.trim() || '';
          const tag = a.querySelector('.uppercase')?.textContent?.trim() || '';
          const img = a.querySelector('img')?.getAttribute('src') || '';
          return { num, name, tag, img };
        });
      })()`,
      returnByValue: true
    });

    console.log('Detected project cards in DOM:', evalResult.result.value);

    // 1. Desktop Screenshot of Work page
    const shotDesktop = await send(ws, 'Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(artifactDir + '/work_desktop_batch2.png', Buffer.from(shotDesktop.data, 'base64'));
    console.log('Saved work_desktop_batch2.png');

    // 2. Click Homecraft Textiles card (4th card) to open modal
    console.log('Clicking Homecraft Textiles card...');
    await send(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const cards = Array.from(document.querySelectorAll('article'));
        const homecraft = cards.find(c => c.textContent.includes('Homecraft Textiles'));
        if (homecraft) homecraft.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1200));

    // Verify modal content for Homecraft Textiles
    const homecraftModalCheck = await send(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const modal = document.querySelector('[role="dialog"]');
        if (!modal) return { open: false };
        const title = modal.querySelector('h2')?.textContent?.trim();
        const pages = Array.from(modal.querySelectorAll('img')).map(img => img.getAttribute('src'));
        return { open: true, title, pageCount: pages.length, pages };
      })()`,
      returnByValue: true
    });
    console.log('Homecraft Textiles modal check:', homecraftModalCheck.result.value);

    const shotModalHomecraft = await send(ws, 'Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(artifactDir + '/work_modal_homecraft.png', Buffer.from(shotModalHomecraft.data, 'base64'));
    console.log('Saved work_modal_homecraft.png');

    // Close modal
    await send(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const closeBtn = document.querySelector('[aria-label="Close Project Deck"]');
        if (closeBtn) closeBtn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 600));

    // 3. Click Sign of the Times London card (5th card) to open modal
    console.log('Clicking Sign of the Times London card...');
    await send(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const cards = Array.from(document.querySelectorAll('article'));
        const sign = cards.find(c => c.textContent.includes('Sign of the Times'));
        if (sign) sign.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1200));

    const signModalCheck = await send(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const modal = document.querySelector('[role="dialog"]');
        if (!modal) return { open: false };
        const title = modal.querySelector('h2')?.textContent?.trim();
        const pages = Array.from(modal.querySelectorAll('img')).map(img => img.getAttribute('src'));
        return { open: true, title, pageCount: pages.length, pages };
      })()`,
      returnByValue: true
    });
    console.log('Sign of the Times modal check:', signModalCheck.result.value);

    const shotModalSign = await send(ws, 'Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(artifactDir + '/work_modal_signofthetimes.png', Buffer.from(shotModalSign.data, 'base64'));
    console.log('Saved work_modal_signofthetimes.png');

    // Close modal
    await send(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const closeBtn = document.querySelector('[aria-label="Close Project Deck"]');
        if (closeBtn) closeBtn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 600));

    // 4. Test Mobile viewport
    console.log('Switching to mobile viewport...');
    await send(ws, 'Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 2,
      mobile: true
    });
    await new Promise(r => setTimeout(r, 800));

    const shotMobile = await send(ws, 'Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(artifactDir + '/work_mobile_batch2.png', Buffer.from(shotMobile.data, 'base64'));
    console.log('Saved work_mobile_batch2.png');

    ws.close();
    proc.kill();
    console.log('Batch 2 tests completed successfully!');
  } catch (err) {
    console.error('Error during test:', err);
    proc.kill();
  }
}

runTest();
