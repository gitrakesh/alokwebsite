# EchoFrame Studios - Premium Music Label & Video Production Website

A production-ready Next.js + TypeScript + Tailwind web application for a premium music label and audio-visual production company.

## Recommended Architecture

- `app/`: App Router pages, route handlers, sitemap, robots.
- `components/`: Reusable UI, layout, forms, and interactive sections.
- `data/`: CMS-ready content modules for services, projects, testimonials, FAQ, team, openings.
- `lib/`: Shared utilities, types, and SQL schema suggestions.
- `public/`: Static assets.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- API Routes for lead handling

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment file:
   ```bash
   cp .env.example .env.local
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`.

## Scripts

- `npm run dev` - local development
- `npm run build` - production build
- `npm run start` - run build output
- `npm run lint` - lint checks
- `npm run typecheck` - type checks

## Data Models Implemented

- Services
- Projects/Portfolio
- Testimonials
- Team members
- FAQs
- Careers openings

Contact inquiries, bookings, and newsletter API endpoints are implemented and validated with Zod.

## Next-Phase Enhancements

- Persist forms into Supabase/PostgreSQL using `lib/schema.sql`.
- Add authentication-protected admin dashboard for content updates.
- Add blog CMS integration (Sanity/Contentful/Strapi).
- Integrate analytics, conversion tracking, and CRM webhooks.
- Add media lightbox and video streaming optimizations.
- Introduce i18n for multi-language support.
