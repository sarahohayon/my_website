import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://saraorca.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
