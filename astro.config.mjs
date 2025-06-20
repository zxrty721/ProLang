import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://zxrty721.github.io',
  base: '/ProLang/',
  output: 'static',

  // <<< ตรงนี้ต้องไม่มี assetsPrefix: '/ProLang', แล้ว
  integrations: [
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});