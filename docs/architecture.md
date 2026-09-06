# Qiskit Fall Fest 2026 --- Architecture Plan

## 1. Product architecture

The website is a static-first Astro event platform with selective
interactive islands.

### Primary goals

-   Event discovery
-   Event information
-   Two-day schedule
-   Speaker discovery
-   Organizer credibility
-   Sponsor visibility
-   Registration conversion
-   FAQ/self-service information
-   Premium interactive experience

### Deployment

Target: **Cloudflare**

Domain strategy: Use a configurable production site URL so a
Qryptex-managed subdomain can be assigned later.

Example: `fallfest.qryptex.in`

Do not hardcode this domain into components.

------------------------------------------------------------------------

## 2. Route map

``` text
/
├── Home
│   ├── Hero
│   ├── Why Fall Fest
│   ├── Two-day timeline
│   ├── Highlights
│   ├── Speakers
│   ├── Organizers
│   ├── Sponsors
│   ├── CTA
│   ├── About
│   ├── FAQ
│   └── Footer
│
├── /register
│   └── Registration flow
│
├── /schedule
│   └── Complete two-day schedule
│
├── /speakers
│   └── Full speaker listing
│
├── /about
│   └── Event/about information
│
└── /faq
    └── FAQ
```

Only `/` and `/register` are mandatory for the first release. Other
pages can be activated when content is ready.

------------------------------------------------------------------------

## 3. Rendering strategy

### Static by default

Use Astro static generation for:

-   navigation,
-   hero text,
-   event description,
-   timeline content,
-   highlights,
-   speakers,
-   organizers,
-   sponsor content,
-   FAQ,
-   footer.

### Client islands

Use client-side JavaScript only for:

-   theme switch,
-   mobile navigation,
-   timeline filtering,
-   FAQ accordion,
-   subtle quantum visual interaction,
-   registration form behavior.

Do not hydrate entire sections unnecessarily.

------------------------------------------------------------------------

## 4. Data architecture

Keep event information independent of presentation.

``` text
src/data/
├── event.ts
├── sessions.ts
├── highlights.ts
├── speakers.ts
├── organizers.ts
└── faqs.ts
```

Example session model:

``` ts
type Session = {
  id: string;
  day: 1 | 2;
  start: string;
  end: string;
  title: string;
  type: string;
  description?: string;
  speakerId?: string;
  room?: string;
};
```

Example speaker model:

``` ts
type Speaker = {
  id: string;
  name: string;
  role: string;
  organization: string;
  image: string;
  linkedin?: string;
  topic?: string;
};
```

Use strict TypeScript types.

------------------------------------------------------------------------

## 5. Design token architecture

Centralize visual tokens.

``` text
src/styles/
├── tokens.css
├── global.css
└── animations.css
```

Conceptual tokens:

``` css
:root {
  --color-bg: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-text-muted: ...;
  --color-primary: ...;
  --color-quantum: ...;
  --color-lavender: ...;
  --color-border: ...;
}

[data-theme="dark"] {
  ...
}

[data-theme="light"] {
  ...
}
```

Do not scatter raw colors throughout components.

------------------------------------------------------------------------

## 6. Theme architecture

Use:

``` text
system preference
      ↓
initial theme
      ↓
user selection
      ↓
localStorage
```

Requirements:

-   No flash of incorrect theme.
-   Theme switch works without page reload.
-   Theme choice persists.
-   Accessible control.
-   Reduced-motion compatible.

Both themes use the same DOM structure wherever possible.

------------------------------------------------------------------------

## 7. Component hierarchy

``` text
BaseLayout
├── SEO
├── ThemeInitializer
├── Navbar
├── Main
│   ├── Hero
│   │   └── QuantumOrbital
│   ├── WhyFallFest
│   │   ├── PamphletCard
│   │   └── EventDetailsCard
│   ├── SessionTimeline
│   ├── HighlightGrid
│   ├── SpeakersSection
│   │   └── SpeakerCard[]
│   ├── OrganizersSection
│   │   └── OrganizerCard[]
│   ├── SponsorSection
│   ├── RegistrationCTA
│   ├── AboutSection
│   └── FAQAccordion
└── Footer
```

------------------------------------------------------------------------

## 8. Quantum visual system

Do not create unrelated visual effects for every section.

Use a shared visual vocabulary:

### Orbital system

Used in hero and major CTA.

### Circuit system

Used around timeline/workshop-related sections.

### Qubit lattice

Used in event details/highlights/sponsor visuals.

### Quantum field

Used as subtle background atmosphere.

### Hummingbird

Used as a directional identity element from the supplied Fall Fest
artwork.

The visuals should transform between sections instead of being random.

------------------------------------------------------------------------

## 9. Scroll scene system

Treat every major section as a scene.

``` text
Scene 01 — Arrival
Scene 02 — Why
Scene 03 — Two-Day Journey
Scene 04 — Highlights
Scene 05 — People
Scene 06 — Organizers
Scene 07 — Ecosystem
Scene 08 — Invitation
Scene 09 — About
Scene 10 — FAQ
Scene 11 — Exit/Footer
```

Each scene should: - have a clear visual identity, - enter smoothly, -
maintain readable content, - exit without disrupting scrolling.

Avoid scroll hijacking.

------------------------------------------------------------------------

## 10. Sponsor architecture

The sponsor section should be visually important but not overpower the
event.

Concept:

``` text
                IN COLLABORATION WITH

        ┌────────────────────────────────┐
        │                                │
        │   IBM Quantum    ×    Qryptex  │
        │                                │
        └────────────────────────────────┘

                 Official Sponsor
                       Qryptex
```

Use actual approved logos.

Do not manufacture an IBM/Qiskit partnership statement that has not been
provided.

------------------------------------------------------------------------

## 11. Asset architecture

Recommended:

``` text
public/
├── brand/
│   ├── qiskit/
│   ├── ibm/
│   ├── bdu/
│   └── qryptex/
├── event/
│   ├── pamphlet/
│   └── imagery/
├── speakers/
├── organizers/
├── quantum/
└── design-reference.png
```

Use meaningful filenames.

Keep source/original assets separate from optimized derivatives if
necessary.

------------------------------------------------------------------------

## 12. Image strategy

-   Use AVIF/WebP for photographic images where supported.
-   Preserve SVG logos as SVG.
-   Define explicit image dimensions to reduce layout shift.
-   Use responsive `srcset`/Astro image tooling where appropriate.
-   Lazy-load below-fold photography.
-   Hero assets may be prioritized.
-   Never load giant source images when a smaller derivative is
    sufficient.

------------------------------------------------------------------------

## 13. Interaction architecture

### Theme switch

Small TypeScript controller.

### Timeline

Astro-rendered data + minimal client interaction.

### FAQ

Native `<details>` may be preferred when sufficient; enhance styling
rather than replacing semantic behavior unnecessarily.

### Mobile menu

Small client island.

### Quantum visuals

Only hydrate when needed.

### Magnetic buttons

Optional enhancement; must remain normal buttons when JS is unavailable.

------------------------------------------------------------------------

## 14. SEO architecture

Base layout should support:

``` text
title
description
canonical
og:title
og:description
og:image
og:url
twitter:card
twitter:title
twitter:description
twitter:image
```

Generate: - sitemap, - robots.txt.

Use JSON-LD only with verified event information.

Potential schema types: - Event - Organization - Person

Do not invent values.

------------------------------------------------------------------------

## 15. Performance architecture

Priority order:

``` text
HTML/content
    ↓
critical CSS
    ↓
critical images
    ↓
small interactive islands
    ↓
enhanced quantum visuals
```

Never:

``` text
huge JS bundle
    ↓
wait
    ↓
render page
```

Use: - code splitting, - lazy imports, - intersection observers, - CSS
animations where sufficient, - SVG instead of JS drawing where possible.

------------------------------------------------------------------------

## 16. Accessibility architecture

Ensure:

``` text
Keyboard
   ↓
semantic controls
   ↓
visible focus
   ↓
screen reader labels
   ↓
reduced motion
   ↓
sufficient contrast
```

Theme changes must not reduce contrast.

Interactive visuals must not be the only source of information.

------------------------------------------------------------------------

## 17. Registration architecture

Registration remains separate.

``` text
/register

Hero/minimal context
        ↓
Registration form
        ↓
Validation
        ↓
Submission
        ↓
Success / error state
```

The exact backend/provider should be selected once the registration
requirements are known.

Do not invent an API endpoint.

Keep the UI decoupled from the eventual form backend.

------------------------------------------------------------------------

## 18. Cloudflare readiness

Keep deployment-specific concerns isolated.

Recommended configuration:

``` text
PUBLIC_SITE_URL
PUBLIC_EVENT_NAME
PUBLIC_EVENT_YEAR
```

Use Astro's supported Cloudflare adapter/deployment strategy when
deployment begins.

Do not add server functionality until required.

------------------------------------------------------------------------

## 19. Testing plan

Before release:

### Functional

-   navigation
-   theme switch
-   mobile menu
-   timeline
-   FAQ
-   links
-   registration CTA
-   external LinkedIn links
-   pamphlet link

### Responsive

-   320px+
-   375px
-   768px
-   1024px
-   1440px+
-   large desktop

### Accessibility

-   keyboard navigation
-   focus visibility
-   reduced motion
-   contrast
-   semantic headings
-   labels/ARIA

### Performance

-   Lighthouse
-   bundle analysis
-   image sizes
-   LCP
-   CLS
-   INP

### SEO

-   metadata
-   canonical
-   sitemap
-   robots
-   structured data

------------------------------------------------------------------------

## 20. Definition of done

The first production-ready homepage is complete when:

-   Dark and light themes work.
-   The hero matches the approved visual direction.
-   No hero stats strip is used.
-   The two-day timeline is functional.
-   Highlights are interactive but restrained.
-   Speaker cards are complete with supplied data.
-   Exactly three organizers are displayed.
-   IBM/Qiskit and Qryptex are presented appropriately.
-   Sponsor section is premium and clearly identifies Qryptex as
    official sponsor.
-   CTA leads to `/register`.
-   About and FAQ are near the end.
-   Footer is complete.
-   Mobile layout is deliberately designed.
-   Animations have a clear purpose.
-   Reduced-motion mode works.
-   Build passes.
-   Type checking passes.
-   No unnecessary framework/runtime has been introduced.
-   SEO fundamentals are implemented.
-   No invented event facts are present.
