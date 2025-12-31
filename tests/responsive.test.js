/**
 * Responsive Design Tests
 * Tests mobile, tablet, and desktop compatibility using Puppeteer
 * 
 * Run with: node tests/responsive.test.js
 * Make sure the dev server is running: npm run dev
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Test configuration
const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';
const SCREENSHOTS_DIR = path.join(__dirname, 'screenshots');
const RESULTS_FILE = path.join(__dirname, 'test-results.json');

// Device configurations
const DEVICES = {
  mobile: {
    name: 'iPhone 12',
    viewport: { width: 390, height: 844, isMobile: true, hasTouch: true },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
  },
  mobileSmall: {
    name: 'iPhone SE',
    viewport: { width: 375, height: 667, isMobile: true, hasTouch: true },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
  },
  mobileLarge: {
    name: 'iPhone 14 Pro Max',
    viewport: { width: 430, height: 932, isMobile: true, hasTouch: true },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15'
  },
  tablet: {
    name: 'iPad',
    viewport: { width: 768, height: 1024, isMobile: true, hasTouch: true },
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
  },
  tabletLarge: {
    name: 'iPad Pro',
    viewport: { width: 1024, height: 1366, isMobile: true, hasTouch: true },
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
  },
  desktop: {
    name: 'Desktop 1920x1080',
    viewport: { width: 1920, height: 1080, isMobile: false, hasTouch: false },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  },
  desktopSmall: {
    name: 'Desktop 1280x720',
    viewport: { width: 1280, height: 720, isMobile: false, hasTouch: false },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
};

// Test results storage
const testResults = {
  timestamp: new Date().toISOString(),
  baseUrl: BASE_URL,
  devices: {},
  summary: {
    total: 0,
    passed: 0,
    failed: 0,
    warnings: 0
  }
};

// Utility functions
function createScreenshotsDir() {
  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  }
}

function log(message, type = 'info') {
  const colors = {
    info: '\x1b[36m',
    success: '\x1b[32m',
    error: '\x1b[31m',
    warning: '\x1b[33m',
    reset: '\x1b[0m'
  };
  console.log(`${colors[type]}${message}${colors.reset}`);
}

function saveResults() {
  fs.writeFileSync(RESULTS_FILE, JSON.stringify(testResults, null, 2));
  log(`\n📊 Test results saved to: ${RESULTS_FILE}`, 'info');
}

// Test functions
async function testResponsiveLayout(page, deviceName) {
  const tests = [];
  
  // Test 1: Check if all sections are visible
  log(`  Testing section visibility...`);
  const sections = ['home', 'services', 'about', 'portfolio', 'testimonials', 'contact'];
  for (const section of sections) {
    const element = await page.$(`#${section}`);
    tests.push({
      name: `Section ${section} exists`,
      passed: element !== null,
      critical: true
    });
  }
  
  // Test 2: Check for horizontal overflow
  log(`  Testing for horizontal overflow...`);
  const hasOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  tests.push({
    name: 'No horizontal overflow',
    passed: !hasOverflow,
    critical: true
  });
  
  // Test 3: Check header visibility
  log(`  Testing header...`);
  const headerVisible = await page.evaluate(() => {
    const header = document.querySelector('header');
    return header && window.getComputedStyle(header).display !== 'none';
  });
  tests.push({
    name: 'Header is visible',
    passed: headerVisible,
    critical: true
  });
  
  // Test 4: Check footer visibility
  log(`  Testing footer...`);
  const footerVisible = await page.evaluate(() => {
    const footer = document.querySelector('footer');
    return footer && window.getComputedStyle(footer).display !== 'none';
  });
  tests.push({
    name: 'Footer is visible',
    passed: footerVisible,
    critical: true
  });
  
  return tests;
}

async function testTouchTargets(page, deviceName) {
  const tests = [];
  
  log(`  Testing touch target sizes...`);
  const touchTargets = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button, a[href]'));
    return buttons.map(btn => {
      const rect = btn.getBoundingClientRect();
      return {
        tag: btn.tagName,
        width: rect.width,
        height: rect.height,
        text: btn.textContent.trim().substring(0, 30)
      };
    });
  });
  
  const minSize = 44; // WCAG minimum touch target size
  const smallTargets = touchTargets.filter(t => t.width < minSize || t.height < minSize);
  
  tests.push({
    name: `Touch targets meet ${minSize}px minimum`,
    passed: smallTargets.length === 0,
    critical: false,
    details: smallTargets.length > 0 ? `Found ${smallTargets.length} small targets` : null
  });
  
  return tests;
}

async function testTypography(page, deviceName) {
  const tests = [];
  
  log(`  Testing typography...`);
  const fontSizes = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, button'));
    return elements.map(el => {
      const style = window.getComputedStyle(el);
      return {
        tag: el.tagName,
        fontSize: parseFloat(style.fontSize),
        lineHeight: parseFloat(style.lineHeight)
      };
    });
  });
  
  // Check minimum font size (16px for body text on mobile)
  const minFontSize = 14; // Allowing slightly smaller for labels
  const tooSmall = fontSizes.filter(f => f.fontSize < minFontSize);
  
  tests.push({
    name: `Font sizes are readable (≥${minFontSize}px)`,
    passed: tooSmall.length === 0,
    critical: false,
    details: tooSmall.length > 0 ? `Found ${tooSmall.length} elements with small text` : null
  });
  
  return tests;
}

async function testImages(page, deviceName) {
  const tests = [];
  
  log(`  Testing images...`);
  const imageStats = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img'));
    return {
      total: images.length,
      loaded: images.filter(img => img.complete && img.naturalHeight > 0).length,
      broken: images.filter(img => !img.complete || img.naturalHeight === 0).length
    };
  });
  
  tests.push({
    name: 'All images loaded successfully',
    passed: imageStats.broken === 0,
    critical: false,
    details: `${imageStats.loaded}/${imageStats.total} images loaded`
  });
  
  return tests;
}

async function testPerformance(page, deviceName) {
  const tests = [];
  
  log(`  Testing performance metrics...`);
  const metrics = await page.evaluate(() => {
    const perfData = performance.getEntriesByType('navigation')[0];
    return {
      domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
      loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
      domInteractive: perfData.domInteractive - perfData.fetchStart
    };
  });
  
  tests.push({
    name: 'DOM Interactive < 3000ms',
    passed: metrics.domInteractive < 3000,
    critical: false,
    details: `${Math.round(metrics.domInteractive)}ms`
  });
  
  return tests;
}

async function testMobileMenu(page, deviceName, viewport) {
  const tests = [];
  
  // Only test mobile menu on screens smaller than 768px (md breakpoint)
  if (viewport.width >= 768) {
    return tests; // Skip mobile menu tests on tablet and desktop
  }
  
  log(`  Testing mobile menu...`);
  
  // Check if hamburger menu exists and is visible
  const hamburgerExists = await page.evaluate(() => {
    const menuButton = document.querySelector('button[aria-label*="menu" i], button[aria-expanded]');
    if (!menuButton) return false;
    const style = window.getComputedStyle(menuButton);
    return style.display !== 'none' && style.visibility !== 'hidden';
  });
  
  tests.push({
    name: 'Mobile menu button exists',
    passed: hamburgerExists,
    critical: true
  });
  
  if (hamburgerExists) {
    // Try to open mobile menu
    try {
      await page.click('button[aria-label*="menu" i], button[aria-expanded]');
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait for animation
      
      const menuOpen = await page.evaluate(() => {
        const menuButton = document.querySelector('button[aria-expanded]');
        return menuButton && menuButton.getAttribute('aria-expanded') === 'true';
      });
      
      tests.push({
        name: 'Mobile menu opens on click',
        passed: menuOpen,
        critical: true
      });
      
      // Close menu
      if (menuOpen) {
        await page.click('button[aria-expanded="true"]');
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    } catch (error) {
      tests.push({
        name: 'Mobile menu interaction',
        passed: false,
        critical: true,
        details: error.message
      });
    }
  }
  
  return tests;
}

async function testAccessibility(page, deviceName) {
  const tests = [];
  
  log(`  Testing accessibility...`);
  
  // Check for alt text on images
  const altTextStats = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img'));
    return {
      total: images.length,
      withAlt: images.filter(img => img.alt && img.alt.trim() !== '').length
    };
  });
  
  tests.push({
    name: 'Images have alt text',
    passed: altTextStats.withAlt === altTextStats.total,
    critical: false,
    details: `${altTextStats.withAlt}/${altTextStats.total} images have alt text`
  });
  
  // Check for proper heading hierarchy
  const headingHierarchy = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    return headings.map(h => h.tagName);
  });
  
  const hasH1 = headingHierarchy.includes('H1');
  tests.push({
    name: 'Page has H1 heading',
    passed: hasH1,
    critical: false
  });
  
  return tests;
}

async function captureScreenshot(page, deviceName, suffix = '') {
  const filename = `${deviceName.replace(/\s+/g, '-').toLowerCase()}${suffix}.png`;
  const filepath = path.join(SCREENSHOTS_DIR, filename);
  await page.screenshot({ path: filepath, fullPage: true });
  log(`  📸 Screenshot saved: ${filename}`, 'info');
  return filename;
}

async function testDevice(browser, deviceKey, deviceConfig) {
  log(`\n🔍 Testing ${deviceConfig.name} (${deviceConfig.viewport.width}x${deviceConfig.viewport.height})`, 'info');
  
  const page = await browser.newPage();
  await page.setViewport(deviceConfig.viewport);
  await page.setUserAgent(deviceConfig.userAgent);
  
  const deviceResults = {
    name: deviceConfig.name,
    viewport: deviceConfig.viewport,
    tests: [],
    screenshots: [],
    passed: 0,
    failed: 0,
    warnings: 0
  };
  
  try {
    // Navigate to page
    log(`  Loading ${BASE_URL}...`);
    await page.goto(BASE_URL, { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait for content to load
    await page.waitForSelector('header', { timeout: 10000 });
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for animations
    
    // Capture initial screenshot
    const screenshot = await captureScreenshot(page, deviceConfig.name, '-initial');
    deviceResults.screenshots.push(screenshot);
    
    // Run all tests
    const allTests = [
      ...(await testResponsiveLayout(page, deviceConfig.name)),
      ...(await testTouchTargets(page, deviceConfig.name)),
      ...(await testTypography(page, deviceConfig.name)),
      ...(await testImages(page, deviceConfig.name)),
      ...(await testPerformance(page, deviceConfig.name)),
      ...(await testMobileMenu(page, deviceConfig.name, deviceConfig.viewport)),
      ...(await testAccessibility(page, deviceConfig.name))
    ];
    
    // Process test results
    allTests.forEach(test => {
      deviceResults.tests.push(test);
      testResults.summary.total++;
      
      if (test.passed) {
        deviceResults.passed++;
        testResults.summary.passed++;
      } else {
        if (test.critical) {
          deviceResults.failed++;
          testResults.summary.failed++;
        } else {
          deviceResults.warnings++;
          testResults.summary.warnings++;
        }
      }
    });
    
    // Scroll to bottom and capture
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise(resolve => setTimeout(resolve, 1000));
    const bottomScreenshot = await captureScreenshot(page, deviceConfig.name, '-bottom');
    deviceResults.screenshots.push(bottomScreenshot);
    
    // Test scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Print device summary
    log(`\n  ✅ Passed: ${deviceResults.passed}`, 'success');
    if (deviceResults.warnings > 0) {
      log(`  ⚠️  Warnings: ${deviceResults.warnings}`, 'warning');
    }
    if (deviceResults.failed > 0) {
      log(`  ❌ Failed: ${deviceResults.failed}`, 'error');
    }
    
  } catch (error) {
    log(`  ❌ Error testing ${deviceConfig.name}: ${error.message}`, 'error');
    deviceResults.error = error.message;
    testResults.summary.failed++;
  } finally {
    await page.close();
  }
  
  testResults.devices[deviceKey] = deviceResults;
}

async function runTests() {
  log('\n🚀 Starting Responsive Design Tests\n', 'info');
  log(`📍 Testing URL: ${BASE_URL}\n`, 'info');
  
  createScreenshotsDir();
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    // Test all devices
    for (const [key, config] of Object.entries(DEVICES)) {
      await testDevice(browser, key, config);
    }
    
    // Print final summary
    log('\n' + '='.repeat(60), 'info');
    log('📊 TEST SUMMARY', 'info');
    log('='.repeat(60), 'info');
    log(`Total Tests: ${testResults.summary.total}`, 'info');
    log(`✅ Passed: ${testResults.summary.passed}`, 'success');
    log(`⚠️  Warnings: ${testResults.summary.warnings}`, 'warning');
    log(`❌ Failed: ${testResults.summary.failed}`, testResults.summary.failed > 0 ? 'error' : 'info');
    log('='.repeat(60) + '\n', 'info');
    
    // Save results
    saveResults();
    
    // Print detailed failures
    if (testResults.summary.failed > 0) {
      log('\n❌ FAILED TESTS:', 'error');
      for (const [deviceKey, deviceResult] of Object.entries(testResults.devices)) {
        const failedTests = deviceResult.tests.filter(t => !t.passed && t.critical);
        if (failedTests.length > 0) {
          log(`\n  ${deviceResult.name}:`, 'error');
          failedTests.forEach(test => {
            log(`    • ${test.name}`, 'error');
            if (test.details) {
              log(`      ${test.details}`, 'error');
            }
          });
        }
      }
    }
    
    // Print warnings
    if (testResults.summary.warnings > 0) {
      log('\n⚠️  WARNINGS:', 'warning');
      for (const [deviceKey, deviceResult] of Object.entries(testResults.devices)) {
        const warningTests = deviceResult.tests.filter(t => !t.passed && !t.critical);
        if (warningTests.length > 0) {
          log(`\n  ${deviceResult.name}:`, 'warning');
          warningTests.forEach(test => {
            log(`    • ${test.name}`, 'warning');
            if (test.details) {
              log(`      ${test.details}`, 'warning');
            }
          });
        }
      }
    }
    
    log(`\n📸 Screenshots saved to: ${SCREENSHOTS_DIR}`, 'info');
    
    // Exit with appropriate code
    process.exit(testResults.summary.failed > 0 ? 1 : 0);
    
  } catch (error) {
    log(`\n❌ Fatal error: ${error.message}`, 'error');
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Run tests
runTests().catch(error => {
  log(`\n❌ Unhandled error: ${error.message}`, 'error');
  process.exit(1);
});
