import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://qualitymatterspaintingllc.com/',
  integrations: [tailwind(), mdx(), sitemap(), react(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }),],
  output: "server",
  adapter: netlify({
    edgeMiddleware: true
  })
});