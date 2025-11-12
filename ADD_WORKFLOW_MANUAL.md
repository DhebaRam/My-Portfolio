# 📋 How to Add Workflow File Manually on GitHub

Since your token doesn't have `workflow` scope, add the workflow file through GitHub web interface:

## Steps:

1. **Go to your repository:**
   - https://github.com/DhebaRam/My-Portfolio

2. **Create the workflow file:**
   - Click on **"Add file"** → **"Create new file"**
   - Type: `.github/workflows/deploy.yml` (this creates the folders automatically)

3. **Copy and paste this content:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          CI: false

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './build'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. **Commit:**
   - Scroll down
   - Commit message: `Add GitHub Pages deployment workflow`
   - Click **"Commit new file"**

5. **Enable GitHub Pages:**
   - Go to: **Settings** → **Pages**
   - Under **Source**, select: **GitHub Actions**
   - Click **Save**

6. **Wait for deployment:**
   - Go to **Actions** tab
   - You'll see the workflow running
   - Wait 2-3 minutes for it to complete

7. **Your portfolio will be live at:**
   - **https://dhebaram.github.io/My-Portfolio/**

---

## ✅ Alternative: Simple GitHub Pages (Without Workflow)

If you prefer a simpler setup:

1. Go to: **Settings** → **Pages**
2. Under **Source**, select: **Deploy from a branch**
3. Branch: `main` → `/ (root)`
4. Click **Save**

Then you need to build and push the build folder, or use the workflow above for automatic deployment.

