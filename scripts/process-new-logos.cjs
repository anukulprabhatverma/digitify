const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/anuab/.gemini/antigravity/brain/5013d6ad-58a1-4320-a5c8-313023fbc5ff/.user_uploaded/';
const destDir = path.join(__dirname, '../public/images/clients/');

async function processLogos() {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // 1. Carrot & Stick (media_1791038566589.png)
  {
    const img = sharp(srcDir + 'media_1791038566589.png');
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
    const outBuf = Buffer.alloc(data.length);
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i+1], b = data[i+2];
      const lum = (r + g + b) / 3;
      if (lum > 235) {
        outBuf[i] = 0;
        outBuf[i+1] = 0;
        outBuf[i+2] = 0;
        outBuf[i+3] = 0;
      } else {
        const alpha = Math.round(255 * (1 - lum / 235));
        outBuf[i] = 0;
        outBuf[i+1] = 0;
        outBuf[i+2] = 0;
        outBuf[i+3] = alpha;
      }
    }
    const cleanPng = await sharp(outBuf, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim()
      .png()
      .toBuffer();
    fs.writeFileSync(path.join(destDir, 'carrotstick-clean.png'), cleanPng);
    const m = await sharp(cleanPng).metadata();
    console.log('carrotstick-clean created:', m.width, 'x', m.height);
  }

  // 2. Sign of the Times (media_1791038571602.png)
  {
    const img = sharp(srcDir + 'media_1791038571602.png');
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
    const outBuf = Buffer.alloc(data.length);
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i+1], b = data[i+2];
      const lum = (r + g + b) / 3;
      if (lum > 235) {
        outBuf[i] = 0;
        outBuf[i+1] = 0;
        outBuf[i+2] = 0;
        outBuf[i+3] = 0;
      } else {
        const alpha = Math.round(255 * (1 - lum / 235));
        outBuf[i] = 0;
        outBuf[i+1] = 0;
        outBuf[i+2] = 0;
        outBuf[i+3] = alpha;
      }
    }
    const cleanPng = await sharp(outBuf, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim()
      .png()
      .toBuffer();
    fs.writeFileSync(path.join(destDir, 'signofthetimes-clean.png'), cleanPng);
    const m = await sharp(cleanPng).metadata();
    console.log('signofthetimes-clean created:', m.width, 'x', m.height);
  }

  // 3. Urban Platter (media_1791038576533.png)
  {
    const img = sharp(srcDir + 'media_1791038576533.png');
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
    const w = info.width, h = info.height;
    
    // Flood fill from borders to identify outer background
    const visited = new Uint8Array(w * h);
    const queue = [];
    for (let x = 0; x < w; x++) {
      queue.push(0 * w + x);
      queue.push((h - 1) * w + x);
    }
    for (let y = 0; y < h; y++) {
      queue.push(y * w + 0);
      queue.push(y * w + (w - 1));
    }
    
    while (queue.length > 0) {
      const idx = queue.pop();
      if (visited[idx]) continue;
      
      const px = (idx % w);
      const py = Math.floor(idx / w);
      const pOffset = idx * 4;
      const r = data[pOffset], g = data[pOffset+1], b = data[pOffset+2];
      const lum = (r + g + b) / 3;
      
      // If it is background color (> 170)
      if (lum > 170) {
        visited[idx] = 1;
        if (px > 0 && !visited[idx - 1]) queue.push(idx - 1);
        if (px < w - 1 && !visited[idx + 1]) queue.push(idx + 1);
        if (py > 0 && !visited[idx - w]) queue.push(idx - w);
        if (py < h - 1 && !visited[idx + w]) queue.push(idx + w);
      }
    }
    
    const outBuf = Buffer.alloc(data.length);
    for (let i = 0; i < w * h; i++) {
      const pOffset = i * 4;
      const r = data[pOffset], g = data[pOffset+1], b = data[pOffset+2];
      if (visited[i]) {
        outBuf[pOffset] = 0;
        outBuf[pOffset+1] = 0;
        outBuf[pOffset+2] = 0;
        outBuf[pOffset+3] = 0;
      } else {
        if (r > 190 && g > 190 && b > 190) {
          outBuf[pOffset] = 255;
          outBuf[pOffset+1] = 255;
          outBuf[pOffset+2] = 255;
          outBuf[pOffset+3] = 255;
        } else {
          outBuf[pOffset] = r;
          outBuf[pOffset+1] = g;
          outBuf[pOffset+2] = b;
          outBuf[pOffset+3] = 255;
        }
      }
    }
    
    const cleanPng = await sharp(outBuf, { raw: { width: w, height: h, channels: 4 } })
      .trim()
      .png()
      .toBuffer();
    fs.writeFileSync(path.join(destDir, 'urbanplatter-clean.png'), cleanPng);
    const m = await sharp(cleanPng).metadata();
    console.log('urbanplatter-clean created:', m.width, 'x', m.height);
  }

  // 4. Homecraft Textiles (media_1791038561014.png)
  {
    const img = sharp(srcDir + 'media_1791038561014.png');
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
    const w = info.width, h = info.height;
    
    const visited = new Uint8Array(w * h);
    const queue = [];
    for (let x = 0; x < w; x++) {
      queue.push(0 * w + x);
      queue.push((h - 1) * w + x);
    }
    for (let y = 0; y < h; y++) {
      queue.push(y * w + 0);
      queue.push(y * w + (w - 1));
    }
    while (queue.length > 0) {
      const idx = queue.pop();
      if (visited[idx]) continue;
      const pOffset = idx * 4;
      const r = data[pOffset], g = data[pOffset+1], b = data[pOffset+2];
      const lum = (r + g + b) / 3;
      if (lum > 225) {
        visited[idx] = 1;
        const px = idx % w, py = Math.floor(idx / w);
        if (px > 0 && !visited[idx - 1]) queue.push(idx - 1);
        if (px < w - 1 && !visited[idx + 1]) queue.push(idx + 1);
        if (py > 0 && !visited[idx - w]) queue.push(idx - w);
        if (py < h - 1 && !visited[idx + w]) queue.push(idx + w);
      }
    }
    
    const lightBuf = Buffer.alloc(data.length);
    const darkBuf = Buffer.alloc(data.length);
    
    for (let i = 0; i < w * h; i++) {
      const pOffset = i * 4;
      const r = data[pOffset], g = data[pOffset+1], b = data[pOffset+2];
      if (visited[i]) {
        lightBuf[pOffset+3] = 0;
        darkBuf[pOffset+3] = 0;
      } else {
        lightBuf[pOffset] = r;
        lightBuf[pOffset+1] = g;
        lightBuf[pOffset+2] = b;
        lightBuf[pOffset+3] = 255;
        
        // Dark version: brighten blue text for dark mode contrast
        if (b > 60 && r < 70) {
          darkBuf[pOffset] = Math.min(255, Math.round(r * 2.2 + 80));
          darkBuf[pOffset+1] = Math.min(255, Math.round(g * 1.8 + 80));
          darkBuf[pOffset+2] = Math.min(255, Math.round(b * 1.5 + 40));
        } else {
          darkBuf[pOffset] = r;
          darkBuf[pOffset+1] = g;
          darkBuf[pOffset+2] = b;
        }
        darkBuf[pOffset+3] = 255;
      }
    }
    
    const cleanLight = await sharp(lightBuf, { raw: { width: w, height: h, channels: 4 } }).trim().png().toBuffer();
    const cleanDark = await sharp(darkBuf, { raw: { width: w, height: h, channels: 4 } }).trim().png().toBuffer();
    
    fs.writeFileSync(path.join(destDir, 'homecraft-clean.png'), cleanLight);
    fs.writeFileSync(path.join(destDir, 'homecraft-darkmode.png'), cleanDark);
    
    const m = await sharp(cleanLight).metadata();
    console.log('homecraft-clean created:', m.width, 'x', m.height);
  }
}

processLogos().catch(console.error);
