# How to Push Code to GitHub

## 🔐 Authentication Required

GitHub no longer accepts passwords for Git operations. You need to use one of these methods:

## Method 1: Personal Access Token (Easiest)

1. **Create a Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Give it a name: "Portfolio Deployment"
   - Select scopes: Check `repo` (all repo permissions)
   - Click "Generate token"
   - **Copy the token immediately** (you won't see it again!)

2. **Push using the token:**
   ```bash
   git push -u origin main
   ```
   - Username: `DhebaRam`
   - Password: `[paste your personal access token here]`

## Method 2: SSH Key (More Secure)

1. **Generate SSH key (if you don't have one):**
   ```bash
   ssh-keygen -t ed25519 -C "dhebaram1999@gmail.com"
   # Press Enter to accept default location
   # Optionally set a passphrase
   ```

2. **Add SSH key to GitHub:**
   ```bash
   # Copy your public key
   cat ~/.ssh/id_ed25519.pub
   ```
   - Go to: https://github.com/settings/keys
   - Click "New SSH key"
   - Paste your public key
   - Click "Add SSH key"

3. **Change remote URL to SSH:**
   ```bash
   git remote set-url origin git@github.com:DhebaRam/My-Portfolio.git
   ```

4. **Push:**
   ```bash
   git push -u origin main
   ```

## Method 3: GitHub CLI (Alternative)

1. **Install GitHub CLI:**
   ```bash
   brew install gh  # macOS
   ```

2. **Authenticate:**
   ```bash
   gh auth login
   ```

3. **Push:**
   ```bash
   git push -u origin main
   ```

## ✅ After Pushing

1. Go to: https://github.com/DhebaRam/My-Portfolio
2. Click **Settings** → **Pages**
3. Under **Source**, select: **GitHub Actions**
4. Your site will be live at: https://dhebaram.github.io/My-Portfolio/

## 🎉 Done!

Your portfolio will automatically deploy whenever you push to the `main` branch!

