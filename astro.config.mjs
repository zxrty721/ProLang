// astro.config.mjs
import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  output: 'static', // ✅ สำคัญสำหรับ GitHub Pages
  site: 'https://Tew0979271981.github.io', // ✅ ใส่ URL ของ GitHub Pages (user.github.io)
  base: '/ProLang/', // ✅ ต้องมี / ข้างหน้าและข้างหลัง
  integrations: [github()],
});
