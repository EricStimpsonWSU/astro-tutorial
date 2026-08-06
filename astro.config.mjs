// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import rehypeSlug from 'rehype-slug';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import { remarkAlert } from 'remark-github-blockquote-alert';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://ericstimpsonwsu.github.io',
  trailingSlash: 'never',
  base: '/astro-tutorial/',
  integrations: [mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    sitemap(),
    // pagefind(),
  ],
  markdown: {
    shikiConfig: {
      // remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeSlug, rehypeKatex],
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      defaultColor: false,
      wrap: true,
    },
    // remarkPlugins: [remarkAlert],
    rehypePlugins: [
      rehypeSlug,
      // [
      //   rehypeAutolinkHeadings,
      //   {
      //     behavior: 'append',
      //     properties: { className: ['heading-anchor'], 'aria-label': 'Link to this section' },
      //     content: { type: 'text', value: '#' },
      //   },
      // ],
    ],
  },
});
