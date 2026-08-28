// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dgkeyes.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
