const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:/Users/anuab/.gemini/antigravity/brain/5013d6ad-58a1-4320-a5c8-313023fbc5ff';

async function runTest() {
  console.log('Launching headless Chrome...');
  const proc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9228',
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
    const listRes = await fetch('http://127.0.0.1:9228/json');
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

    // Scroll to Urban Platter (6th card) and take screenshot
    await send(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const cards = document.querySelectorAll('article');
        if (cards[5]) {
          cards[5].scrollIntoView({ block: 'center' });
        }
      })()`
    });
    await new Promise(r => setTimeout(r, 800));

    const shotCards = await send(ws, 'Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(artifactDir + '/work_cards_05_06.png', Buffer.from(shotCards.data, 'base64'));
    console.log('Saved work_cards_05_06.png');

    // Click Urban Platter card to open modal
    console.log('Clicking Urban Platter card...');
    await send(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const cards = Array.from(document.querySelectorAll('article'));
        const urban = cards.find(c => c.textContent.includes('Urban Platter'));
        if (urban) urban.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1200));

    // Verify modal content for Urban Platter
    const urbanModalCheck = await send(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const modal = document.querySelector('[role="dialog"]');
        if (!modal) return { open: false };
        const title = modal.querySelector('h2')?.textContent?.trim();
        const pages = Array.from(modal.querySelectorAll('img')).map(img => img.getAttribute('src'));
        return { open: true, title, pageCount: pages.length, pages };
      })()`,
      returnByValue: true
    });
    console.log('Urban Platter modal check:', urbanModalCheck.result.value);

    const shotModalUrban = await send(ws, 'Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(artifactDir + '/work_modal_urban_platter.png', Buffer.from(shotModalUrban.data, 'base64'));
    console.log('Saved work_modal_urban_platter.png');

    // Close modal
    await send(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const closeBtn = document.querySelector('[aria-label="Close Project Deck"]');
        if (closeBtn) closeBtn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 600));

    // Test Mobile viewport
    console.log('Switching to mobile viewport...');
    await send(ws, 'Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 2,
      mobile: true
    });
    await new Promise(r => setTimeout(r, 800));

    // Scroll to Urban Platter on mobile and open modal
    await send(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const cards = Array.from(document.querySelectorAll('article'));
        const urban = cards.find(c => c.textContent.includes('Urban Platter'));
        if (urban) urban.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1000));

    const shotMobile = await send(ws, 'Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(artifactDir + '/work_mobile_urban_platter.png', Buffer.from(shotMobile.data, 'base64'));
    console.log('Saved work_mobile_urban_platter.png');

    ws.close();
    proc.kill();
    console.log('Urban Platter test completed successfully!');
  } catch (err) {
    console.error('Error during test:', err);
    proc.kill();
  }
}

runTest();
