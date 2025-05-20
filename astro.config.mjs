import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import minify from 'astro-minify-html-swc'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), minify()],
  outDir: './harlow',
  build: {
    assetsPrefix: '/harlow'
  },
});