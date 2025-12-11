# Software Landing Page - Copilot Instructions

## Project Overview
This is a modern SaaS software landing page website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel/Netlify

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage (Hub)
│   ├── layout.tsx         # Root layout
│   └── cases/[slug]/      # Dynamic case pages
├── components/            # Reusable UI components
│   ├── ui/               # Base UI elements
│   ├── sections/         # Page sections (Hero, Features, etc.)
│   └── layout/           # Layout components (Header, Footer)
├── data/                  # Case data and content
├── lib/                   # Utility functions
└── types/                 # TypeScript type definitions
```

## Adding New Cases
1. Add case data in `src/data/cases.ts`
2. The dynamic route `/cases/[slug]` will automatically render the new case
3. Follow the existing data structure for consistency

## SEO Guidelines
- Use semantic HTML elements
- Add proper meta tags via Next.js Metadata API
- Ensure all images have alt text
- Follow keyword research for page naming

## Code Style
- Use functional components with TypeScript
- Follow React best practices
- Keep components small and reusable
- Use Tailwind CSS for styling
