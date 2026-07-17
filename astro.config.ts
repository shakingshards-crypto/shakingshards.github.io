import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  site: 'https://shakingshards.github.io',
  base: '/',

  integrations: [mdx()],

  vite: {
    plugins: [tsconfigPaths()],
  },

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
});
