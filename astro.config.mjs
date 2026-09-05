import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: process.env.PUBLIC_SITE_URL || 'https://fallfest.qryptex.in',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  }
});
