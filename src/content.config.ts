import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.enum([
      'blog', 'formation', 'tutorial', 'astro', 'meta', 'learning in public', 'successes', 'setbacks', 'community'
    ])).default(['blog']),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };