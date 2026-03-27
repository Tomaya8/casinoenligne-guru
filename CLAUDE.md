# casinoenligne.guru

## Project Overview
French-language authority website covering the online casino industry for francophone markets (France, Belgium, Switzerland, Quebec, Francophone Africa). Combines a structured directory (casinos, games, software, payments) with an editorial hub (guides, news, analyses).

## Tech Stack
- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 with CSS custom properties for theming
- **Icons**: lucide-react
- **Utilities**: clsx
- **Data**: Static TypeScript data files in `src/data/` (no CMS yet)

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── casinos/            # Casino directory + [slug] detail pages
│   ├── jeux/               # Game guides + [slug] detail pages
│   ├── bonus-casino/       # Bonus comparisons
│   ├── paiements/          # Payment methods guide
│   ├── logiciels-casino/   # Software providers + [slug] detail pages
│   ├── regulation/         # Regulation hub + country pages (france, belgique, suisse, quebec)
│   ├── guides/             # Guide articles + [slug] detail
│   ├── actualites/         # News articles + [slug] detail
│   ├── analyses/           # Analysis articles + [slug] detail
│   ├── risques-jeu/        # Responsible gambling page
│   ├── recherche/          # Search page
│   ├── a-propos/           # About page
│   ├── methodologie/       # Methodology page
│   └── sitemap.ts          # Auto-generated sitemap
├── components/
│   ├── layout/             # Header, Footer, Breadcrumbs
│   ├── ui/                 # Badge, Card, StarRating, SectionHeading, SeoText
│   ├── casino/             # CasinoCard
│   ├── home/               # HeroSection, FeaturedCasinos, GameCategories, LatestArticles, QuickNavigation
│   ├── editorial/          # ArticleList
│   └── search/             # SearchBar
├── data/                   # Static content data
│   ├── casinos.ts          # Casino listings + helper functions
│   ├── games.ts            # Game category data
│   ├── articles.ts         # Editorial articles
│   ├── providers.ts        # Software provider data
│   └── navigation.ts       # Nav menus + footer links
└── lib/                    # Utilities (currently empty, reserved for future)
```

## Theme
- Light mode with CSS variables defined in `globals.css`
- Color tokens: `--accent-primary` (purple), `--accent-secondary` (teal), `--accent-gold`, `--accent-red`, `--accent-green`
- Glass morphism effect via `.glass` class
- Gradient text via `.gradient-text`, `.gradient-text-gold`, `.gradient-text-accent`

## Key Patterns
- All pages use `Breadcrumbs` component with Schema.org JSON-LD
- SEO text blocks use the `SeoText` component (expandable "Lire la suite" toggle)
- Dynamic routes use `generateStaticParams` for SSG
- Each page exports `Metadata` for SEO
- Article detail pages include Schema.org Article/NewsArticle markup
- Header dropdowns use timeout-based hover with invisible bridge for UX

## Content Model
- **Articles** have 3 categories: `guides`, `actualites`, `analyses`
- **Casinos** have tags, countries, licences for filtering
- **Games** have 4 categories: machines-a-sous, blackjack, roulette, poker

## Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Language
All user-facing content is in French. Code (variables, comments) is in English.
