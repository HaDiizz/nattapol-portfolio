import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://HaDiizz.github.io",
  base: "/nattapol-portfolio/",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
