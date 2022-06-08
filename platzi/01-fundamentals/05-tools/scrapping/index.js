const puppeteer = require('puppeteer');

(async () => {
  console.log('Browser launched');
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js');

  let title = await page.evaluate(() => {
    const h1 = document.getElementById('firstHeading');
    console.log(h1.innerHTML);

    return h1.innerHTML;
  })
  console.log(title);

  console.log('Closing browser...');
  await browser.close();
  console.log('Browser closed');
})();