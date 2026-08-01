import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      // We ship our own base styles in src/styles/global.css
      applyBaseStyles: false,
    }),
  ],
});
