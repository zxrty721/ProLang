import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://Tew0979271981.github.io',
  base: '/ProLang/',
  output: 'static',
  // <<< ตรงนี้ต้องไม่มี assetsPrefix: '/ProLang', แล้ว
  integrations: [
    react(),
  ],
});