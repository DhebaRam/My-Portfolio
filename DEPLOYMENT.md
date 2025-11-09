# Deployment Guide for GitHub Pages

## 🚀 Quick Setup

### Step 1: Push Code to GitHub

If you haven't pushed yet, you need to authenticate first:

**Option A: Using Personal Access Token (Recommended)**
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate a new token with `repo` permissions
3. Use the token as password when pushing:

```bash
git push -u origin main
# Username: DhebaRam
# Password: [your-personal-access-token]
```

**Option B: Using SSH (More Secure)**
```bash
# Generate SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add SSH key to GitHub: Settings → SSH and GPG keys → New SSH key
# Then change remote URL:
git remote set-url origin git@github.com:DhebaRam/My-Portfolio.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/DhebaRam/My-Portfolio
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - **Source**: `GitHub Actions`
5. Save the settings

### Step 3: Automatic Deployment

The GitHub Actions workflow will automatically:
- Build your React app when you push to `main` branch
- Deploy it to GitHub Pages
- Your site will be live at: `https://dhebaram.github.io/My-Portfolio/`

## 📝 Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Install gh-pages package
npm install --save-dev gh-pages

# Add deploy script to package.json
# "deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

## 🔄 Updating Your Portfolio

After making changes:

```bash
# Make your changes
# ...

# Commit changes
git add .
git commit -m "Update portfolio"

# Push to GitHub
git push origin main
```

GitHub Actions will automatically rebuild and redeploy your site!

## ✅ Verify Deployment

1. Wait 2-3 minutes after pushing
2. Visit: https://dhebaram.github.io/My-Portfolio/
3. Your portfolio should be live!

## 🐛 Troubleshooting

**If deployment fails:**
- Check GitHub Actions tab in your repository
- Ensure GitHub Pages is enabled in Settings → Pages
- Verify the `homepage` field in `package.json` matches your repository name

**If site shows 404:**
- Wait a few minutes (first deployment can take time)
- Check if the build completed successfully in Actions tab
- Verify the repository is public (or you have GitHub Pro for private repos)

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/#github-pages)

