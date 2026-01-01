# GitHub Pages Deployment Guide

Deploy your Jiao Wang portfolio to GitHub Pages for free, professional hosting with optional custom domain support.

## Prerequisites

- GitHub account (create at [github.com](https://github.com) if needed)
- Git installed on your computer
- Your portfolio project files

## Step 1: Create a GitHub Repository

### Option A: New Repository (Recommended)

1. Go to [github.com/new](https://github.com/new)
2. **Repository name**: `jiao-wang-portfolio` (or your preferred name)
3. **Description**: "Professional portfolio - AI Solution Engineer for 5G and Cloud RAN"
4. **Visibility**: Public (required for free GitHub Pages)
5. Click **Create repository**

### Option B: Existing Repository

If you already have a repository, skip to Step 2.

---

## Step 2: Initialize Git and Push Your Code

Open your terminal in the project directory (`/home/ubuntu/jiao-wang-portfolio`) and run:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Professional portfolio website"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/jiao-wang-portfolio.git

# Push to GitHub (use 'main' or 'master' depending on your default branch)
git branch -M main
git push -u origin main
```

---

## Step 3: Build the Static Site

Your portfolio needs to be built before deployment:

```bash
# Install dependencies (if not already done)
pnpm install

# Build the static site
pnpm run build
```

This creates a `dist/` folder containing your static website files.

---

## Step 4: Configure GitHub Pages

### Method 1: Deploy from `dist/` Folder (Recommended)

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll left sidebar to **Pages**
4. Under **Build and deployment**:
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main` (or your default branch)
   - **Folder**: Select `/ (root)` initially
5. Click **Save**

### Method 2: Automatic Deployment with GitHub Actions (Advanced)

Create a `.github/workflows/deploy.yml` file in your project:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then push this file to your repository. GitHub will automatically build and deploy on every push.

---

## Step 5: Access Your Site

Your portfolio will be available at:

```
https://YOUR_USERNAME.github.io/jiao-wang-portfolio
```

Replace `YOUR_USERNAME` with your actual GitHub username.

**Example**: If your GitHub username is `jiaowang`, your site will be at:
```
https://jiaowang.github.io/jiao-wang-portfolio
```

---

## Step 6: Custom Domain (Optional)

To use a custom domain (e.g., `jiaowang.com`):

### 6.1 Purchase a Domain

- Register a domain at [Namecheap](https://www.namecheap.com), [GoDaddy](https://www.godaddy.com), or similar registrar
- Cost: typically $10-15/year

### 6.2 Configure DNS Records

In your domain registrar's DNS settings, add:

**For Apex Domain** (e.g., `jiaowang.com`):
```
Type: A
Name: @
Value: 185.199.108.153
```

Also add these additional A records:
```
185.199.109.153
185.199.110.153
185.199.111.153
```

**For Subdomain** (e.g., `portfolio.jiaowang.com`):
```
Type: CNAME
Name: portfolio
Value: YOUR_USERNAME.github.io
```

### 6.3 Configure GitHub Pages with Custom Domain

1. Go to your repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g., `jiaowang.com`)
3. Click **Save**
4. Check **Enforce HTTPS** (wait a few minutes for SSL certificate)

GitHub will automatically create a `CNAME` file in your repository.

---

## Step 7: Verify Deployment

1. Visit your GitHub Pages URL
2. Check that all pages load correctly:
   - Home page displays properly
   - Navigation links work
   - Images load (especially hero background)
   - Resume PDF downloads
   - Contact form is accessible

### Troubleshooting

**Site not showing up?**
- Wait 5-10 minutes for GitHub to process
- Check that your repository is public
- Verify the `dist/` folder contains `index.html`

**Custom domain not working?**
- DNS changes can take 24-48 hours to propagate
- Use [DNS Checker](https://dnschecker.org) to verify DNS records
- Ensure HTTPS is enforced in GitHub Pages settings

**Images not loading?**
- Check that image paths are correct in your code
- Ensure images are in `client/public/images/`
- Verify the build process includes images in `dist/`

---

## Step 8: Keep Your Site Updated

To update your portfolio after making changes:

```bash
# Make your changes to the code

# Rebuild the site
pnpm run build

# Commit and push
git add .
git commit -m "Update: [describe your changes]"
git push origin main
```

If using GitHub Actions, the deployment happens automatically. Otherwise, manually push the `dist/` folder.

---

## Step 9: Make Contact Form Functional (Optional)

Your contact form currently doesn't send emails. To enable it, choose one:

### Option A: Netlify Forms (Easiest)
1. Deploy to Netlify instead of GitHub Pages
2. Netlify automatically processes form submissions
3. See [Netlify Deployment Guide](https://docs.netlify.com)

### Option B: Formspree (Free)
1. Go to [formspree.io](https://formspree.io)
2. Create an account and add your form
3. Update your contact form `action` attribute:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option C: EmailJS (Free)
1. Go to [emailjs.com](https://www.emailjs.com)
2. Create an account and set up email service
3. Add EmailJS script to your contact form
4. See EmailJS documentation for implementation

---

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [DNS Configuration Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

---

## Summary

Your portfolio is now live on GitHub Pages! Share the URL with recruiters:

```
https://YOUR_USERNAME.github.io/jiao-wang-portfolio
```

**Pro Tips:**
- Add your GitHub Pages URL to your LinkedIn profile
- Share it in your email signature
- Include it on your resume
- Update content regularly to show active engagement

Good luck with your job search!
