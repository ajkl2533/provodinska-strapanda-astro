import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
import partytown from '@astrojs/partytown';

export default defineConfig({
  integrations: [
    astroImageTools,
    partytown({
      config: { forward: ['dataLayer.push'] },
    }),
  ],
});
