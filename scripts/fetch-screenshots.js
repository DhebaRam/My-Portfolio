/**
 * Script to fetch app screenshots from App Store and Play Store
 * 
 * Usage:
 * node scripts/fetch-screenshots.js
 * 
 * This script will help you download screenshots from store pages.
 * You can also manually download screenshots from:
 * - Play Store: Visit the app page, right-click on screenshots, "Save Image As"
 * - App Store: Visit the app page, right-click on screenshots, "Save Image As"
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// App Store and Play Store URLs
const apps = [
  {
    name: 'NaWeDey',
    playStore: 'https://play.google.com/store/apps/details?id=com.nawedey.app',
    appStore: 'https://apps.apple.com/in/app/nawedey/id123456789',
    screenshots: ['nawedey-1.jpg', 'nawedey-2.jpg', 'nawedey-3.jpg']
  },
  {
    name: 'Renew360',
    playStore: 'https://play.google.com/store/apps/details?id=com.renew360.app',
    appStore: 'https://apps.apple.com/in/app/renew360/id123456789',
    screenshots: ['renew360-1.jpg', 'renew360-2.jpg']
  },
  {
    name: 'Star Student App',
    playStore: 'https://play.google.com/store/apps/details?id=com.star.stars',
    screenshots: ['starstudent-1.jpg']
  },
  {
    name: 'Score More App',
    playStore: 'https://play.google.com/store/apps/details?id=com.app.scoremore',
    appStore: 'https://apps.apple.com/in/app/scoremore-emt-prep/id6739198670',
    screenshots: ['scoremore-1.jpg', 'scoremore-2.jpg']
  }
];

const screenshotsDir = path.join(__dirname, '..', 'public', 'screenshots');

// Ensure screenshots directory exists
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

console.log('📱 App Screenshot Fetcher');
console.log('========================\n');
console.log('This script provides instructions for downloading screenshots.\n');
console.log('Manual Method (Recommended):\n');
console.log('1. Visit the app page on Play Store or App Store');
console.log('2. Right-click on each screenshot');
console.log('3. Select "Save Image As" or "Save Picture As"');
console.log('4. Save to: public/screenshots/');
console.log('5. Use the naming convention below\n');

console.log('Apps to download screenshots for:\n');
apps.forEach((app, index) => {
  console.log(`${index + 1}. ${app.name}`);
  if (app.playStore) {
    console.log(`   Play Store: ${app.playStore}`);
  }
  if (app.appStore) {
    console.log(`   App Store: ${app.appStore}`);
  }
  console.log(`   Screenshot files: ${app.screenshots.join(', ')}`);
  console.log('');
});

console.log('Alternative: Use browser extensions like:');
console.log('- "Image Downloader" for Chrome');
console.log('- "Download All Images" for Firefox');
console.log('\nOr use online tools:');
console.log('- https://www.apkmirror.com/ (for Play Store apps)');
console.log('- https://www.apple.com/app-store/ (for App Store apps)');

// Instructions for Play Store screenshot extraction
console.log('\n📋 Play Store Screenshot URLs Pattern:');
console.log('https://play-lh.googleusercontent.com/[image-id]=w[width]-h[height]');
console.log('\nYou can extract these from the page source or use browser DevTools.');

// Instructions for App Store screenshot extraction
console.log('\n📋 App Store Screenshot URLs Pattern:');
console.log('https://is[number]-ssl.mzstatic.com/image/thumb/[path]/[size].jpg');
console.log('\nYou can extract these from the page source or use browser DevTools.');

console.log('\n✅ Once screenshots are downloaded, place them in: public/screenshots/');
console.log('The portfolio will automatically display them!');

