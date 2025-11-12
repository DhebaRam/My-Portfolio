# 🚀 How to Push Portfolio to GitHub

## ✅ Your code is ready! Just need to push it.

## Method 1: Personal Access Token (Recommended)

### Step 1: Create Token with Correct Permissions

1. **Go to GitHub Token Settings:**
   - Visit: https://github.com/settings/tokens
   - Click **"Generate new token"** → **"Generate new token (classic)"**

2. **Configure Token:**
   - **Note**: `Portfolio Deployment`
   - **Expiration**: Choose your preference (90 days recommended)
   - **Select scopes**: Check these boxes:
     - ✅ `repo` (Full control of private repositories)
     - ✅ `workflow` (Update GitHub Action workflows) ⚠️ **IMPORTANT!**

3. **Generate and Copy:**
   - Click **"Generate token"** at the bottom
   - **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)
   - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 2: Push Your Code

Open terminal in your portfolio folder and run:

```bash
cd /Users/dhebaram/DhebaRam/ReactProject/portfolio
git push -u origin main
```

When prompted:
- **Username**: `DhebaRam`
- **Password**: `[paste your token here]` (not your GitHub password!)

### Step 3: Verify

1. Go to: https://github.com/DhebaRam/My-Portfolio
2. You should see all your files!

---

## Method 2: GitHub Desktop (Easiest - No Terminal)

1. **Download GitHub Desktop:**
   - https://desktop.github.com/
   - Install and sign in with your GitHub account

2. **Add Repository:**
   - File → Add Local Repository
   - Browse to: `/Users/dhebaram/DhebaRam/ReactProject/portfolio`
   - Click "Add repository"

3. **Publish:**
   - Click "Publish repository" button
   - Repository name: `My-Portfolio`
   - Keep it private: Unchecked (make it public)
   - Click "Publish Repository"

4. **Done!** Your code is now on GitHub!

---

## Method 3: SSH Key (Most Secure)

### Step 1: Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "dhebaram1999@gmail.com"
# Press Enter 3 times (accept defaults, no passphrase needed)
```

### Step 2: Add SSH Key to GitHub

```bash
# Copy your public key
cat ~/.ssh/id_ed25519.pub
```

1. Copy the entire output (starts with `ssh-ed25519`)
2. Go to: https://github.com/settings/keys
3. Click **"New SSH key"**
4. Title: `My Portfolio`
5. Paste your key
6. Click **"Add SSH key"**

### Step 3: Change Remote and Push

```bash
cd /Users/dhebaram/DhebaRam/ReactProject/portfolio
git remote set-url origin git@github.com:DhebaRam/My-Portfolio.git
git push -u origin main
```

---

## 🎯 After Pushing Successfully

### Enable GitHub Pages:

1. Go to: https://github.com/DhebaRam/My-Portfolio
2. Click **Settings** tab
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select: **GitHub Actions**
5. Click **Save**

### Your Portfolio Will Be Live At:
**https://dhebaram.github.io/My-Portfolio/**

---

## ❌ Troubleshooting

**Error: "workflow scope required"**
- Your token needs the `workflow` scope
- Create a new token with `workflow` checked

**Error: "Authentication failed"**
- Make sure you're using the token, not your password
- Token should start with `ghp_`

**Error: "Repository not found"**
- Make sure the repository exists at: https://github.com/DhebaRam/My-Portfolio
- If not, create it on GitHub first

---

## 📞 Need Help?

If you're stuck, use **GitHub Desktop** (Method 2) - it's the easiest way!

