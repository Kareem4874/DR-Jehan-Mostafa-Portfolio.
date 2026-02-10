# 🏥 Dr. Jehan Mostafa - Clinical Nutritionist Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

Professional portfolio website for Dr. Jehan Mostafa, a certified clinical nutritionist specializing in therapeutic nutrition, weight management, and wellness consulting.

**Built with Next.js 15.1 (Latest Stable) + TypeScript + Tailwind CSS**

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Project Infrastructure](#project-infrastructure)
- [Complete Project Structure](#complete-project-structure)
- [Installation & Setup](#installation--setup)
- [TypeScript Configuration](#typescript-configuration)
- [Important Configuration Files](#important-configuration-files)
- [Development Workflow](#development-workflow)
- [Next Steps](#next-steps)

---

## 🎯 Project Overview

### Client Information

- **Client:** Dr. Jehan Mostafa Atya Abo Senna
- **Industry:** Healthcare - Clinical Nutrition
- **Experience:** 5 Years
- **Certifications:** 6 Professional Credentials
- **Service Model:** Online Consultations
- **Target Market:** Egypt & MENA Region

### Project Goals

1. Create a professional online presence showcasing credentials
2. Display 6 certifications with featured EISNO membership
3. Enable direct client booking via WhatsApp Business
4. Optimize for mobile-first audience (60%+ expected traffic)
5. Achieve Lighthouse performance score 90+
6. Implement SEO best practices for local search

### Key Features

- ✅ Single Page Application (SPA) with smooth scroll navigation
- ✅ Certificate showcase with lightbox gallery
- ✅ WhatsApp booking integration via Next.js 15.1 API route
- ✅ Responsive design (mobile-first approach)
- ✅ Performance optimized (lazy loading, code splitting, Turbopack)
- ✅ SEO optimized with structured data
- ✅ Modern animations (AOS + GSAP)
- ✅ Full TypeScript implementation for type safety
- ✅ Form validation with comprehensive error handling
- ✅ File upload for payment receipts (max 5MB)
- ✅ Contact form with WhatsApp redirect

### Client Requirements

- **Primary CTA:** Book consultation via WhatsApp
- **Tone:** Professional yet approachable, warm and caring
- **Color Palette:** Sage green (#8FBC8F), Gold (#D4AF37), Cream (#F5F5DC)
- **No Blog/Testimonials:** Static content only for MVP
- **Form Fields:** Name, Age, Occupation, Activity Level, Phone, Email, Package, Receipt, Notes

---

## 🛠️ Technology Stack

### Core Technologies

```
Frontend Framework:    Next.js 15.1 (Latest Stable - App Router)
UI Library:            React 19
Language:              TypeScript 5.x (strict mode)
Styling:               Tailwind CSS 3.4
Animations:            GSAP 3.12+ & AOS 2.3+
Package Manager:       npm
Node Version:          20.x or higher (required for Next.js 15.1)
Build Tool:            Turbopack (Next.js 15.1 default)
```

### Next.js 15.1 Features Used

```
✅ App Router (stable)
✅ Server Components (default)
✅ Server Actions (enhanced)
✅ Turbopack (stable in dev)
✅ React 19 support
✅ Enhanced Image Optimization
✅ Improved TypeScript support
✅ Built-in Font Optimization
✅ Metadata API for SEO
✅ Route Handlers (API routes)
```

### Development Tools

```
Code Formatting:       Prettier 3.x + prettier-plugin-tailwindcss
Linting:              ESLint 9.x (Next.js TypeScript config)
Version Control:       Git + GitHub
Performance Monitor:   Lighthouse CI
Type Checking:        TypeScript 5.x strict mode
Dev Server:           Turbopack (Next.js 15.1)
```

### Deployment & Hosting

```
Platform:             Vercel (optimized for Next.js 15.1)
CI/CD:                GitHub Actions (auto-deploy on push)
Domain:               TBD (custom domain support)
SSL:                  Automatic (Vercel managed)
Analytics:            Vercel Analytics (optional)
CDN:                  Vercel Edge Network (automatic)
Build Cache:          Turbopack caching
```

### APIs & Integrations

```
WhatsApp:             Business API via Next.js 15.1 Route Handlers
Form Handling:        Server Actions + Route Handlers (TypeScript)
File Upload:          FormData (client-side, max 5MB) + Vercel Blob
Validation:           Client-side + Server-side (TypeScript)
Rate Limiting:        Upstash Ratelimit (API protection)
```

---

## 🏗️ Project Infrastructure

### Architecture Overview (Next.js 15.1)

```
┌─────────────────────────────────────────┐
│         Client Browser (User)           │
│  - Mobile Safari, Chrome Mobile         │
│  - Desktop Chrome, Firefox, Safari      │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│   Next.js 15.1 Frontend (Vercel CDN)    │
│  ┌─────────────────────────────────┐   │
│  │  React 19 Server Components     │   │
│  │  - SSR for initial page load    │   │
│  │  - Hero, About, Certificates    │   │
│  │  - TypeScript typed components  │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │  React 19 Client Components     │   │
│  │  - Interactive forms            │   │
│  │  - AOS + GSAP animations        │   │
│  │  - State management             │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │  Next.js 15.1 Route Handlers    │   │
│  │  - POST /api/contact            │   │
│  │  - TypeScript route handlers    │   │
│  │  - Server-side validation       │   │
│  │  - Rate limiting (Upstash)      │   │
│  └─────────────────────────────────┘   │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│       WhatsApp Business API             │
│  - Direct message to Dr. Jehan          │
│  - Pre-formatted booking message        │
│  - Attached payment receipt             │
└─────────────────────────────────────────┘
```

### Data Flow

1. **User fills booking form** → Client Component with TypeScript validation
2. **Form submission** → POST to Route Handler `/api/contact`
3. **Server validates data** → Type-safe data handling (Next.js 15.1) + Rate limit check
4. **Format WhatsApp message** → Structured message with booking details
5. **Redirect to WhatsApp** → Opens WhatsApp with pre-filled message
6. **Success response** → User sees confirmation message

### File Upload Flow

```
User selects receipt image/PDF
         ↓
Client-side validation (type, size)
         ↓
Create FormData object
         ↓
Upload to Vercel Blob Storage
         ↓
Server Route Handler validates + Rate limit
         ↓
Generate secure file URL
         ↓
Include URL in WhatsApp message
         ↓
Dr. Jehan receives booking request with file link
```

---

## 📁 Complete Project Structure (Next.js 15.1)

```
dr-jehan-portfolio/
│
├── .git/                           # Git repository
├── .github/                        # GitHub workflows
│   └── workflows/
│       └── lighthouse.yml          # Lighthouse CI configuration
│
├── public/                         # Static assets (served directly)
│   ├── images/
│   │   ├── certificates/           # 6 certificate images (WebP format)
│   │   │   ├── cert-1-cosmetology.webp
│   │   │   ├── cert-2-eisno.webp         # Featured certificate
│   │   │   ├── cert-3-nutrition-diploma.webp
│   │   │   ├── cert-4-registration.webp
│   │   │   ├── cert-5-be-gold.webp
│   │   │   └── cert-6-aus-diploma.webp
│   │   ├── specializations/        # Icons for specializations
│   │   │   ├── icon-clinical.svg
│   │   │   ├── icon-weight.svg
│   │   │   ├── icon-sports.svg
│   │   │   ├── icon-maternal.svg
│   │   │   ├── icon-therapeutic.svg
│   │   │   └── icon-aesthetic.svg
│   │   ├── services/               # Service icons
│   │   │   ├── consultation.svg
│   │   │   ├── programs.svg
│   │   │   ├── followup.svg
│   │   │   └── workshops.svg
│   │   ├── logo.svg                # Dr. Jehan brand logo
│   │   ├── profile.webp            # Main profile photo
│   │   └── og-image.jpg            # Social media preview (1200x630)
│   │
│   ├── videos/                     # Optional welcome video
│   │   └── welcome-intro.mp4
│   │
│   ├── favicon.ico                 # Browser favicon
│   ├── robots.txt                  # SEO crawler rules
│   └── sitemap.xml                 # Site map for SEO
│
├── src/
│   ├── app/                        # Next.js 16.1 App Router
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts        # Route Handler for booking form
│   │   │
│   │   ├── layout.tsx              # Root layout (Server Component)
│   │   ├── page.tsx                # Home page (Server Component)
│   │   ├── globals.css             # Global styles + Tailwind imports
│   │   ├── not-found.tsx           # Custom 404 page
│   │   ├── error.tsx               # Error boundary
│   │   └── loading.tsx             # Loading UI
│   │
│   ├── components/                 # React 19 + TypeScript components
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Site header (Server Component)
│   │   │   ├── Navigation.tsx      # Smooth scroll nav (Client)
│   │   │   ├── Footer.tsx          # Footer (Server Component)
│   │   │   └── SectionWrapper.tsx  # Section container
│   │   │
│   │   ├── sections/               # Main page sections
│   │   │   ├── Hero.tsx            # Hero (Server Component)
│   │   │   ├── About.tsx           # About (Server Component)
│   │   │   ├── Certificates.tsx    # Certificates (Client for lightbox)
│   │   │   ├── Specializations.tsx # Specializations (Server)
│   │   │   ├── Services.tsx        # Services (Server Component)
│   │   │   ├── VideoIntro.tsx      # Video (Client Component)
│   │   │   ├── Contact.tsx         # Contact (Client for form)
│   │   │   └── SocialLinks.tsx     # Social links (Server)
│   │   │
│   │   ├── ui/                     # Reusable UI components
│   │   │   ├── Button.tsx          # Button (Client Component)
│   │   │   ├── Card.tsx            # Card (Server Component)
│   │   │   ├── Badge.tsx           # Badge (Server Component)
│   │   │   ├── Input.tsx           # Form input (Client)
│   │   │   ├── TextArea.tsx        # Form textarea (Client)
│   │   │   ├── Select.tsx          # Form select (Client)
│   │   │   ├── FileUpload.tsx      # File upload (Client)
│   │   │   ├── Modal.tsx           # Modal (Client Component)
│   │   │   ├── Lightbox.tsx        # Image lightbox (Client)
│   │   │   ├── Loader.tsx          # Loading spinner
│   │   │   └── Alert.tsx           # Success/Error messages
│   │   │
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx     # Main booking form (Client)
│   │   │   ├── FormField.tsx       # Form field wrapper
│   │   │   └── ActivityRadio.tsx   # Activity level selector
│   │   │
│   │   └── animations/
│   │       ├── ScrollReveal.tsx    # AOS wrapper (Client)
│   │       ├── FadeIn.tsx          # GSAP fade (Client)
│   │       ├── SlideIn.tsx         # GSAP slide (Client)
│   │       └── Counter.tsx         # Animated counter (Client)
│   │
│   ├── lib/                        # Business logic & utilities
│   │   ├── whatsapp.ts             # WhatsApp message formatting
│   │   ├── validation.ts           # Form validation rules
│   │   ├── constants.ts            # App-wide constants
│   │   └── animations.ts           # GSAP animation configs
│   │
│   ├── utils/                      # Helper functions
│   │   ├── formatters.ts           # Data formatting
│   │   ├── validators.ts           # Input validators
│   │   └── seo.ts                  # SEO helpers
│   │
│   ├── data/                       # Static data (TypeScript)
│   │   ├── certificates.ts         # Array of 6 certificates
│   │   ├── specializations.ts      # Specialization areas
│   │   ├── services.ts             # Services offered (4 services)
│   │   ├── social-links.ts         # Social media links
│   │   └── metadata.ts             # Site metadata for SEO
│   │
│   ├── types/                      # TypeScript type definitions
│   │   ├── index.ts                # Base types & interfaces
│   │   ├── certificate.ts          # Certificate types
│   │   ├── service.ts              # Service & specialization types
│   │   ├── form.ts                 # Form data & validation types
│   │   └── components.ts           # Component prop types
│   │
│   ├── hooks/                      # Custom React 19 hooks
│   │   ├── useScrollPosition.ts    # Track scroll position
│   │   ├── useIntersection.ts      # Intersection observer hook
│   │   ├── useMediaQuery.ts        # Responsive breakpoints
│   │   └── useFormValidation.ts    # Form validation hook
│   │
│   └── styles/                     # Additional styles
│       ├── animations.css          # Custom CSS animations
│       └── utilities.css           # Custom Tailwind utilities
│
├── .env.local                      # Environment variables (gitignored)
├── .env.example                    # Example env file (committed)
├── .eslintrc.json                  # ESLint 9.x configuration
├── .gitignore                      # Git ignore rules
├── .prettierrc.json                # Prettier configuration
├── .prettierignore                 # Prettier ignore rules
├── next.config.ts                  # Next.js 16.1 configuration
├── tailwind.config.ts              # Tailwind 3.4 configuration
├── postcss.config.js               # PostCSS configuration
├── tsconfig.json                   # TypeScript 5.x configuration
├── package.json                    # Dependencies & npm scripts
├── package-lock.json               # Locked dependency versions
├── README.md                       # This file
├── DEVELOPMENT-PHASES.md           # Detailed development guide
└── CHANGELOG.md                    # Version history
```

---

## 🚀 Installation & Setup (Next.js 16.1)

### Prerequisites

```bash
Node.js >= 20.x (Required for Next.js 16.1)
npm >= 10.x
Git
Code editor (VS Code recommended)
```

### Step 1: Initialize Next.js 16.1 Project

```bash
# Create Next.js 16.1 project with TypeScript
npx create-next-app@latest dr-jehan-portfolio

# During setup, select:
✅ TypeScript: Yes
✅ ESLint: Yes
✅ Tailwind CSS: Yes
✅ src/ directory: Yes
✅ App Router: Yes
✅ Turbopack: Yes (for faster development)
✅ Import alias (@/*): Yes
```

### Step 2: Navigate to Project

```bash
cd dr-jehan-portfolio
```

### Step 3: Install Additional Dependencies

```bash
# Animation libraries
npm install gsap aos

# TypeScript types
npm install -D @types/aos

# Development tools
npm install -D prettier prettier-plugin-tailwindcss
```

### Step 4: Verify Next.js Version

```bash
npm list next
# Should show: next@16.1.x
```

### Step 5: Setup Environment Variables

```bash
# Copy example file
cp .env.example .env.local

# Edit .env.local and add:
NEXT_PUBLIC_WHATSAPP_NUMBER=+20XXXXXXXXXX
```

### Step 6: Run Development Server (with Turbopack)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Note:** Next.js 16.1 uses Turbopack by default for faster builds!

### Step 7: Build for Production

```bash
npm run build
npm run start
```

---

## ⚙️ TypeScript Configuration (Next.js 16.1)

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/types/*": ["./src/types/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/utils/*": ["./src/utils/*"],
      "@/data/*": ["./src/data/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/styles/*": ["./src/styles/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## 📋 Important Configuration Files

### `next.config.ts` (Next.js 16.1)

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Turbopack configuration (Next.js 16.1)
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
```

### `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8FBC8F',
          light: '#A8D5A8',
          dark: '#6B9A6B',
        },
        secondary: {
          DEFAULT: '#D4AF37',
          light: '#E5C864',
          dark: '#B8941D',
        },
        accent: {
          DEFAULT: '#F5F5DC',
          light: '#FEFEF5',
          dark: '#E8E5CC',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### `package.json` (Next.js 16.1)

```json
{
  "name": "dr-jehan-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  },
  "dependencies": {
    "next": "16.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "gsap": "^3.12.5",
    "aos": "^2.3.4"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/aos": "^3.0.7",
    "typescript": "^5",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "prettier": "^3.3.0",
    "prettier-plugin-tailwindcss": "^0.6.0",
    "eslint": "^9",
    "eslint-config-next": "16.1.0"
  }
}
```

---

## 🔄 Development Workflow

### Using Turbopack (Next.js 16.1)

```bash
# Start dev server with Turbopack (faster)
npm run dev

# Turbopack is now default in Next.js 16.1
# Builds are significantly faster!
```

### Server vs Client Components

```typescript
// Server Component (default)
export default function About() {
  return <div>About Section</div>
}

// Client Component (use 'use client' directive)
'use client'
export default function ContactForm() {
  const [data, setData] = useState({})
  return <form>...</form>
}
```

### Development Steps

1. **Create New Branch**

   ```bash
   git checkout -b feature/section-name
   ```

2. **Make Changes**

   - Edit TypeScript files
   - Run `npm run dev` (with Turbopack)
   - Type check with `npm run type-check`

3. **Format Code**

   ```bash
   npm run format
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add section name"
   git push origin feature/section-name
   ```

---

## 📚 Next Steps

### 1. Read Development Phases

See `DEVELOPMENT-PHASES.md` for detailed implementation guide using **Next.js 16.1**

### 2. Setup Development Environment

- Install Node.js 20.x
- Install VS Code with extensions:
  - ESLint
  - Prettier
  - TypeScript and JavaScript Language Features

### 3. Start with Phase 1

Follow the phases in `DEVELOPMENT-PHASES.md` sequentially

### 4. Client Assets Needed

- Profile photo (high resolution)
- 6 certificates (scanned, high quality)
- Logo (vector format)
- WhatsApp Business number
- Social media links

---

## 📊 Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse SEO: 95+
- Lighthouse Best Practices: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

**Next.js 16.1 + Turbopack helps achieve these targets!**

---

## 🤝 Contributing

This is a private project for Dr. Jehan Mostafa.

---

## 📄 License

Proprietary - All rights reserved by Dr. Jehan Mostafa

---

**Last Updated:** December 21, 2025  
**Version:** 1.0.0  
**Next.js Version:** 16.1.0  
**Status:** In Development
