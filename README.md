# Chambu Digital — Website v2

A modern, comprehensive React website for Chambu Digital built with Vite.

## ✨ Design

- **Theme:** Dark luxury / African tech-forward
- **Fonts:** Syne (display) + DM Sans (body)
- **Accent:** Mint green `#00e5a0` + Gold `#f5c842`
- **Animations:** Animated canvas dot grid, scroll-triggered fade-ins, hover micro-interactions

## 🗂 Project Structure

```
chambu-digital/
├── index.html                   # HTML entry point
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx                  # Root component — mounts all sections
    ├── main.jsx                 # React DOM entry
    ├── styles/
    │   └── globals.css          # Design tokens, resets, utility classes
    ├── data/
    │   └── siteData.js          # ← EDIT THIS to update all content
    ├── hooks/
    │   └── useScrollAnimation.js  # IntersectionObserver fade-in hook
    ├── components/
    │   ├── Navbar.jsx + .css    # Sticky nav with blur-on-scroll + mobile drawer
    │   └── Footer.jsx + .css    # Multi-column footer with socials
    └── sections/
        ├── Hero.jsx + .css      # Animated canvas hero + stats bar
        ├── Services.jsx + .css  # 6-service bento grid
        ├── Projects.jsx + .css  # Filterable portfolio cards
        ├── Pricing.jsx + .css   # 3-tier pricing (featured card highlighted)
        ├── Marketing.jsx + .css # Tabbed Google Ads / SEO section
        ├── Payment.jsx + .css   # Payment gateway with network badges
        └── Contact.jsx + .css   # CTA band + contact info cards
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✏️ Customising Content

All site content lives in **`src/data/siteData.js`**. Edit that single file to update:
- Company name, contacts, WhatsApp numbers
- Services list
- Projects portfolio
- Pricing plans
- Stats / social links

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `lucide-react` | Icon set |
| `vite` | Build tool + dev server |

## 🎨 Customising the Theme

All design tokens are CSS variables in `src/styles/globals.css`:

```css
--clr-accent: #00e5a0;   /* Primary accent — change to your brand colour */
--clr-gold: #f5c842;     /* Secondary accent */
--clr-bg: #080c10;       /* Page background */
--font-display: 'Syne';  /* Heading font */
--font-body: 'DM Sans';  /* Body font */
```
