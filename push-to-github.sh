#!/bin/bash

# Script to push code to GitHub
# This script will help you push your portfolio to GitHub

echo "🚀 Pushing Portfolio to GitHub..."
echo ""

# Check if remote exists
if ! git remote get-url origin &> /dev/null; then
    echo "❌ Remote 'origin' not found. Adding it..."
    git remote add origin https://github.com/DhebaRam/My-Portfolio.git
fi

echo "📦 Current branch: $(git branch --show-current)"
echo "📝 Recent commits:"
git log --oneline -3
echo ""

echo "⚠️  IMPORTANT: You need to authenticate with GitHub"
echo ""
echo "GitHub no longer accepts passwords. You need a Personal Access Token."
echo ""
echo "📋 Steps to create a token:"
echo "1. Go to: https://github.com/settings/tokens"
echo "2. Click 'Generate new token' → 'Generate new token (classic)'"
echo "3. Name it: 'Portfolio Deployment'"
echo "4. Select scope: Check 'repo' (all repo permissions)"
echo "5. Click 'Generate token'"
echo "6. COPY THE TOKEN (you won't see it again!)"
echo ""
echo "Then run: git push -u origin main"
echo "When prompted:"
echo "  Username: DhebaRam"
echo "  Password: [paste your token here]"
echo ""
echo "Or use SSH (more secure):"
echo "  git remote set-url origin git@github.com:DhebaRam/My-Portfolio.git"
echo "  git push -u origin main"
echo ""

read -p "Do you want to try pushing now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🔄 Attempting to push..."
    git push -u origin main
else
    echo "✅ Ready to push when you have your token!"
    echo "Run: git push -u origin main"
fi

