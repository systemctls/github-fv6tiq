import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: "standalone"
  }),
  site: 'http://xxx.xxx.xx.xxx:3000',
  integrations: [mdx(), sitemap()]
});