# React Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Dynamic Gallery**: Filterable work showcase with category navigation
- **Case Studies**: Detailed project pages with media blocks and credits
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Performance**: Optimized images, static generation, and fast loading

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm, yarn, or pnpm

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/JoshuaShepherd/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3001](http://localhost:3001) in your browser.

## Available Scripts

- `npm run dev` - Start development server on port 3001
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

All environment variables are optional for basic functionality:

- `NEXT_PUBLIC_BASE_URL` - Base URL for the application
- `NEXT_PUBLIC_GA_ID` - Google Analytics tracking ID
- `CONTACT_EMAIL` - Email for contact form submissions
- See `.env.example` for complete list

## Project Structure

```
src/
├── app/                  # Next.js app router pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   ├── about/           # About page
│   └── work/            # Work gallery & case studies
├── components/          # React components
│   └── portfolio/       # Portfolio-specific UI
└── lib/                 # Utilities and data
    └── portfolio-data.ts # Mock portfolio data
```

## Deployment

This project is ready to deploy on Vercel, Netlify, or any platform that supports Next.js:

1. **Vercel** (recommended):
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Build for static hosting**:
   ```bash
   npm run build
   # Deploy the .next/ folder
   ```

## Customization

- Edit `/src/lib/portfolio-data.ts` to add your own work samples
- Modify `/src/components/portfolio/` components to match your design
- Update `/src/app/globals.css` for custom styling
- See `/docs/portfolio-style.md` for design system documentation

## License

MIT License - see LICENSE file for details.
