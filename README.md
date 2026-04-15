# BYKI Main Website

A React + Vite website for BYKI, featuring diagnostic tools, oil guides, and educational resources about vehicle diagnostics and maintenance.

## Features

- **Health Scan** - Vehicle diagnostics interface
- **Live Data** - Real-time sensor monitoring
- **Fault Codes** - DTC code reference and lookup
- **Oil Guide** - Engine oil specifications and matching
- **Blog** - Automotive maintenance articles
- **BYKI Library** - Educational guides about OBD-II, diagnostics, and vehicle systems

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite 6
- **Routing**: React Router 7
- **Markdown**: React Markdown with GitHub Flavored Markdown support
- **Styling**: CSS3

## Development

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

This generates optimized files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/      # Navbar, Footer
│   ├── pages/           # Page components
│   ├── content/         # Blog articles & library chapters
│   ├── App.jsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── public/              # Static assets & branding
├── vite.config.js       # Vite configuration
├── vercel.json          # Vercel deployment config
└── package.json         # Dependencies
```

## Deployment

### Vercel Deployment

The project is configured for Vercel deployment via `vercel.json`.

#### Steps:
1. Connect your GitHub repository to Vercel
2. Vercel will automatically:
   - Detect the Vite project
   - Install dependencies
   - Build the production bundle
   - Deploy to a live URL

#### Domain Setup:
Once deployed to Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `www.byki-website.com`)
3. Update your domain registrar's DNS records as per Vercel's instructions
4. The domain will automatically point to the homepage (`/`)

#### Environment Variables:
- Add `VITE_APP_URL` in Vercel deployment settings if needed

## Routing

All routes are configured to serve the React app. Client-side routing handles:
- `/` - Homepage
- `/health-scan` - Health Scan tool
- `/live-data` - Live sensor data
- `/fault-codes` - Fault code reference
- `/oil` - Oil guide
- `/learn` - BYKI Library
- `/learn/:id` - Individual library chapter
- `/blog` - Blog articles
- `/blog/:slug` - Individual blog post
- `/about` - About page

## Navigation Menu

The website features a hierarchical navigation menu:

**Tools**
- Health Scan
- Live Data  
- Fault Codes
- Oil Guide

**Resources**
- BYKI Library
- Blog
- About

Plus the "Open BYKI" CTA button linking to the main app.

## License

All rights reserved © BYKI

## Support

For issues or questions, contact the development team.
