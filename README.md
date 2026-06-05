# DentalCare Pro - Next.js Dental Clinic Template

A premium, production-ready dental clinic website template built with **Next.js 14**, **TypeScript**, and **SCSS**. Features a modern App Router architecture, data-driven components, and a reusable design system for easy customization.

## 🎯 Perfect For

- Dental clinics launching their online presence
- Web developers selling to dental professionals  
- Healthcare startups needing a professional foundation
- Freelancers building client sites quickly

## 🚀 What's Included

## 🚀 What’s Shipped

- App Router layout with shared header, footer, appointment modal, and global fonts
- Fully converted pages: **Home**, **Services**, **About**, **Blog**, **Contact**
- Centralized data modules for hero content, services, doctors, blog articles, FAQs, and contact channels
- Accessible modals and forms (`BookAppointmentButton`, `ContactForm`, `NewsletterSignup`)
- SEO-friendly metadata exports per page plus `sitemap.ts` and `robots.ts`
- SCSS variables, mixins, and global styles mirroring the legacy design system

## 📂 Key Directories

```
TDental-website/
├── public/                # Static assets referenced by Next.js
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout (fonts, providers, global UI)
│   │   ├── page.tsx       # Home page
│   │   ├── about/
│   │   ├── services/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── common/        # Shared UI (buttons, layout helpers)
│   │   ├── contact/       # Contact-specific widgets
│   │   ├── forms/         # Newsletter & contact forms
│   │   └── sections/      # Home page sections
│   ├── config/seo.ts      # Default SEO configuration
│   ├── contexts/          # Appointment modal provider
│   ├── data/              # Typed content sources (home, blog, contact)
│   ├── styles/            # SCSS globals, variables, mixins
│   └── types/             # Shared TypeScript types
└── next.config.js
```

## 🧭 Page Highlights

| Route | Highlights |
| --- | --- |
| `/` | Data-driven hero, services, doctors, testimonials, blog teaser, CTA |
| `/services` | Detailed services grid, patient stories, FAQ section, appointment CTA |
| `/about` | Mission, care principles, team spotlight with social links |
| `/blog` | Article listing sourced from `src/data/blog.ts`, calendar badges, newsletter signup |
| `/contact` | Clinic info, embedded map, validated contact form, FAQs, consultation CTA |

All internal links use `next/link`, and hero/background media leverage `next/image` for optimization.

## �️ Getting Started

```bash
npm install      # or yarn install
npm run dev      # start local dev server on http://localhost:3000

npm run build    # production build
npm start        # serve production build
npm run lint     # lint with ESLint & Prettier rules
```

No additional environment variables are required for local development. Optional fields (analytics, APIs) can be added via `.env.local` as the project evolves.

## 🧩 Notable Components & Data Modules

- `BookAppointmentButton` – opens the global appointment modal exposed by the context provider
- `ContactForm` – client-side validation with inline feedback, dropdowns sourced from `src/data/contact.ts`
- `NewsletterSignup` – lightweight form with basic email validation and accessible status messaging
- `contactFaqs`, `blogArticles`, `services` – keep content structured and reusable across pages

## 🔍 Quality Checks

- `npm run lint` – validates formatting and accessibility rules enforced by ESLint/Prettier
- Images live under `public/assets/images` and are referenced with absolute `/assets/...` paths for compatibility with Next Image

## � Suggested Next Enhancements

- Wire the contact and newsletter forms to a real submission endpoint or service
- Emit JSON-LD schemas (FAQ, LocalBusiness, Article) for richer search results
- Consolidate home-page blog teasers to reuse the `blogArticles` data source
- Add analytics or session recording via a lightweight provider in `layout.tsx`

## 📚 Resources

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Sass Modules](https://sass-lang.com/documentation/at-rules/use)

---

Converted with maintainability in mind—refer to the data modules and shared components when updating content or rolling out new sections.
