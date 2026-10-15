const dns = require('dns').promises;
const tls = require('tls');
const https = require('https');
const http = require('http');

async function testDns() {
  console.log('================== DNS ANALYSIS ==================');
  const domains = ['digitify.live', 'www.digitify.live'];
  const recordTypes = ['A', 'AAAA', 'CNAME', 'TXT', 'CAA', 'NS'];

  for (const domain of domains) {
    console.log(`\n--- Domain: ${domain} ---`);
    for (const type of recordTypes) {
      try {
        const records = await dns.resolve(domain, type);
        console.log(`  [${type}]`, JSON.stringify(records));
      } catch (e) {
        if (e.code !== 'ENODATA' && e.code !== 'ENOTFOUND') {
          console.log(`  [${type}] Error: ${e.code}`);
        }
      }
    }
  }
}

function testTls(hostname, servername) {
  return new Promise((resolve) => {
    console.log(`\n--- TLS Handshake: connect to ${hostname} (SNI: ${servername}) ---`);
    const socket = tls.connect(
      {
        host: hostname,
        port: 443,
        servername: servername,
        rejectUnauthorized: false,
        timeout: 5000,
      },
      () => {
        const cert = socket.getPeerCertificate(true);
        console.log(`  Authorized: ${socket.authorized} ${socket.authorizationError || ''}`);
        console.log(`  Subject CN: ${cert.subject?.CN}`);
        console.log(`  Issuer: ${cert.issuer?.O} (${cert.issuer?.CN})`);
        console.log(`  SAN: ${cert.subjectaltname}`);
        console.log(`  Valid: ${cert.valid_from} -> ${cert.valid_to}`);
        socket.end();
        resolve({
          authorized: socket.authorized,
          error: socket.authorizationError,
          san: cert.subjectaltname,
        });
      }
    );

    socket.on('error', (err) => {
      console.log(`  TLS Error: ${err.message}`);
      resolve({ authorized: false, error: err.message });
    });

    socket.on('timeout', () => {
      console.log(`  TLS Timeout`);
      socket.destroy();
      resolve({ authorized: false, error: 'Timeout' });
    });
  });
}

function testHttp(url) {
  return new Promise((resolve) => {
    const isHttps = url.startsWith('https');
    const client = isHttps ? https : http;
    const req = client.request(
      url,
      {
        method: 'HEAD',
        rejectUnauthorized: false,
        timeout: 5000,
      },
      (res) => {
        console.log(`  [${url}] -> Status ${res.statusCode} | Location: ${res.headers.location || 'none'} | Server: ${res.headers.server || 'none'}`);
        resolve({ status: res.statusCode, location: res.headers.location });
      }
    );

    req.on('error', (err) => {
      console.log(`  [${url}] -> Request Error: ${err.message}`);
      resolve({ error: err.message });
    });

    req.on('timeout', () => {
      console.log(`  [${url}] -> Request Timeout`);
      req.destroy();
      resolve({ error: 'Timeout' });
    });

    req.end();
  });
}

async function run() {
  await testDns();

  console.log('\n================== TLS / SSL CHECKS ==================');
  await testTls('digitify.live', 'digitify.live');
  await testTls('www.digitify.live', 'www.digitify.live');
  await testTls('76.76.21.21', 'digitify.live');
  await testTls('76.76.21.21', 'www.digitify.live');
  await testTls('216.198.79.1', 'digitify.live');
  await testTls('216.198.79.1', 'www.digitify.live');

  console.log('\n================== HTTP / REDIRECT CHECKS ==================');
  await testHttp('http://digitify.live/');
  await testHttp('https://digitify.live/');
  await testHttp('http://www.digitify.live/');
  await testHttp('https://www.digitify.live/');
}

run();
