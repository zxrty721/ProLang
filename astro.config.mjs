import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://Tew0979271981.github.io',
  base: '/ProLang',
  output: 'static',
  // assetsPrefix: '/ProLang', // <<< ลบบรรทัดนี้ออกไป!
  integrations: [
    react(),
  ],
}); 