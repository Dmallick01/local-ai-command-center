// browser-automation.js

// Importing required libraries
const puppeteer = require('puppeteer');

// Function to automate browser tasks
async function automateBrowser() {
    // Launch the browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to a website
    await page.goto('https://example.com');

    // Take a screenshot
    await page.screenshot({ path: 'example.png' });
    console.log('Screenshot taken!');

    // Close the browser
    await browser.close();
}

// Execute the function
automateBrowser();
