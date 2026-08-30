# Qiskit Fall Fest 2026

Welcome to the official repository for the **Qiskit Fall Fest 2026** at Bharathidasan University. This project is built using Astro, Tailwind CSS, and TypeScript, delivering a premium, accessible, and highly optimized web experience.

## Recent Optimizations

We have implemented several key enhancements to ensure the platform meets production standards:

### SEO Enhancements
- **JSON-LD Structured Data**: Added `Event` schema to the `BaseLayout` and `FAQPage` schema to the FAQ section, dramatically improving search engine visibility and rich snippets.
- **Meta Tags**: Included explicit `robots` meta tags and verified `canonical` linking for better indexing control.

### Performance Upgrades
- **Lazy Loading**: Applied `loading="lazy"` and `decoding="async"` attributes to below-the-fold images across the `SpeakersSection`, `Footer`, and `RegistrationCTA`, resulting in faster Initial Page Load and improved Largest Contentful Paint (LCP).
- **Critical Assets**: Explicit `fetchpriority="high"` and `loading="eager"` remain intact on Hero assets to ensure immediate rendering.

### Accessibility Improvements
- **ARIA Labels**: Added `aria-label` attributes to icon-only links (such as social media links in the `Footer`) ensuring screen readers can correctly interpret navigation elements.
- **Semantic HTML**: Ensured proper usage of landmarks and semantic heading hierarchy throughout all sections.

## Running the Project Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

## Deployment
This project is configured for seamless deployment on Cloudflare via Astro's static site generation.

---
*Powered By Qryptex in collaboration with IBM Quantum / Qiskit.*
