import { z, defineCollection } from 'astro:content';

const historyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    overline: z.string(),
    image: z.object({
      name: z.string(),
      alt: z.string(),
    }),
  }),
});
const tracksCollection = defineCollection({
  schema: z.object({
    length: z.number(),
    type: z.enum(['hike', 'bike']),
    map: z.string().url().optional(),
  }),
});
const sectionsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  history: historyCollection,
  tracks: tracksCollection,
  sections: sectionsCollection,
};
