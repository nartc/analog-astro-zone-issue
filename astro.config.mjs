import { defineConfig } from 'astro/config';
import analogjsangular from "@analogjs/astro-angular";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [analogjsangular(), mdx()]
});