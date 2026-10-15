const https = require('https');

https.get('https://digitify.live/', (res) => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    const httpMatches = body.match(/http:\/\/[^\s"'<>]+/g) || [];
    console.log('HTTP URLs in HTML:', httpMatches);
    const scripts = body.match(/src="([^"]+)"/g) || [];
    console.log('Scripts:', scripts);
    const links = body.match(/href="([^"]+)"/g) || [];
    console.log('Links:', links.filter(l => l.includes('http')));

    // Fetch the main js bundle
    const mainJsMatch = body.match(/src="(\/assets\/index-[^"]+\.js)"/);
    if (mainJsMatch) {
      console.log('Checking main JS bundle:', mainJsMatch[1]);
      https.get('https://digitify.live' + mainJsMatch[1], (jsRes) => {
        let jsBody = '';
        jsRes.on('data', d => jsBody += d);
        jsRes.on('end', () => {
          const jsHttpMatches = jsBody.match(/http:\/\/[^\s"'`<>]+/g) || [];
          console.log('HTTP URLs in JS:', jsHttpMatches.filter(u => !u.includes('w3.org')));
        });
      });
    }
  });
});
