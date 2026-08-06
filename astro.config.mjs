import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  site: "https://ericstimpsonwsu.github.io",
  base: "/astro-tutorial/",
  trailingSlash: "never",

  integrations: [
    mdx(),
    sitemap(),
  ],

  markdown: {
    // ⭐ Your unified processor (math + katex + slug)
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeSlug, rehypeKatex],
    }),

    // ⭐ The correct way to enable syntax highlighting
    syntaxHighlight: "shiki",   // ← THIS restores highlighting

    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark-dimmed",
      },
      wrap: true,
    },
  },
});
