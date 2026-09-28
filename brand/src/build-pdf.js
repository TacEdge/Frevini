// Builds ../Frevini-Studio-Brand-Guidelines.pdf from guidelines.html with headless Chromium.
// Usage: NODE_PATH=$(npm root -g) node build-pdf.js
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const src = 'file://' + path.resolve(__dirname, 'guidelines.html');
  const out = path.resolve(__dirname, '..', 'Frevini-Studio-Brand-Guidelines.pdf');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(src, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: out,
    width: '210mm',
    height: '297mm',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  await browser.close();
  console.log('written', out);
})();
