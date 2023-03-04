import { defineConfig } from 'astro-imagetools/config';

export default defineConfig({
  preload: 'webp',
  loading: 'lazy',
  decoding: 'async',
});
