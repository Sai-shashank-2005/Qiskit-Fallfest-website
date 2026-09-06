# Qiskit Fall Fest 2026 --- AGY Build Instructions

## 1. Project mission

Build a premium, production-ready event website for **Qiskit Fall Fest
2026 at Bharathidasan University**.

The website is primarily responsible for:

-   Presenting the event clearly.
-   Helping visitors understand why they should attend.
-   Showing the complete two-day session experience.
-   Presenting speakers and organizers professionally.
-   Providing event information and downloadable event material.
-   Driving users to registration.
-   Providing FAQ and About information.
-   Giving IBM Quantum/Qiskit and Qryptex appropriate sponsor/partner
    visibility.
-   Delivering a cinematic, interactive experience without sacrificing
    usability, accessibility, SEO, or performance.

The design reference image supplied in the repository is the visual
source of truth for the overall composition and style. Do not copy every
pixel literally; reproduce its visual language, hierarchy, spacing,
interactions, and premium feel.

------------------------------------------------------------------------

## 2. Non-negotiable design principles

### Premium, not generic

Avoid the appearance of a typical college technical-fest website.

Do not use: - Generic neon cyberpunk styling. - Excessive
glassmorphism. - Random floating particles. - Excessive gradients. -
Decorative animation with no purpose. - Huge amounts of text in cards. -
Unnecessary 3D/WebGL everywhere.

The visual direction is:

**IBM Quantum × Qiskit × premium editorial technology conference ×
Bharathidasan University**

### Animation rule

Every animation must have a purpose.

Animation may: 1. Explain a concept. 2. Show state/change. 3. Guide
attention. 4. Give interaction feedback. 5. Create a meaningful
transition between sections.

If an animation only exists to look impressive, remove it.

### Information remains usable without animation

The website must still make complete sense when: -
`prefers-reduced-motion` is enabled. - JavaScript is unavailable for
non-essential interactions. - The visitor uses a low-powered/mobile
device.

Content must never depend on animation.

------------------------------------------------------------------------

## 3. Technology constraints

Use:

-   **Astro**
-   **TypeScript**
-   **Tailwind CSS**
-   Astro components for static UI.
-   Small client-side islands only where interaction is required.
-   Semantic HTML.
-   CSS variables for the theme system.
-   SVG/CSS/Canvas for lightweight quantum visuals where appropriate.

Do not convert the entire website into a React SPA.

Do not introduce a large JavaScript framework unless there is a concrete
requirement.

Prefer Astro's static rendering and partial hydration.

The eventual deployment target is **Cloudflare**. Keep the project
compatible with Cloudflare deployment and avoid architecture that
assumes a Node-only runtime.

------------------------------------------------------------------------

## 4. Visual themes

Implement exactly two visual themes:

### Dark theme

Primary direction: - Deep midnight/navy background. - Black/deep-blue
surfaces. - Qiskit pink as the primary accent. - Violet/purple as the
quantum accent. - Lavender as a secondary glow. - White/off-white
typography. - Thin luminous circuit lines. - Controlled glow and depth.

### Light theme

Primary direction: - Very light cool/off-white background. - White
surfaces. - Dark typography. - Pink as the primary accent. -
Lavender/purple as secondary accents. - Very subtle shadows. - Thin
pastel quantum/circuit lines. - Soft rather than glowing visuals.

Both themes must contain the same information architecture.

Do not design two unrelated websites.

The theme switch should feel like a state change of the same system.

Persist the selected theme with `localStorage`, while respecting the
user's system preference on first visit.

Avoid flash-of-incorrect-theme during initial page load.

------------------------------------------------------------------------

## 5. Brand hierarchy and IBM/Qiskit branding rules

Use the **supplied official event/brand assets** whenever available. The
branding reference supplied for this project is authoritative for what may
and may not be displayed.

The event identity remains dominant.

Recommended hierarchy:

1. **Qiskit Fall Fest 2026**
2. **Bharathidasan University**
3. **IBM Quantum / Qiskit** — using approved event assets
4. **Qryptex — Official Sponsor**

### Critical IBM branding restriction

The supplied branding guidance explicitly distinguishes between approved
**IBM Quantum / Qiskit event assets** and the standalone **IBM master-brand
logo**.

#### Allowed, subject to event-staff approval

The supplied branding reference indicates that the following may be used:

- The **IBM Quantum** wordmark/lockup supplied for the event.
- The supplied **Qiskit globe/circuit mark**.
- Approved Qiskit Fall Fest artwork/assets.
- Approved IBM Quantum/Qiskit imagery used without editing, modifying,
  redrawing, or altering the marks.

These assets may be used only in their approved form and, where required,
after event-staff approval.

#### NOT allowed

**Do not use the standalone IBM master-brand logo.**

The supplied branding guidance states that using the standalone IBM logo
requires a contract that is not provided for this event.

Therefore:

- Do not place the standalone IBM striped logo in the navbar.
- Do not place it in the hero.
- Do not place it in the footer.
- Do not use it in the sponsor/collaboration section.
- Do not recreate it with text or CSS.
- Do not generate a modified version of it.
- Do not use an AI-generated approximation of it.

If an asset visually resembles the standalone IBM logo but is not explicitly
supplied/approved, treat it as **not approved**.

### Qiskit / event mark rules

- Do not alter the supplied Qiskit mark.
- Do not stretch, distort, recolor, redraw, or deconstruct the official mark.
- Do not create a new logo by combining Qiskit with BDU or Qryptex.
- Do not make a custom "Qiskit Fall Fest BDU" logo unless the event team
  explicitly provides/approves one.
- Preserve sufficient clear space around official marks.
- Maintain readable contrast in both themes.
- Use supplied official artwork rather than approximating the identity with
  generic quantum graphics.

### Sponsor hierarchy

Qryptex is the **official sponsor** for this website/event presentation.

Qryptex should receive strong, premium visibility in the dedicated sponsor
section, but it must not appear to own, operate, or officially represent
IBM/Qiskit.

The sponsor presentation should communicate a relationship such as:

**Qiskit Fall Fest 2026**  
**Bharathidasan University**  
**Official Sponsor — Qryptex**

Do not describe Qryptex as an IBM partner, IBM sponsor, IBM representative,
or IBM affiliate unless explicit written authorization/content is supplied.

### Implementation rule

Create a centralized brand-assets layer, for example:

`public/brand/qiskit/`  
`public/brand/ibm-quantum/`  
`public/brand/bdu/`  
`public/brand/qryptex/`

Keep approved assets separate from decorative/generated graphics.

Never recreate official logos using CSS/text if an official asset is available.

---

## 6. Supplied design reference

The repository will contain the supplied design reference image.

Expected asset name:

`design-reference.png`

Use it as the primary visual reference while implementing.

The implementation should preserve: - Long-form editorial layout. -
Strong hero. - Dark/light parity. - Quantum-inspired hero object. -
Pink/purple accent system. - Spacious sections. - Strong standalone
section transitions. - Premium cards. - Timeline. - Speaker cards. -
Organizer row. - Sponsor section. - Final CTA. - About. - FAQ. - Footer.

The exact event data, speaker information, dates, links, statistics, and
copy must come from project-provided content. Never invent real event
details.

------------------------------------------------------------------------

# 7. Home page architecture

The homepage should be a long-form immersive page.

Recommended order:

## Section 01 --- Navigation

Desktop: - Qiskit Fall Fest identity/logo. - Home - Events /
Highlights - Schedule - Speakers - About - FAQ - Register

Right side: - Theme toggle. - Register CTA.

Mobile: - Compact brand. - Theme toggle. - Menu button. - Register CTA
if space permits.

Navbar should become visually lighter/compact while scrolling.

------------------------------------------------------------------------

## Section 02 --- Hero

Primary message:

**A decade of quantum on the cloud.**

Supporting: - Qiskit Fall Fest 2026. - Bharathidasan University. -
Official event designation. - Actual event dates once confirmed. -
Location once confirmed.

Primary CTA: **Register Now**

Secondary CTA: **Explore Event**

Hero visual: - Qiskit Fall Fest badge. - Quantum orbital/circuit
environment. - Hummingbird artwork where appropriate. - Subtle 3D/depth
treatment.

The hero should immediately communicate: **what / where / when / why**.

Do not hide critical event information inside animation.

------------------------------------------------------------------------

## Section 03 --- Why Fall Fest?

This should be a visually distinct standalone section.

Use two major content blocks:

### Event Pamphlet

Provide a clear CTA to open/download the official event pamphlet.

### Event Details

Explain what attendees will experience.

If the final copy supports it, emphasize: - learning, - hands-on work, -
quantum computing, - Qiskit, - talks, - collaboration, - practical
exploration.

Use quantum visuals as explanatory illustrations rather than decoration.

------------------------------------------------------------------------

## Section 04 --- Session Timeline

The event is **two days**.

Do not use a three-day structure.

Use: - Day 1 - Day 2

Interactive timeline: - Select day. - Highlight active session. - Show
time. - Show session title. - Show session type. - Optional speaker/room
when confirmed.

Desktop: - Horizontal/connected timeline where readable.

Mobile: - Vertical timeline.

The timeline animation should communicate progression through the event.

------------------------------------------------------------------------

## Section 05 --- Event Highlights

Show the major experience categories.

Potential categories, subject to final event confirmation: - Hands-on
Workshops - Expert Talks - Challenges / Hackathon - Networking -
Prizes - Certificates

Do not invent categories if the final event plan differs.

Each highlight should have: - concise label, - short explanation, -
meaningful icon/quantum visual.

Interaction: - subtle hover depth, - icon/state transition, - no
excessive card movement.

------------------------------------------------------------------------

## Section 06 --- Speakers

Speaker cards should include: - portrait, - name, - designation, -
organization, - topic if confirmed, - LinkedIn link if provided.

Design: - editorial rather than generic SaaS cards. - image quality
should be consistent. - LinkedIn icon/link should be accessible.

Hover may reveal additional information.

Do not invent speaker identities or credentials.

------------------------------------------------------------------------

## Section 07 --- Organizers

Exactly three organizer profiles.

Display: - photo, - name, - role, - LinkedIn link if provided.

Keep this section simpler than speakers.

The purpose is to establish the human team behind the event.

------------------------------------------------------------------------

## Section 08 --- Sponsor / Collaboration section

This section is important.

Primary sponsor: **Qryptex**

IBM Quantum/Qiskit should be represented according to the approved
event/brand relationship and supplied assets.

Use a premium "ecosystem" presentation rather than a generic sponsor
grid.

Suggested visual structure:

**Technology / Quantum Ecosystem**

\[ IBM Quantum / Qiskit \] × \[ Qryptex \]

Then: - short sponsor statement, - Qryptex logo, - link to Qryptex, -
optional sponsor description.

Do not place unrelated sponsor logos.

Do not invent sponsorship levels.

------------------------------------------------------------------------

## Section 09 --- Final registration CTA

Large, visually quiet but powerful CTA.

Example conceptual direction:

**Ready to explore quantum?**

Short supporting sentence.

**Register Now**

Use a quantum object that subtly resolves toward the CTA.

This is one of the few places where a stronger cinematic transition is
justified.

------------------------------------------------------------------------

## Section 10 --- About

Short, authoritative event description.

Could include: - what Qiskit Fall Fest is, - why the BDU event exists, -
the learning/community purpose.

Do not duplicate the entire hero or Why section.

------------------------------------------------------------------------

## Section 11 --- FAQ

Keep FAQ near the end.

Accordion questions should answer practical concerns.

Potential questions: - Who can attend? - Is prior quantum knowledge
required? - Is registration free? - What should participants bring? -
Will certificates be provided? - Where is the event? - What are the
workshop prerequisites?

Only publish confirmed answers.

FAQ interactions should be fast and accessible.

------------------------------------------------------------------------

## Section 12 --- Footer

Include: - Qiskit Fall Fest 2026 identity. - Bharathidasan University. -
Navigation. - Schedule. - Speakers. - About. - FAQ. - Contact. - Social
links when supplied. - IBM/Qiskit relationship/asset as appropriate. -
Qryptex official sponsor treatment. - Privacy/terms if required. -
Copyright.

------------------------------------------------------------------------

# 8. Separate registration page

Registration is intentionally separate from the cinematic homepage.

Route:

`/register`

The registration page should prioritize: - clarity, - speed, -
accessibility, - mobile usability, - validation, - clear success/error
states.

Do not use heavy 3D effects on the form.

A subtle quantum visual is acceptable, but the form must remain the
dominant element.

------------------------------------------------------------------------

# 9. Future supporting pages

Keep the architecture extensible for:

-   `/schedule`
-   `/speakers`
-   `/about`
-   `/faq`

Do not build unnecessary pages until their content is confirmed.

The homepage may link to them later.

------------------------------------------------------------------------

# 10. Meaningful interactive quantum elements

Use a small number of signature elements consistently.

### Quantum Orbital

Represents the quantum environment/event ecosystem.

Possible use: - hero, - transition, - CTA.

Interaction: - subtle cursor/parallax response.

### Qubit Lattice

Represents connected computation.

Possible use: - Event Details, - highlights, - sponsor area.

Interaction: - nodes respond to hover/selection.

### Quantum Circuit

Represents learning/building.

Possible use: - loading, - timeline, - workshop section.

Interaction: - gates activate as the user progresses.

### Timeline Connector

Represents event progression.

Interaction: - active session illuminates the path.

### Magnetic CTA

Buttons can have very subtle attraction toward the pointer.

Must have a non-motion fallback.

### Parallax Layers

Use at most a few layers in major hero/CTA visuals.

Never use parallax for essential text.

### Theme Transition

Light ↔ Dark should transition as a visual state change.

Avoid a hard page refresh.

------------------------------------------------------------------------

# 11. Loading experience

A loading screen is allowed, but it must never make the website feel
slow.

Recommended maximum intentional delay: - do not artificially delay the
page for cinematic effect. - if the page is already ready, enter
immediately.

Concept: **Quantum initialization**

A small circuit assembles while assets initialize.

Then: `SYSTEM READY`

The animation should be skippable and respect `prefers-reduced-motion`.

Returning visitors may receive a shorter/no loading sequence.

------------------------------------------------------------------------

# 12. Scroll behavior

Each major section should feel like a distinct "scene".

Desired feeling:

Hero → transition → Why Fall Fest → transition → Timeline → transition →
Highlights → transition → Speakers → transition → Organizers → Sponsors
→ CTA → About → FAQ → Footer

Use: - intersection-based reveals, - subtle transforms, - opacity, -
clipping/masking, - SVG path drawing, - controlled parallax.

Avoid: - scroll-jacking, - forced horizontal scroll, - long pinned
sections that trap the user, - excessive blur, - animations that block
reading.

------------------------------------------------------------------------

# 13. Accessibility

Must support: - semantic landmarks, - keyboard navigation, - visible
focus states, - accessible buttons, - accessible accordions, -
sufficient color contrast, - reduced motion, - alt text, - form
labels, - screen-reader-friendly navigation.

Do not communicate information only through color.

Theme switching must be keyboard accessible.

------------------------------------------------------------------------

# 14. Performance requirements

Performance is a first-class feature.

Target: - Excellent Lighthouse performance. - Fast first contentful
paint. - LCP target under approximately 2.5s on a reasonable mobile
connection. - Minimal client-side JavaScript. - Avoid unnecessary
hydration.

Rules: - Use AVIF/WebP where appropriate. - Use responsive image
sizes. - Lazy-load below-the-fold images. - Preload only genuinely
critical assets. - Prefer SVG for logos/icons. - Avoid huge video
backgrounds. - Avoid loading 3D libraries globally. - Load heavy
interactive visualizations only where required. - Use Astro islands
selectively. - Use `content-visibility`/containment where beneficial
after testing. - Avoid layout shifts.

Do not sacrifice performance for animation.

------------------------------------------------------------------------

# 15. SEO

The site must be SEO-ready from the beginning.

Implement: - unique `<title>` per page, - meta description, - canonical
URLs, - Open Graph metadata, - Twitter/X card metadata, - semantic
headings, - structured internal linking, - sitemap, - robots.txt, -
favicon/app icons, - Organization/Event structured data where
accurate, - proper image alt text.

Do not invent dates, addresses, speakers, or event facts for structured
data.

The eventual production domain/subdomain should be configurable through
environment/site configuration rather than hardcoded throughout the
project.

------------------------------------------------------------------------

# 16. Content architecture

Do not hardcode event data inside large page components.

Create structured data files/content collections for: - event
metadata, - sessions, - speakers, - organizers, - FAQs, - highlights.

Example conceptual structure:

`src/data/event.ts` `src/data/sessions.ts` `src/data/speakers.ts`
`src/data/organizers.ts` `src/data/faqs.ts` `src/data/highlights.ts`

This allows content to change without rewriting UI.

------------------------------------------------------------------------

# 17. Component architecture

Prefer reusable Astro components.

Suggested components:

`Navbar.astro` `ThemeToggle.astro` `Hero.astro` `QuantumOrbital.astro`
`EventStats.astro` --- only if later approved; currently do NOT place
the removed stats strip below hero. `WhyFallFest.astro`
`PamphletCard.astro` `EventDetailsCard.astro` `SessionTimeline.astro`
`HighlightGrid.astro` `SpeakerCard.astro` `SpeakersSection.astro`
`OrganizerCard.astro` `OrganizersSection.astro` `SponsorSection.astro`
`RegistrationCTA.astro` `AboutSection.astro` `FAQAccordion.astro`
`Footer.astro`

Interactive components should be isolated.

------------------------------------------------------------------------

# 18. Recommended repository structure

``` text
qiskit-fall-fest/
├── public/
│   ├── brand/
│   │   ├── qiskit/
│   │   ├── ibm/
│   │   ├── bdu/
│   │   └── qryptex/
│   ├── event/
│   │   ├── pamphlet/
│   │   └── imagery/
│   ├── speakers/
│   ├── organizers/
│   ├── quantum/
│   └── design-reference.png
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── hero/
│   │   ├── event/
│   │   ├── timeline/
│   │   ├── speakers/
│   │   ├── organizers/
│   │   ├── sponsors/
│   │   ├── about/
│   │   ├── faq/
│   │   ├── quantum/
│   │   └── ui/
│   │
│   ├── data/
│   │   ├── event.ts
│   │   ├── sessions.ts
│   │   ├── speakers.ts
│   │   ├── organizers.ts
│   │   ├── highlights.ts
│   │   └── faqs.ts
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── register.astro
│   │   ├── schedule.astro
│   │   ├── speakers.astro
│   │   ├── about.astro
│   │   └── faq.astro
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── tokens.css
│   │   └── animations.css
│   │
│   └── lib/
│       ├── theme.ts
│       ├── motion.ts
│       └── utils.ts
│
├── astro.config.mjs
├── tsconfig.json
├── tailwind.config.*
├── package.json
├── instruction.md
├── architecture.md
└── README.md
```

Adjust the exact Astro/Tailwind file layout to the current versions of
the installed tooling.

------------------------------------------------------------------------

# 19. Development sequence

Build in this order:

### Phase 1 --- Foundation

-   Astro project.
-   TypeScript.
-   Tailwind.
-   Global tokens.
-   Fonts.
-   Theme system.
-   Base layout.
-   SEO foundation.

### Phase 2 --- Brand

-   Import official logos/assets.
-   Create brand-safe logo placements.
-   Establish dark/light visual tokens.

### Phase 3 --- Core page

-   Navbar.
-   Hero.
-   Why Fall Fest.
-   Timeline.
-   Highlights.
-   Speakers.
-   Organizers.
-   Sponsors.
-   CTA.
-   About.
-   FAQ.
-   Footer.

### Phase 4 --- Interaction

-   Theme switch.
-   Timeline interaction.
-   Scroll reveals.
-   Quantum visual interactions.
-   Meaningful hover states.

### Phase 5 --- Mobile

-   Redesign interaction density for mobile.
-   Test navigation.
-   Test timeline.
-   Test cards.
-   Test forms.

### Phase 6 --- Performance/SEO

-   Image optimization.
-   JS audit.
-   Lighthouse.
-   accessibility audit.
-   metadata.
-   structured data.
-   sitemap.

### Phase 7 --- Deployment preparation

-   Cloudflare-compatible build.
-   Production environment configuration.
-   Domain/subdomain configuration.
-   Final smoke test.

------------------------------------------------------------------------

# 20. AGY implementation behavior

When using an AI coding agent/AGY:

1.  Read `instruction.md` and `architecture.md` before modifying code.
2.  Inspect the design reference image.
3.  Inspect all supplied brand assets before creating replacements.
4.  Do not invent missing content.
5.  Use placeholders clearly marked as `TODO` when information is not
    yet provided.
6.  Build reusable components rather than duplicated markup.
7.  Keep interactions progressive and lightweight.
8.  Verify mobile and desktop after each major section.
9.  Do not add libraries unless they solve a real requirement.
10. Before finishing a task, run:

-   type checking,
-   build,
-   lint if configured,
-   accessibility checks where available.

11. Do not claim an implementation is complete if the build fails.
12. Never remove supplied assets or overwrite official logos.
13. Keep design tokens centralized.
14. Keep event content centralized in data files.
15. Treat the supplied design image as a visual reference, not as a
    source of factual event data.

------------------------------------------------------------------------

# 21. Quality bar

The finished website should feel like:

**a professional international quantum-computing event**

rather than:

**a university event template with quantum graphics.**

The visitor journey should be:

**Recognize → Understand → Explore → Trust → Register**

The visual journey should be:

**Quantum environment → Event story → Two-day experience → People →
Ecosystem → Registration**

The technical journey should be:

**Static-first Astro → selective interactivity → optimized assets →
accessible experience → Cloudflare deployment.**
