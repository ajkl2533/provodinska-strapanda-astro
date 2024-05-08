import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  scopedStyleStrategy: 'where',
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
        lib: '/_partytown/',
      },
    }),
  ],
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
