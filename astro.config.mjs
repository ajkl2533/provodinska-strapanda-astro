import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  scopedStyleStrategy: 'where',
  integrations: [
    astroImageTools,
    partytown({
      config: {
        forward: ['dataLayer.push'],
        lib: '/_partytown/',
      },
    }),
    compress(),
  ],
});
