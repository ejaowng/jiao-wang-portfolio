# Deployment Instructions for Jiao Wang Portfolio

This document provides comprehensive instructions for deploying your professional portfolio website to GitHub Pages and other hosting platforms.

## Table of Contents
- [GitHub Pages Deployment](#github-pages-deployment)
- [Alternative Hosting Options](#alternative-hosting-options)
- [Project Structure](#project-structure)
- [Customization Guide](#customization-guide)

---

## GitHub Pages Deployment

GitHub Pages is a free hosting service that's perfect for static websites like this portfolio.

### Prerequisites
- A GitHub account
- Git installed on your local machine
- Node.js 18+ and pnpm installed

### Step 1: Prepare Your Repository

1. **Create a new GitHub repository:**
   - Go to https://github.com/new
   - Name it: `your-username.github.io` (replace `your-username` with your GitHub username)
   - Make it public
   - Don't initialize with README (we'll push existing code)

2. **Initialize git in your project (if not already done):**
   ```bash
   cd /path/to/jiao-wang-portfolio
   git init
   git add .
   git commit -m "Initial commit: Professional portfolio website"
   ```

3. **Connect to your GitHub repository:**
   ```bash
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Configure for GitHub Pages

1. **Install gh-pages package:**
   ```bash
   pnpm add -D gh-pages
   ```

2. **Update `package.json`** to add deployment scripts:
   ```json
   {
     "scripts": {
       "predeploy": "pnpm run build",
       "deploy": "gh-pages -d dist/public"
     }
   }
   ```

3. **Update `vite.config.ts`** to set the base path:
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import path from 'path';

   export default defineConfig({
     base: '/', // Use '/' if using custom domain, or '/repo-name/' if not
     plugins: [react()],
     resolve: {
       alias: {
         '@': path.resolve(__dirname, './client/src'),
       },
     },
   });
   ```

### Step 3: Deploy

1. **Build and deploy:**
   ```bash
   pnpm run deploy
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select the `gh-pages` branch
   - Click "Save"

3. **Wait a few minutes** and your site will be live at:
   - `https://your-username.github.io/` (if using username.github.io repo)
   - `https://your-username.github.io/repo-name/` (if using a different repo name)

### Step 4: Custom Domain (Optional)

If you want to use a custom domain like `jiaowang.com`:

1. **Purchase a domain** from a registrar (GoDaddy, Namecheap, Google Domains, etc.)

2. **Configure DNS records** at your domain registrar:
   - Add an `A` record pointing to GitHub's IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add a `CNAME` record pointing to `your-username.github.io`

3. **Add custom domain in GitHub:**
   - Go to repository Settings → Pages
   - Under "Custom domain", enter your domain
   - Check "Enforce HTTPS"

4. **Create a `CNAME` file** in the `client/public/` directory:
   ```
   yourdomain.com
   ```

---

## Alternative Hosting Options

### Option 1: Netlify

Netlify offers automatic deployments from Git with a generous free tier.

1. **Sign up** at https://netlify.com
2. **Connect your GitHub repository**
3. **Configure build settings:**
   - Build command: `pnpm run build`
   - Publish directory: `dist/public`
4. **Deploy** - Netlify will automatically deploy on every git push

**Advantages:**
- Automatic HTTPS
- Continuous deployment
- Custom domains
- Form handling (useful for contact form)
- Serverless functions support

### Option 2: Vercel

Vercel provides excellent performance and developer experience.

1. **Sign up** at https://vercel.com
2. **Import your GitHub repository**
3. **Configure:**
   - Framework Preset: Vite
   - Build Command: `pnpm run build`
   - Output Directory: `dist/public`
4. **Deploy**

**Advantages:**
- Excellent performance
- Automatic HTTPS
- Edge network
- Preview deployments for PRs

### Option 3: Cloudflare Pages

Cloudflare Pages offers fast global CDN and unlimited bandwidth.

1. **Sign up** at https://pages.cloudflare.com
2. **Connect your GitHub repository**
3. **Configure:**
   - Build command: `pnpm run build`
   - Build output directory: `dist/public`
4. **Deploy**

**Advantages:**
- Unlimited bandwidth
- Global CDN
- DDoS protection
- Fast performance

---

## Project Structure

```
jiao-wang-portfolio/
├── client/
│   ├── public/              # Static assets
│   │   ├── images/          # Generated images and visual assets
│   │   └── Jiao-Wang-Resume.docx  # Downloadable resume
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Publications.tsx
│   │   │   ├── Resume.tsx
│   │   │   └── Contact.tsx
│   │   ├── App.tsx          # Main app with routing
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles & design tokens
│   └── index.html           # HTML template
├── package.json
└── vite.config.ts
```

---

## Customization Guide

### Updating Content

#### Personal Information
Edit the following files to update your personal information:
- `client/src/pages/Contact.tsx` - Contact information
- `client/src/components/Footer.tsx` - Footer contact details
- `client/public/Jiao-Wang-Resume.docx` - Replace with your updated resume

#### Projects
Edit `client/src/pages/Projects.tsx` to add or modify projects:
```typescript
// Add new project sections following the existing structure
<div className="bg-card rounded-3xl p-10 shadow-organic texture-overlay">
  <h3>Your Project Title</h3>
  <p>Project description...</p>
</div>
```

#### Publications
Edit `client/src/pages/Publications.tsx` to add new publications:
```typescript
<div className="bg-card rounded-3xl p-8 shadow-organic texture-overlay">
  <h3>Publication Title</h3>
  <p className="text-sm text-muted-foreground">Authors</p>
  <p className="text-sm text-muted-foreground">Journal, Year</p>
</div>
```

### Design Customization

#### Colors
The website uses the **Organic Modernism** design with warm earth tones. To change colors, edit `client/src/index.css`:

```css
:root {
  /* Primary colors */
  --color-sand: #f5f1e8;
  --color-sage: #8b9d83;
  --color-terracotta: #d4a373;
  --color-forest: #3d5a4c;
  
  /* Adjust these to change the overall color scheme */
  --primary: var(--color-forest);
  --background: var(--color-sand);
  /* ... other color variables */
}
```

#### Typography
The website uses:
- **Fraunces** for display/headings (elegant serif)
- **Inter** for body text (clean sans-serif)

To change fonts, update `client/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

Then update `client/src/index.css`:
```css
:root {
  --font-display: 'YourDisplayFont', serif;
  --font-body: 'YourBodyFont', sans-serif;
}
```

#### Images
Replace images in `client/public/images/` with your own:
- `hero-background.png` - Homepage hero section
- `ai-telecom-visualization.png` - About page
- `projects-background.png` - Projects page
- `agentic-ai-concept.png` - Featured project
- `publications-accent.png` - Publications page

Update image references in the respective page components.

### Contact Form

The contact form in `client/src/pages/Contact.tsx` is currently a static form. To make it functional:

#### Option 1: Use Netlify Forms (if hosting on Netlify)
Add `netlify` attribute to the form:
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- rest of form fields -->
</form>
```

#### Option 2: Use Formspree
1. Sign up at https://formspree.io
2. Update the form action:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
  <!-- form fields -->
</form>
```

#### Option 3: Use EmailJS
1. Sign up at https://www.emailjs.com
2. Install EmailJS: `pnpm add @emailjs/browser`
3. Implement email sending in the form submit handler

---

## Maintenance

### Updating Dependencies
```bash
pnpm update
```

### Checking for Security Issues
```bash
pnpm audit
```

### Building Locally
```bash
pnpm run build
pnpm run preview
```

---

## Troubleshooting

### Issue: Images not loading after deployment
**Solution:** Ensure all image paths start with `/` (e.g., `/images/hero-background.png`)

### Issue: Routes return 404 on refresh
**Solution:** Configure your hosting platform for SPA routing:
- **Netlify:** Create `_redirects` file in `client/public/`:
  ```
  /*    /index.html   200
  ```
- **Vercel:** Create `vercel.json`:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```

### Issue: Styles not applying correctly
**Solution:** Clear browser cache and rebuild:
```bash
rm -rf dist node_modules/.vite
pnpm run build
```

---

## Support

For questions or issues:
- Review the [Vite documentation](https://vitejs.dev/)
- Check [React documentation](https://react.dev/)
- Review [Tailwind CSS documentation](https://tailwindcss.com/)

---

## License

This portfolio website is created for Jiao Wang. Feel free to use the code structure as a template for your own portfolio.
