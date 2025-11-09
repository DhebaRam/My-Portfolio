# How to Get App Screenshots from App Store & Play Store

## Method 1: Manual Download (Easiest)

### For Play Store:
1. Visit your app's Play Store page (e.g., `https://play.google.com/store/apps/details?id=com.nawedey.app`)
2. Scroll to the screenshots section
3. Right-click on each screenshot
4. Select "Save Image As" or "Save Picture As"
5. Save to `public/screenshots/` folder
6. Rename according to the naming convention (e.g., `nawedey-1.jpg`, `nawedey-2.jpg`)

### For App Store:
1. Visit your app's App Store page (e.g., `https://apps.apple.com/in/app/nawedey/id123456789`)
2. Scroll to the screenshots section
3. Right-click on each screenshot
4. Select "Save Image As" or "Save Picture As"
5. Save to `public/screenshots/` folder
6. Rename according to the naming convention

## Method 2: Browser DevTools (For High Quality)

### Play Store:
1. Open your app's Play Store page
2. Press `F12` or `Right-click > Inspect` to open DevTools
3. Go to the "Network" tab
4. Filter by "Img" or search for "play-lh.googleusercontent.com"
5. Scroll through the screenshots on the page
6. You'll see image requests appear in the Network tab
7. Right-click on each image request > "Open in new tab"
8. Save the image from the new tab

### App Store:
1. Open your app's App Store page
2. Press `F12` or `Right-click > Inspect` to open DevTools
3. Go to the "Network" tab
4. Filter by "Img" or search for "mzstatic.com"
5. Scroll through the screenshots on the page
6. You'll see image requests appear in the Network tab
7. Right-click on each image request > "Open in new tab"
8. Save the image from the new tab

## Method 3: Browser Extensions

### Chrome Extensions:
- **Image Downloader**: Automatically finds and downloads all images on a page
- **Download All Images**: Batch download images from any webpage

### Firefox Extensions:
- **Download All Images**: Similar functionality for Firefox

## Method 4: Online Tools

### Play Store:
- Visit: `https://www.apkmirror.com/`
- Search for your app
- Download screenshots from the app page

### App Store:
- Visit: `https://www.apple.com/app-store/`
- Search for your app
- Use browser DevTools to extract high-quality screenshots

## Screenshot Naming Convention

Place screenshots in `public/screenshots/` with these names:

- **NaWeDey**: `nawedey-1.jpg`, `nawedey-2.jpg`, `nawedey-3.jpg`
- **Renew360**: `renew360-1.jpg`, `renew360-2.jpg`
- **Star Student App**: `starstudent-1.jpg`
- **Score More App**: `scoremore-1.jpg`, `scoremore-2.jpg`
- **Defalcor App**: `defalcor-1.jpg`
- **Loyalty Gaming App**: `loyalty-1.jpg`
- **FIG K12**: `figk12-1.jpg`
- **ES Healthcare**: `eshealthcare-1.jpg`, `eshealthcare-2.jpg`
- **eSwasthya Delivery**: `eswasthya-1.jpg`
- **That's Amore Cheese**: `cheese-1.jpg`, `cheese-2.jpg`
- **Resume Maker**: `resume-1.jpg`
- **AV App**: `avapp-1.jpg`

## Image Requirements

- **Format**: JPG or PNG
- **Aspect Ratio**: 9:16 (portrait) for mobile app screenshots
- **Recommended Size**: 1080x1920px or similar
- **File Size**: Keep under 500KB per image for web optimization

## Quick Links

### Your Apps:

1. **NaWeDey**
   - Play Store: https://play.google.com/store/apps/details?id=com.nawedey.app
   - App Store: https://apps.apple.com/in/app/nawedey/id123456789

2. **Renew360**
   - Play Store: https://play.google.com/store/apps/details?id=com.renew360.app
   - App Store: https://apps.apple.com/in/app/renew360/id123456789

3. **Star Student App**
   - Play Store: https://play.google.com/store/apps/details?id=com.star.stars

4. **Score More App**
   - Play Store: https://play.google.com/store/apps/details?id=com.app.scoremore
   - App Store: https://apps.apple.com/in/app/scoremore-emt-prep/id6739198670

## Tips

- Use the highest quality screenshots available
- Ensure screenshots show the app's best features
- Crop screenshots to remove any borders if needed
- Optimize images before uploading (use tools like TinyPNG or ImageOptim)
- The portfolio will automatically display screenshots once they're in the `public/screenshots/` folder

