import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // **ต้องเป็นชื่อผู้ใช้ GitHub ของคุณ**
  site: 'https://Tew0979271981.github.io',

  // **ต้องเป็นชื่อ Repository ของคุณ**
  base: '/ProLang',

  integrations: [react()]
});