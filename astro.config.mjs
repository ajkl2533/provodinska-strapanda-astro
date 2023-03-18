import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
import partytown from '@astrojs/partytown';
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  integrations: [astroImageTools, partytown({
    config: {
      forward: ['dataLayer.push']
    }
  }), critters()]
});