# BYKI.MY — Complete Website Blueprint

> **Version 1.0** · Website architecture, design system, page structure, and content strategy for byki.my — a corporate-educational diagnostic product hub.

---

## 1. Vision & Positioning

**BYKI.my** is not a landing page. It is a **content hub** — the definitive resource for vehicle diagnostics, OBD-II education, engine health, engine oil guidance, and car maintenance in Malaysia. Every page earns traffic. Every page educates. Every page leads to the product.

### Brand Positioning

- **Corporate but approachable** — professional enough for workshop technicians, clear enough for first-time car owners
- **Educating, not selling** — the visitor learns something valuable on every page; the product sells itself through demonstrated expertise
- **Malaysian-first** — RM pricing, local vehicle models, tropical climate context, Bahasa Melayu support, Shah Alam/Selangor presence
- **Clean implementation** — no animated marquees, no pop-up bombardment, no stock-photo heroes. Data-driven, information-dense, fast-loading

### Core Metrics

| Metric | Target |
|--------|--------|
| Organic monthly traffic | 100K+ sessions within 12 months |
| Pages indexed | 500+ |
| Average session duration | 3+ minutes |
| Bounce rate (article pages) | <55% |
| Core Web Vitals | All green |
| Domain Authority | 30+ within 12 months |

---

## 2. Technology Stack

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Framework** | Next.js 14+ (App Router) | SSR/SSG for SEO, React ecosystem, image optimisation |
| **Styling** | Tailwind CSS | Utility-first, fast iteration, consistent design |
| **CMS** | MDX or Contentlayer | Content as code, version-controlled articles, frontmatter metadata |
| **Hosting** | Vercel | Edge network, auto-deploy, analytics, speed |
| **Analytics** | Google Analytics 4 + Search Console | Traffic, keywords, indexation tracking |
| **Structured Data** | JSON-LD | Schema.org markup for every page type |
| **Sitemap** | Auto-generated | next-sitemap for XML sitemap + robots.txt |
| **i18n** | next-intl | English (primary) + Bahasa Melayu |
| **Search** | Algolia or Pagefind | On-site search across all content |
| **Images** | Next/Image + WebP/AVIF | Lazy loading, responsive, optimised |

---

## 3. Design System

### 3.1 Colour Palette

| Role | Colour | Hex | Usage |
|------|--------|-----|-------|
| **Primary** | BYKI Blue | `#1A56DB` | CTAs, links, active states, brand elements |
| **Secondary** | Petronas Green | `#00A651` | Health scores (healthy), success states, partnerships |
| **Accent** | Signal Amber | `#F59E0B` | Warnings, monitor tier, attention callouts |
| **Danger** | Alert Red | `#DC2626` | Critical scores, error states, urgent notices |
| **Neutral 900** | Near Black | `#111827` | Body text, headings |
| **Neutral 100** | Light Grey | `#F3F4F6` | Section backgrounds, cards |
| **White** | Pure White | `#FFFFFF` | Page background, card interiors |

### 3.2 Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| **H1** | Inter | 36–48px | 700 (Bold) |
| **H2** | Inter | 28–32px | 600 (Semibold) |
| **H3** | Inter | 22–24px | 600 |
| **Body** | Inter | 16–18px | 400 (Regular) |
| **Small / Caption** | Inter | 13–14px | 400 |
| **Code / Technical** | JetBrains Mono | 14–15px | 400 |

### 3.3 Component Library

| Component | Description |
|-----------|-------------|
| **NavBar** | Sticky top nav — logo, mega menu (Products, Learn, Resources, Workshop, About), CTA "Open BYKI", language toggle |
| **Hero** | Minimal — headline + subtext + single CTA. No carousel. Optional background pattern (circuit/diagnostic line art) |
| **Feature Card** | Icon + heading + 2-line description. Grid of 3 or 4 per row |
| **Score Ring** | Circular gauge visualization (0–100) with colour tier. Reused for demo and article illustrations |
| **Spec Table** | Clean table with zebra striping, responsive horizontal scroll on mobile |
| **Article Card** | Thumbnail + category tag + title + excerpt + read time. Used in blog grid |
| **Vehicle Selector** | Make → Model → Year dropdown chain. Leads to vehicle-specific pages |
| **CTA Banner** | Full-width section — headline + description + button. Used between content sections |
| **FAQ Accordion** | Expandable Q&A. JSON-LD FAQPage schema injected |
| **Breadcrumb** | Hierarchical path. Visible on all inner pages. Schema.org BreadcrumbList |
| **Oil Product Card** | Product name + viscosity badge + spec tags + price + "View Details" |
| **Workshop Card** | Name + location + distance + rating + "Book Now" |
| **Code Card (DTC)** | Code badge + severity dot + name + expandable details |
| **Comparison Table** | Side-by-side feature/product comparison with checkmarks |
| **Testimonial Card** | Quote + name + vehicle + star rating |
| **Footer** | 4-column: Products, Learn, Company, Legal. Social links. Petronas logo. © |

### 3.4 Layout Principles

- **Max content width:** 1200px (prose), 1400px (full-width sections)
- **Article prose width:** 720px max (readable line length)
- **Grid system:** 12-column with 24px gutters
- **Section spacing:** 80–120px vertical padding between major sections
- **Card spacing:** 24px gap in grids
- **Mobile-first:** All pages designed mobile-first, enhanced for desktop
- **Dark mode:** Supported via system preference toggle

### 3.5 Visual Style

- **Illustrations:** Flat, geometric line-art style (engine diagrams, adapters, data flows). Not stock photos.
- **Icons:** Lucide or Phosphor icon set — consistent line weight
- **Photography:** Only for real product shots (adapter, phone with BYKI screen, workshop interior). Minimal.
- **Data Visualization:** Score rings, bar charts for system scores, trend lines for sensor data
- **Motion:** Subtle — fade-in on scroll, number count-up for scores. No parallax or heavy animations.

---

## 4. Information Architecture

### 4.1 Primary Navigation (Mega Menu)

```
Home
├── Products
│   ├── BYKI Health Scan
│   ├── Live Data Monitor
│   ├── Fault Code Reader
│   ├── Oil Recommendation
│   └── Pricing
├── Learn
│   ├── Knowledge Base (Library)
│   ├── Blog / Articles
│   ├── Car Problems & Symptoms
│   ├── Oil Guide
│   └── Glossary
├── Resources
│   ├── Supported Vehicles
│   ├── Compatible Adapters
│   ├── DTC Code Lookup
│   ├── Oil Finder (by vehicle)
│   └── Developer / API (future)
├── Workshop
│   ├── Find a Workshop
│   ├── Become a Partner
│   └── Service Packages
├── About
│   ├── Our Story
│   ├── Team
│   ├── Press / Media
│   └── Contact
└── [CTA] Open BYKI App
```

### 4.2 Complete Page Map

Below is every page on the website, grouped by section. Each page has a defined purpose, target keywords, and content source from the BYKI Library.

---

## 5. Page Specifications

### 5.1 HOME PAGE (`/`)

**Purpose:** First impression. Communicate what BYKI is, who it's for, and why it matters — in 10 seconds.

**Sections (top to bottom):**

| # | Section | Content |
|---|---------|---------|
| 1 | **Hero** | Headline: "Know Your Engine. Before It's Too Late." / Subtext: "Malaysia's browser-based vehicle diagnostic — scan your car in 2 minutes, no app required." / CTA: "Open BYKI Free" + "See How It Works" |
| 2 | **Trust Bar** | "Works with 85+ vehicle models · 18 car brands · 4,565 fault codes · Petronas Syntium partner" |
| 3 | **How It Works** | 3-step visual: Plug → Scan → Act. Each with icon + 1-line description. Source: Library Module 01 §1.4 |
| 4 | **4 Core Features** | Feature cards: Health Scan, Live Data, Fault Codes, Oil Recommendation. Source: Library Module 01 §1.2 |
| 5 | **Score Demo** | Interactive/animated score ring showing a sample health report. 7 system scores visualised. Source: Library Module 08 |
| 6 | **Vehicle Marque Grid** | Logo grid of all 18 supported makes. "Find your car →" link. Source: Library Module 12 |
| 7 | **For Who** | 4-column cards: Vehicle Owners, Technicians, Fleet Operators, Car Buyers. Source: Library Module 01 §1.3 |
| 8 | **Petronas Partnership** | Co-branded section. "Powered by Petronas Syntium" + product showcase. Source: Library Module 11 |
| 9 | **Testimonials** | 3–4 real user testimonials with vehicle and location |
| 10 | **Latest Articles** | 3 article cards from the blog, auto-populated |
| 11 | **CTA Banner** | "Scan Your Car Now — Free" + "Buy an Adapter" |
| 12 | **Footer** | Full footer |

**Schema:** Organization, WebSite, SearchAction  
**Meta:** "BYKI — Free Vehicle Diagnostic Scanner | Check Your Car Health Online | Malaysia"

---

### 5.2 PRODUCT PAGES

#### 5.2.1 Health Scan (`/health-scan`)

**Purpose:** Deep-dive into BYKI's flagship feature. Convert visitors who searched for "car diagnostic scan" or "check engine health."

| Section | Content | Source |
|---------|---------|--------|
| Hero | "Comprehensive Engine Health Scan — 7 Systems, 38 Sensors, 2 Minutes" | Module 07 |
| What It Does | Multi-phase scan explanation with visual process flow | Module 07 §7.3 |
| What Makes It Different | Comparison table: Traditional Code Reader vs BYKI | Module 07 §7.2 |
| 7 Systems Overview | Cards for each system with icons and 1-line descriptions | Module 09 |
| Sample Report | Interactive demo of a health report with score rings | Module 08 |
| Scoring Explained | Risk tiers (Healthy/Monitor/Warning/Critical) with colours | Module 08 §8.2 |
| Data Scale | Stats grid: 38 PIDs, 4565 DTCs, 7 systems, etc. | Module 07 §7.4 |
| Limitations | Transparent section on what it can't do | Module 07 §7.5 |
| Tips | Best practices for scanning | Module 07 §7.6 |
| CTA | "Scan Your Car Now" |  |

**Schema:** Product, FAQPage  
**Target Keywords:** car diagnostic scan, car health check, engine health scanner, vehicle diagnostic tool Malaysia

#### 5.2.2 Live Data (`/live-data`)

**Purpose:** Showcase real-time monitoring capability.

| Section | Content | Source |
|---------|---------|--------|
| Hero | "38 Engine Sensors, Streaming Live" | Module 05 |
| Parameter Grid | All 38 parameters in categorised tables | Module 05 §5.2 |
| Normal Ranges | At Idle and At Cruise reference tables | Module 05 §5.3 |
| Screen Preview | Screenshots/mockup of the live data UI | Module 13 §13.4 |
| Tips | How to use live data effectively | Module 05 §5.5 |
| CTA | "Monitor Your Engine — Open BYKI" |  |

**Schema:** Product  
**Target Keywords:** live car sensor data, OBD2 live data, engine RPM monitor, real-time car diagnostic

#### 5.2.3 Fault Code Reader (`/fault-codes`)

**Purpose:** Traffic magnet. People search for specific fault codes constantly.

| Section | Content | Source |
|---------|---------|--------|
| Hero | "Read & Understand Your Car's Fault Codes" | Module 06 |
| DTC Search Tool | Live search: type a code (P0171) → get full details | Module 06 §6.3 |
| How DTCs Work | Code structure explained visually | Module 06 §6.2 |
| Code Types | Stored vs Pending vs Permanent with explanations | Module 06 §6.4 |
| Common Malaysian Codes | Table of most frequent DTCs | Module 06 §6.6 |
| Clearing Codes | How it works + important warnings | Module 06 §6.7 |
| When To Worry | Decision table based on code status | Module 06 §6.8 |
| CTA | "Read Your Fault Codes — Free" |  |

**Schema:** Product, FAQPage  
**Target Keywords:** check engine light code, P0171, P0300, P0420, car fault code reader, OBD2 code reader

#### 5.2.4 Oil Recommendation (`/oil-recommendation`)

**Purpose:** Convert oil-related searches into BYKI users and Syntium buyers.

| Section | Content | Source |
|---------|---------|--------|
| Hero | "The Right Oil for Your Car — Data-Matched" | Module 10, 12 |
| Vehicle Selector | Interactive Make → Model → variant selector → shows oil + ATF | Module 12 |
| How Matching Works | 7-factor matching criteria explained | Module 12 §12.1 |
| Product Tiers | Syntium range overview (Flagship → Economy) | Module 11 §11.6 |
| Quick Lookup Table | Simplified vehicle → oil → ATF table | Module 12 §12.5 |
| CTA | "Get Your Exact Oil Match — Scan Now" |  |

**Schema:** Product  
**Target Keywords:** engine oil for Myvi, best oil for Proton X50, Perodua oil recommendation, what oil does my car need

#### 5.2.5 Pricing (`/pricing`)

**Purpose:** Clarify that BYKI is free, and show adapter and service pricing.

| Section | Content | Source |
|---------|---------|--------|
| Hero | "Free Vehicle Diagnostics. Really." |  |
| BYKI App Pricing | Free tier breakdown — Health Scan, Live Data, Fault Codes | Module 01 |
| Adapter Cost | Adapter price range (RM30–200) with recommendations | Module 03 §3.2 |
| Service Packages | Workshop service package pricing table | Module 14 §14.4 |
| Petronas Oil Pricing | Product price range table | Module 11 §11.2 |
| Total Cost of Ownership | "For less than RM100, you have a professional diagnostic setup" |  |
| CTA | "Get Started Free" |  |

**Schema:** Product, Offer  
**Target Keywords:** free car diagnostic tool, OBD2 scanner price Malaysia, car diagnostic cost

---

### 5.3 LEARN PAGES (Knowledge Base)

#### 5.3.1 Knowledge Base Hub (`/learn`)

**Purpose:** Content hub landing page. Library table of contents, visually organized.

| Section | Content | Source |
|---------|---------|--------|
| Hero | "Learn Everything About Your Vehicle" |  |
| Part I Cards | Getting Started modules (01–03) | Library TOC |
| Part II Cards | Understanding Your Vehicle (04–06) | Library TOC |
| Part III Cards | Health Scan (07–09) | Library TOC |
| Part IV Cards | Oil & Service (10–12) | Library TOC |
| Part V Cards | Using BYKI (13–16) | Library TOC |

**Schema:** CollectionPage, BreadcrumbList

#### 5.3.2 Individual Knowledge Base Pages

Each library module becomes a full page:

| URL | Title | Source |
|-----|-------|--------|
| `/learn/what-is-byki` | What Is BYKI? | Module 01 |
| `/learn/getting-started` | Getting Started Guide | Module 02 |
| `/learn/hardware-adapters` | OBD-II Adapters Guide | Module 03 |
| `/learn/how-obd2-works` | How OBD-II Works | Module 04 |
| `/learn/live-sensor-data` | Understanding Live Sensor Data | Module 05 |
| `/learn/fault-codes-dtc` | Fault Codes (DTC) Guide | Module 06 |
| `/learn/health-scan` | How the Health Scan Works | Module 07 |
| `/learn/health-report` | Understanding Your Health Report | Module 08 |
| `/learn/seven-systems` | The 7 Engine Systems | Module 09 |
| `/learn/engine-oil-guide` | Complete Engine Oil Guide | Module 10 |
| `/learn/petronas-syntium` | Petronas Syntium Products | Module 11 |
| `/learn/vehicle-oil-match` | Vehicle Oil Matching | Module 12 |
| `/learn/ui-guide` | BYKI User Interface Guide | Module 13 |
| `/learn/workshop-booking` | Workshop & Booking | Module 14 |
| `/learn/troubleshooting` | Troubleshooting | Module 15 |
| `/learn/glossary` | Complete Glossary | Module 16 |

**Design:** Long-form article layout (720px prose), table of contents sidebar, prev/next navigation, reading time, last updated date.

**Schema:** Article, BreadcrumbList, FAQPage (where applicable)

#### 5.3.3 Blog / Articles Hub (`/blog`)

**Purpose:** SEO content hub. All 300+ articles indexed here with category filters and search.

| Element | Function |
|---------|----------|
| Category Filter Tabs | All, Car Problems, Fault Codes, Oil Guide, Car Models, Maintenance, Diagnosis |
| Search Bar | Full-text search across all articles |
| Article Grid | 3-column card grid, paginated (12 per page) |
| Sidebar | Popular articles, categories, tag cloud |
| Pagination | SEO-friendly numbered pagination with rel=prev/next |

**Schema:** CollectionPage, Blog

#### 5.3.4 Car Problems Hub (`/car-problems`)

**Purpose:** Symptom-based navigation. "My car is doing X — what's wrong?"

| Section | Content |
|---------|---------|
| Hero | "What's Wrong With Your Car?" |
| Symptom Categories | Engine, Transmission, Cooling, Electrical, Exhaust, Brakes, Steering |
| Symptom Grid | Clickable symptom cards: "Car won't start", "Engine overheating", "Check engine light on", etc. |
| Vehicle Filter | Filter symptoms by vehicle make/model |
| Search | "Describe your car problem..." |

Each symptom links to a detailed diagnostic article (see SEO articles document).

#### 5.3.5 Oil Guide Hub (`/oil-guide`)

**Purpose:** Comprehensive oil education hub.

| Page | URL | Source |
|------|-----|--------|
| Oil Guide Overview | `/oil-guide` | Module 10 overview |
| Viscosity Explained | `/oil-guide/viscosity` | Module 10 §10.2 |
| Oil Types | `/oil-guide/types` | Module 10 §10.3 |
| Oil Specifications | `/oil-guide/specifications` | Module 10 §10.4 |
| When to Change Oil | `/oil-guide/change-interval` | Module 10 §10.5 |
| Transmission Fluid Guide | `/oil-guide/transmission-fluid` | Module 10 §10.6 |
| Vehicle Oil Finder | `/oil-guide/finder` | Module 12 (interactive tool) |

#### 5.3.6 Glossary (`/glossary`)

**Purpose:** SEO-optimized glossary with individual anchored terms.

- Alphabetical index (A–Z quick-jump)
- Each term is an anchor link (`/glossary#dtc`)
- JSON-LD DefinedTermSet schema
- Internal links from terms to relevant articles
- Source: Module 16

---

### 5.4 RESOURCE / TOOL PAGES

#### 5.4.1 Supported Vehicles (`/vehicles`)

**Purpose:** Vehicle compatibility checker + gateway to vehicle-specific content.

| Section | Content |
|---------|---------|
| Hero | "Does BYKI Work With Your Car?" |
| Make Grid | 18 make logos in a grid, each clickable |
| Make Page (`/vehicles/perodua`) | All models under that make, with oil match + supported features |
| Model Page (`/vehicles/perodua/myvi`) | Full vehicle page: oil recommendation, common DTCs, sensor coverage, tips |
| Search | "Search your vehicle..." |

**Schema:** Vehicle (schema.org), Product  
**Target Keywords:** OBD2 scanner for Myvi, BYKI supported cars, car diagnostic Perodua

**Vehicle-specific pages (85+ pages):**

Each model gets a dedicated page:

```
/vehicles/perodua/axia
/vehicles/perodua/bezza
/vehicles/perodua/myvi
/vehicles/perodua/ativa
/vehicles/perodua/alza
/vehicles/perodua/aruz
/vehicles/proton/saga
/vehicles/proton/persona
/vehicles/proton/iriz
/vehicles/proton/x50
/vehicles/proton/x70
/vehicles/proton/x90
/vehicles/proton/s70
/vehicles/proton/exora
/vehicles/toyota/vios
/vehicles/toyota/yaris
/vehicles/toyota/corolla-cross
/vehicles/toyota/camry
/vehicles/toyota/hilux
/vehicles/toyota/fortuner
/vehicles/toyota/innova
/vehicles/toyota/avanza
/vehicles/toyota/veloz
/vehicles/toyota/rush
/vehicles/toyota/rav4
/vehicles/honda/city
/vehicles/honda/civic
/vehicles/honda/hr-v
/vehicles/honda/cr-v
/vehicles/honda/accord
/vehicles/honda/br-v
/vehicles/honda/wr-v
/vehicles/nissan/almera
/vehicles/nissan/kicks
/vehicles/nissan/serena
/vehicles/nissan/x-trail
/vehicles/nissan/navara
/vehicles/mazda/mazda-2
/vehicles/mazda/mazda-3
/vehicles/mazda/cx-3
/vehicles/mazda/cx-30
/vehicles/mazda/cx-5
/vehicles/mazda/cx-8
/vehicles/mazda/bt-50
/vehicles/hyundai/elantra
/vehicles/hyundai/tucson
/vehicles/hyundai/santa-fe
/vehicles/hyundai/stargazer
/vehicles/kia/cerato
/vehicles/kia/sportage
/vehicles/kia/carnival
/vehicles/kia/seltos
/vehicles/mitsubishi/triton
/vehicles/mitsubishi/xpander
/vehicles/mitsubishi/outlander
/vehicles/mitsubishi/asx
/vehicles/ford/ranger
/vehicles/ford/everest
/vehicles/isuzu/d-max
/vehicles/isuzu/mu-x
/vehicles/bmw/3-series
/vehicles/bmw/5-series
/vehicles/bmw/x1
/vehicles/bmw/x3
/vehicles/bmw/x5
/vehicles/mercedes/a-class
/vehicles/mercedes/c-class
/vehicles/mercedes/e-class
/vehicles/mercedes/gla
/vehicles/mercedes/glc
/vehicles/volkswagen/polo
/vehicles/volkswagen/golf
/vehicles/volkswagen/tiguan
/vehicles/subaru/xv
/vehicles/subaru/forester
/vehicles/subaru/outback
/vehicles/suzuki/swift
/vehicles/suzuki/jimny
/vehicles/suzuki/s-cross
/vehicles/chery/tiggo-7-pro
/vehicles/chery/tiggo-8-pro
/vehicles/chery/omoda-5
/vehicles/gwm/jolion
/vehicles/gwm/h6
```

**Each vehicle page contains:**
- Vehicle hero image / silhouette
- Recommended engine oil (Petronas Syntium match) + ATF
- Oil capacity + change interval
- Engine variant(s)
- OBD-II protocol used
- Common fault codes for that model
- Sensor coverage level (full / partial / basic)
- Common maintenance issues in Malaysian conditions
- Related articles
- "Scan This Car" CTA

#### 5.4.2 DTC Code Lookup (`/dtc`)

**Purpose:** Major traffic tool. Users search for specific fault codes.

| Element | Function |
|---------|----------|
| Search Bar | Type any DTC code → instant results |
| Category Tabs | P (Powertrain), C (Chassis), B (Body), U (Network) |
| Browse by System | Engine, Fuel, Cooling, Emission, Transmission, etc. |
| Individual Code Pages | `/dtc/P0171`, `/dtc/P0300`, etc. (4,565 pages) |

**Individual DTC page (`/dtc/P0171`):**
- Code + Name + System category
- Severity badge
- Plain-language description
- Common causes (numbered list)
- Symptoms you may notice
- Estimated repair cost in RM
- Related components
- Recommended actions
- Related codes
- "Read Your Codes with BYKI" CTA
- FAQ section (e.g., "Is it safe to drive with P0171?")
- Vehicles commonly affected

**Schema:** TechArticle, FAQPage  
**Target Keywords:** P0171, P0171 meaning, P0171 repair cost, system too lean

#### 5.4.3 Oil Finder Tool (`/oil-finder`)

**Purpose:** Interactive tool. Select your vehicle → get exact oil recommendation.

| Step | User Action | Display |
|------|-------------|---------|
| 1 | Select Make | Logo grid |
| 2 | Select Model | Model cards |
| 3 | Select Year/Variant | Year dropdown |
| 4 | Results | Oil product card + ATF card + capacity + interval + price + "Buy" + "Book Service" |

**Schema:** Product, Offer  
**Target Keywords:** engine oil for [car model], what oil for my car, minyak hitam kereta

#### 5.4.4 Adapter Guide (`/adapters`)

**Purpose:** Help users buy the right OBD-II adapter.

| Section | Content | Source |
|---------|---------|--------|
| Hero | "Choose the Right OBD-II Adapter for BYKI" | Module 03 |
| Comparison Table | All recommended adapters with specs, price, rating | Module 03 §3.2 |
| Buying Guide | BLE vs Classic, chip types, where to buy | Module 03 §3.2–3.6 |
| Installation | How to plug in, LED indicators, tips | Module 03 §3.3–3.4 |
| Troubleshooting | Adapter-specific issues | Module 03 §3.5 |
| Where to Buy | Malaysian retail links | Module 03 §3.6 |
| CTA | "Buy Recommended Adapter" |  |

**Schema:** Product, FAQPage  
**Target Keywords:** OBD2 adapter Malaysia, ELM327 BLE, best OBD2 scanner Malaysia, Bluetooth OBD2

#### 5.4.5 Compatible Adapters Quick-Check (`/adapters/check`)

**Purpose:** "Will my adapter work?" tool.

- User inputs adapter brand/name
- Displays: Compatible ✅ / Not Compatible ❌ / Unknown ⚠️
- Links to recommended adapters if not compatible

---

### 5.5 WORKSHOP PAGES

#### 5.5.1 Find a Workshop (`/workshop`)

**Purpose:** Location-based workshop finder.

| Section | Content |
|---------|---------|
| Map View | Interactive map showing BYKI Partner Workshops |
| List View | Sortable list by distance, rating |
| Filters | Location (state, city), services offered |
| Individual Workshop Page | `/workshop/[slug]` — details, reviews, booking |

**Schema:** LocalBusiness, AutoRepair  
**Target Keywords:** car workshop near me, bengkel kereta Shah Alam, car service Selangor

#### 5.5.2 Become a Partner (`/workshop/partner`)

**Purpose:** B2B lead generation for workshop partnerships.

| Section | Content |
|---------|---------|
| Value Proposition | Benefits for workshops joining BYKI network |
| How It Works | Partnership process |
| Requirements | What workshops need to qualify |
| Application Form | Contact details, workshop info, location |
| Existing Partners | Logos / testimonials from current partners |

**Schema:** Organization  
**Target Keywords:** BYKI partner workshop, join BYKI network, Petronas workshop partner

#### 5.5.3 Service Packages (`/workshop/packages`)

**Purpose:** Transparent pricing for all service levels.

| Section | Content | Source |
|---------|---------|--------|
| Package Comparison | All 8 oil change packages in a comparison table | Module 14 §14.4 |
| Additional Services | Engine flush, ATF change, coolant, brake fluid, battery | Module 14 §14.4 |
| What's Included | Breakdown of each package | Module 14 |
| Book Now | Vehicle selector → package match → booking flow |  |

**Schema:** Offer, Product  
**Target Keywords:** car service package Malaysia, oil change price, tukar minyak hitam harga

---

### 5.6 ABOUT PAGES

#### 5.6.1 About BYKI (`/about`)

| Section | Content |
|---------|---------|
| Mission | "Making vehicle diagnostics accessible to every Malaysian" |
| Origin Story | Built in Shah Alam, Selangor. Malaysian engineering. |
| Technology | Web Bluetooth, PWA, browser-based (no app install) |
| Team | Key team members |
| Petronas Partnership | Exclusive Petronas Syntium integration |
| Stats | Vehicles scanned, codes in database, models supported |

**Schema:** Organization, AboutPage

#### 5.6.2 Contact (`/contact`)

| Section | Content |
|---------|---------|
| Contact Form | Name, email, subject, message |
| Office Address | Shah Alam, Selangor address |
| Email | Support and business emails |
| Social Media | Links to all platforms |
| Operating Hours | Business hours |

**Schema:** Organization, ContactPage

#### 5.6.3 Press / Media Kit (`/press`)

- Company description (short, medium, long)
- Logo downloads (SVG, PNG)
- Product screenshots
- Key statistics
- Press releases
- Media contact

---

### 5.7 UTILITY PAGES

| Page | URL | Purpose |
|------|-----|---------|
| Privacy Policy | `/privacy` | PDPA compliance |
| Terms of Service | `/terms` | Usage terms |
| Cookie Policy | `/cookies` | Cookie consent |
| Sitemap | `/sitemap` | HTML sitemap for users |
| 404 | `/404` | Custom 404 with search + popular links |
| Search Results | `/search` | On-site search results |

---

## 6. SEO Infrastructure

### 6.1 Technical SEO

| Element | Implementation |
|---------|---------------|
| **SSR/SSG** | All content pages statically generated at build time. Dynamic routes use ISR. |
| **XML Sitemap** | Auto-generated, submitted to Google Search Console + Bing Webmaster |
| **robots.txt** | Allow all crawlers. Disallow /api/, /admin/ |
| **Canonical URLs** | Self-referencing canonical on every page |
| **Hreflang** | `en-MY` (English Malaysia) + `ms-MY` (Bahasa Melayu) |
| **Page Speed** | Target: LCP <2.5s, FID <100ms, CLS <0.1 |
| **Image Optimization** | WebP/AVIF with fallback, lazy loading, responsive srcset |
| **Internal Linking** | Every article links to 3–5 related articles + 1 product page + 1 vehicle page |
| **URL Structure** | Lowercase, hyphenated, no dates in URLs, no unnecessary nesting |

### 6.2 Structured Data (JSON-LD)

Every page type gets appropriate schema:

| Page Type | Schema Types |
|-----------|-------------|
| Home | Organization, WebSite, SearchAction |
| Product | Product, Offer, AggregateRating |
| Article / Blog Post | Article, BreadcrumbList, FAQPage, HowTo |
| DTC Code Page | TechArticle, FAQPage |
| Vehicle Page | Vehicle, Product, BreadcrumbList |
| Workshop | LocalBusiness, AutoRepair |
| Oil Product | Product, Offer |
| Glossary | DefinedTermSet |
| How-to Guides | HowTo, Step |
| FAQ sections | FAQPage |
| Service Packages | Offer, Product |

### 6.3 Meta Tags Template

Every page includes:

```html
<title>{Page Title} | BYKI</title>
<meta name="description" content="{150-160 char description}" />
<meta name="keywords" content="{5-8 keywords}" />
<link rel="canonical" href="https://byki.my/{path}" />

<!-- Open Graph -->
<meta property="og:title" content="{Title}" />
<meta property="og:description" content="{Description}" />
<meta property="og:image" content="https://byki.my/og/{page-slug}.jpg" />
<meta property="og:url" content="https://byki.my/{path}" />
<meta property="og:type" content="website|article" />
<meta property="og:site_name" content="BYKI" />
<meta property="og:locale" content="en_MY" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{Title}" />
<meta name="twitter:description" content="{Description}" />
<meta name="twitter:image" content="https://byki.my/og/{page-slug}.jpg" />

<!-- Additional -->
<meta name="robots" content="index, follow" />
<meta name="author" content="BYKI" />
<meta name="geo.region" content="MY-10" />
<meta name="geo.placename" content="Shah Alam, Selangor" />
```

### 6.4 GEO (Generative Engine Optimization)

Optimizing for AI search engines (Google AI Overview, Bing Chat, Perplexity, ChatGPT Search):

| Strategy | Implementation |
|----------|---------------|
| **Concise Answers** | Every article opens with a 2–3 sentence direct answer to the query before elaborating |
| **Structured Data** | Rich schema markup so AI can parse content structure |
| **FAQ Sections** | Every article ends with 3–5 FAQs in proper schema — AI pulls these frequently |
| **Tables & Lists** | Data in tables and numbered lists — AI prefers structured formats |
| **Authority Signals** | Cite OBD-II standards (SAE J1979, J2012), API standards, OEM specs |
| **Freshness** | Published/updated dates visible. Content reviewed quarterly. |
| **Topic Authority** | Deep internal linking within topic clusters |
| **Entity Optimization** | Consistent entity references (BYKI, Petronas Syntium, OBD-II) across all pages |
| **Source Citations** | Reference standards, specifications, and data sources |
| **E-E-A-T Signals** | Author bios, editorial process, industry partnerships (Petronas) |

### 6.5 Local SEO

| Element | Implementation |
|---------|---------------|
| **Google Business Profile** | Claimed and optimised. "BYKI — Vehicle Diagnostics" |
| **NAP Consistency** | Name, Address, Phone identical across all platforms |
| **Local Pages** | `/workshop/shah-alam`, `/workshop/selangor` with local content |
| **Local Keywords** | "bengkel kereta Shah Alam", "car diagnostic Selangor" embedded in content |
| **Google Maps** | Workshop locations pinned on Google Maps |
| **Local Content** | Articles mentioning Malaysian locations, Puspakom, JPJ, Malaysian driving conditions |
| **Reviews** | Google reviews from workshop customers |

---

## 7. Content Strategy

### 7.1 Content Pillars

| Pillar | Traffic Intent | Content Type | Volume |
|--------|---------------|--------------|--------|
| **Car Problems & Symptoms** | Informational / Problem-solving | Diagnostic articles | 100+ articles |
| **Fault Codes (DTC)** | Informational / Lookup | Code reference pages | 100+ top codes as articles + 4,565 auto-generated |
| **Vehicle Guides** | Informational / Commercial | Vehicle-specific pages | 85+ vehicle pages |
| **Oil & Maintenance** | Informational / Commercial | Oil guides, comparisons | 50+ articles |
| **How-To / Education** | Informational | Tutorials, explainers | 30+ articles |
| **Local / Malaysian** | Local / Informational | Location-specific content | 20+ articles |

### 7.2 Content Production Pipeline

| Phase | Action | Cadence |
|-------|--------|---------|
| **Research** | Keyword research (Ahrefs/SEMrush), competitor analysis, user questions | Monthly |
| **Outline** | Article outline with H2/H3 structure, keywords, internal links | Per article |
| **Write** | 1,500–3,000 word articles, following SEO template | 10–15 articles/week |
| **Review** | Technical accuracy check against BYKI Library | Per article |
| **Publish** | Deploy with full meta, schema, OG images | Per article |
| **Monitor** | Search Console rankings, traffic, CTR | Weekly |
| **Update** | Refresh underperforming articles, add new data | Monthly |

### 7.3 Internal Linking Strategy

```
Article (car problem)
  ├── Links to → DTC Code Page (specific fault code)
  ├── Links to → Vehicle Page (affected models)
  ├── Links to → Oil Product Page (if oil-related)
  ├── Links to → Product Page (Health Scan / Fault Codes / Live Data)
  ├── Links to → Related Articles (2–3)
  └── Links to → Workshop/Booking (CTA)
```

Every article contains:
- **3–5 internal links** to related content
- **1 product CTA** linking to BYKI app or product page
- **1 vehicle link** if model-specific
- **Breadcrumb** linking to category hub

---

## 8. Conversion Funnels

### 8.1 Primary Funnel: Organic → Scan

```
Google Search (car problem / fault code / oil question)
  → Article Page (education + answers)
    → Product Page (BYKI feature relevant to their need)
      → Open BYKI App (byki.my web app)
        → Health Scan or Code Read
          → Oil Recommendation + Workshop Booking
```

### 8.2 Secondary Funnel: Organic → Adapter Purchase

```
Google Search (OBD2 scanner / car diagnostic tool)
  → Adapter Guide or Product Page
    → Adapter Recommendation
      → Purchase Link (Shopee / Lazada)
        → Return to BYKI for scanning
```

### 8.3 Tertiary Funnel: Organic → Workshop Booking

```
Google Search (car service / oil change / bengkel)
  → Workshop Page or Service Package Page
    → Book a Workshop
      → Service Completed
        → Post-service BYKI scan
```

### 8.4 CTA Hierarchy

Every page has exactly **one primary CTA** and up to **two secondary CTAs**:

| CTA Level | Example | Placement |
|-----------|---------|-----------|
| **Primary** | "Scan Your Car Now" / "Open BYKI" | Hero, bottom of page |
| **Secondary** | "Find Your Oil" / "Read Fault Codes" | Mid-page, sidebar |
| **Tertiary** | "Book a Workshop" / "Buy an Adapter" | Related sections, footer |

---

## 9. Page Count Summary

| Section | Pages |
|---------|-------|
| Home | 1 |
| Product Pages | 5 |
| Knowledge Base (Library) | 17 |
| Blog Articles | 300+ (see seo-articles.md) |
| Vehicle Pages | 85+ |
| DTC Code Pages | 100+ curated articles + 4,565 auto-generated |
| Oil Product Pages | 20+ |
| Oil Guide Pages | 7 |
| Workshop Pages | 3+ (scales with partners) |
| About / Utility | 8 |
| Car Problems Hub | 1 + category pages |
| **Total (initial)** | **550+ pages** |
| **Total (with auto-generated DTC)** | **5,000+ indexable pages** |

---

## 10. Sitemap Hierarchy (Condensed)

```
byki.my/
├── (Home)
├── health-scan
├── live-data
├── fault-codes
├── oil-recommendation
├── pricing
├── learn/
│   ├── (Knowledge Base Hub)
│   ├── what-is-byki
│   ├── getting-started
│   ├── hardware-adapters
│   ├── how-obd2-works
│   ├── live-sensor-data
│   ├── fault-codes-dtc
│   ├── health-scan
│   ├── health-report
│   ├── seven-systems
│   ├── engine-oil-guide
│   ├── petronas-syntium
│   ├── vehicle-oil-match
│   ├── ui-guide
│   ├── workshop-booking
│   ├── troubleshooting
│   └── glossary
├── blog/
│   ├── (Blog Hub)
│   └── [300+ article slugs]
├── car-problems/
│   ├── (Symptom Hub)
│   └── [symptom category pages]
├── vehicles/
│   ├── (Vehicle Hub)
│   ├── perodua/
│   │   ├── axia
│   │   ├── bezza
│   │   ├── myvi
│   │   ├── ativa
│   │   ├── alza
│   │   └── aruz
│   ├── proton/
│   │   ├── saga ... s70
│   ├── toyota/ ... honda/ ... nissan/ ... etc.
│   └── [18 makes × models each]
├── dtc/
│   ├── (DTC Lookup Hub)
│   ├── P0171
│   ├── P0300
│   └── [4,565 code pages]
├── oil-guide/
│   ├── (Oil Guide Hub)
│   ├── viscosity
│   ├── types
│   ├── specifications
│   ├── change-interval
│   ├── transmission-fluid
│   └── finder
├── adapters/
│   ├── (Adapter Guide)
│   └── check
├── workshop/
│   ├── (Find a Workshop)
│   ├── partner
│   ├── packages
│   └── [individual workshop pages]
├── about
├── contact
├── press
├── privacy
├── terms
├── cookies
├── sitemap
└── 404
```

---

## 11. Launch Phases

### Phase 1 — Foundation (Month 1–2)

- [ ] Deploy site framework (Next.js + Tailwind + CMS)
- [ ] Home page
- [ ] 5 product pages
- [ ] 16 knowledge base pages (from library)
- [ ] Oil finder tool
- [ ] DTC lookup tool (auto-generated 4,565 pages)
- [ ] Technical SEO (sitemap, schema, robots.txt, Search Console)
- [ ] Core Web Vitals optimisation

### Phase 2 — Vehicle & Content (Month 2–4)

- [ ] 85+ vehicle pages
- [ ] 100 SEO articles (priority: car problems + common fault codes)
- [ ] Adapter guide + compatibility checker
- [ ] Oil guide sub-pages
- [ ] Workshop finder (map + list)
- [ ] Google Business Profile setup

### Phase 3 — Content Scale (Month 4–8)

- [ ] 200 additional SEO articles
- [ ] Car problems symptom hub
- [ ] Bahasa Melayu translation (priority pages first)
- [ ] Workshop partner onboarding pages
- [ ] Service packages pages
- [ ] On-site search implementation

### Phase 4 — Authority (Month 8–12)

- [ ] Remaining articles to 300+
- [ ] Content refresh programme (update existing articles)
- [ ] Link building campaign
- [ ] Press/media kit
- [ ] Community features (user reviews, workshop ratings)
- [ ] Performance monitoring and optimization

---

## 12. Performance & Monitoring

| Tool | Purpose |
|------|---------|
| **Google Search Console** | Indexation, keywords, CTR, coverage errors |
| **Google Analytics 4** | Traffic, user journeys, conversions |
| **Ahrefs / SEMrush** | Keyword tracking, backlinks, competitor analysis |
| **PageSpeed Insights** | Core Web Vitals monitoring |
| **Vercel Analytics** | Real user metrics, edge performance |
| **Hotjar / Microsoft Clarity** | Heatmaps, user recordings (sample) |
| **Uptime Robot** | Uptime monitoring, alert on downtime |

---

*BYKI.my Website Blueprint v1.0 · © 2026 Bengkel Onex*
