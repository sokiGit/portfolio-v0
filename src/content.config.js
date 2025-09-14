import { z, defineCollection } from "astro:content";

const portfolioCollection = defineCollection({
    schema: z.object({
        title: z.string().max(256),
        date: z.date(),
        categories: z.array(z.string()),
        summary: z.string(),
        image: z.string().optional(),
    })
});

export const collections = {
    portfolio: portfolioCollection,
};