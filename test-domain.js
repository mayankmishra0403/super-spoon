#!/usr/bin/env node

/**
 * Domain Testing Script for EduNova
 * Tests if your .tech domain is properly configured
 */

const https = require('https');
const http = require('http');

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

function testDomain(domain) {
  return new Promise((resolve) => {
    log(colors.blue, `🔍 Testing domain: ${domain}`);
    
    // Test HTTPS
    const httpsReq = https.get(`https://${domain}`, (res) => {
      log(colors.green, `✅ HTTPS working (Status: ${res.statusCode})`);
      
      // Check headers
      if (res.headers['content-type']?.includes('text/html')) {
        log(colors.green, '✅ HTML content served correctly');
      }
      
      if (res.headers['x-frame-options']) {
        log(colors.green, '✅ Security headers present');
      }
      
      resolve({
        https: true,
        status: res.statusCode,
        headers: res.headers
      });
    });
    
    httpsReq.on('error', (err) => {
      log(colors.red, `❌ HTTPS failed: ${err.message}`);
      
      // Fallback to HTTP
      const httpReq = http.get(`http://${domain}`, (res) => {
        log(colors.yellow, `⚠️  HTTP working but HTTPS failed (Status: ${res.statusCode})`);
        resolve({
          https: false,
          http: true,
          status: res.statusCode
        });
      });
      
      httpReq.on('error', (httpErr) => {
        log(colors.red, `❌ Both HTTPS and HTTP failed`);
        log(colors.red, `   HTTPS Error: ${err.message}`);
        log(colors.red, `   HTTP Error: ${httpErr.message}`);
        resolve({
          https: false,
          http: false,
          error: err.message
        });
      });
    });
  });
}

async function runTests() {
  log(colors.blue, '🎓 EduNova Domain Tester');
  log(colors.blue, '============================');
  
  const domain = process.argv[2];
  
  if (!domain) {
    log(colors.red, '❌ Please provide a domain to test');
    log(colors.yellow, 'Usage: node test-domain.js your-domain.tech');
    process.exit(1);
  }
  
  try {
    const result = await testDomain(domain);
    
    console.log('\n📊 Test Results:');
    console.log('================');
    
    if (result.https) {
      log(colors.green, '✅ Domain is properly configured!');
      log(colors.green, '✅ HTTPS is working');
      log(colors.green, `✅ Status Code: ${result.status}`);
      
      if (result.status === 200) {
        log(colors.green, '✅ Website is loading successfully');
      } else if (result.status >= 300 && result.status < 400) {
        log(colors.yellow, '⚠️  Redirects are working');
      }
      
    } else if (result.http) {
      log(colors.yellow, '⚠️  Domain works but HTTPS needs configuration');
      log(colors.yellow, '   This usually resolves automatically within 24 hours');
      
    } else {
      log(colors.red, '❌ Domain is not accessible');
      log(colors.yellow, '💡 Possible issues:');
      log(colors.yellow, '   - DNS not propagated yet (can take up to 48 hours)');
      log(colors.yellow, '   - Domain not configured in hosting platform');
      log(colors.yellow, '   - DNS records pointing to wrong destination');
    }
    
    console.log('\n🔧 Troubleshooting Tips:');
    console.log('========================');
    console.log('1. Check DNS propagation: https://dnschecker.org');
    console.log('2. Verify domain settings in your hosting dashboard');
    console.log('3. Ensure CNAME record points to correct destination');
    console.log('4. Wait 24-48 hours for full DNS propagation');
    
  } catch (error) {
    log(colors.red, `❌ Test failed: ${error.message}`);
  }
}

runTests();
