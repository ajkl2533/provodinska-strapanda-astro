import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
// import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel/serverless';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  scopedStyleStrategy: 'where',
  integrations: [
    astroImageTools,
    // partytown({
    //   config: {
    //     forward: ['dataLayer.push'],
    //     lib: '/_partytown/',
    //   },
    // }),
    playformCompress(),
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
