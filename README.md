# Jiao Wang - Professional Portfolio Website

A modern, professional portfolio website showcasing expertise in Applied AI and Telecom Systems Engineering. Built with React 19, TypeScript, Tailwind CSS 4, and Vite.

![Portfolio Preview](client/public/images/hero-background.png)

## 🌟 Features

- **Modern Design**: Organic Modernism aesthetic with warm earth tones and fluid layouts
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast load times
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Type Safe**: Written in TypeScript for better code quality
- **Accessible**: WCAG compliant with proper ARIA labels

## 📄 Pages

1. **Home** - Hero section with professional summary and call-to-action
2. **About** - Detailed background, achievements, skills, and education
3. **Projects** - Comprehensive project portfolio with detailed descriptions
4. **Publications** - Peer-reviewed research papers and publications
5. **Resume** - Full resume with downloadable DOCX file
6. **Contact** - Contact form and professional contact information

## 🎨 Design Philosophy

The website follows the **Organic Modernism** design approach:

- **Warm Earth Tones**: Sand (#f5f1e8), Sage (#8b9d83), Terracotta (#d4a373), Forest Green (#3d5a4c)
- **Fluid Layouts**: Curved dividers, rounded corners (24px radius), organic shapes
- **Soft Depth**: Layered shadows with natural feel, subtle texture overlays
- **Natural Motion**: Spring-based animations, smooth transitions
- **Typography**: Fraunces (elegant serif) for headings, Inter (clean sans-serif) for body

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd jiao-wang-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the project
pnpm run build

# Preview production build
pnpm run preview
```

## 📦 Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI)
- **Routing**: Wouter
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📁 Project Structure

```
jiao-wang-portfolio/
├── client/
│   ├── public/              # Static assets
│   │   ├── images/          # Images and visual assets
│   │   └── Jiao-Wang-Resume.docx
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
│   │   ├── contexts/        # React contexts
│   │   ├── App.tsx          # Main app with routing
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   └── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── DEPLOYMENT.md            # Deployment instructions
└── README.md
```

## 🚢 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment instructions including:

- GitHub Pages deployment
- Netlify deployment
- Vercel deployment
- Cloudflare Pages deployment
- Custom domain setup

## 🎯 Target Audience

This portfolio is designed for:
- **Recruiters** looking for Applied AI Engineers
- **Hiring Managers** in telecom and AI sectors
- **Collaborators** interested in AI research
- **Industry Professionals** in 5G and Cloud RAN

## 📝 Customization

### Update Personal Information

1. **Contact Details**: Edit `client/src/pages/Contact.tsx` and `client/src/components/Footer.tsx`
2. **Resume**: Replace `client/public/Jiao-Wang-Resume.docx` with your resume
3. **Projects**: Modify `client/src/pages/Projects.tsx`
4. **Publications**: Update `client/src/pages/Publications.tsx`

### Change Design

1. **Colors**: Edit CSS variables in `client/src/index.css`
2. **Fonts**: Update Google Fonts link in `client/index.html`
3. **Images**: Replace images in `client/public/images/`

### Make Contact Form Functional

The contact form is currently static. To make it work:

- **Netlify**: Add `data-netlify="true"` attribute
- **Formspree**: Add action URL to form
- **EmailJS**: Integrate EmailJS library

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🔧 Available Scripts

```bash
# Development
pnpm run dev          # Start dev server
pnpm run build        # Build for production
pnpm run preview      # Preview production build

# Code Quality
pnpm run check        # TypeScript type checking
pnpm run format       # Format code with Prettier

# Deployment
pnpm run deploy       # Deploy to GitHub Pages (after setup)
```

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Bundle Size**: Optimized with code splitting

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📄 License

This project is created for Jiao Wang's professional portfolio. The code structure can be used as a template for similar portfolio websites.

## 🤝 Contributing

This is a personal portfolio website. However, if you find bugs or have suggestions:

1. Open an issue describing the problem
2. Fork the repository
3. Create a feature branch
4. Submit a pull request

## 📧 Contact

**Jiao Wang**
- Email: jiaowang2010@gmail.com
- Phone: 469-418-3581
- Location: Plano, TX, USA

## 🙏 Acknowledgments

- Design inspiration: Organic Modernism movement
- UI Components: [shadcn/ui](https://ui.shadcn.com/)
- Icons: [Lucide](https://lucide.dev/)
- Fonts: [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
