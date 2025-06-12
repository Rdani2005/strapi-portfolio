import { date, InferOutput, number, object, string } from "valibot";

export const HeroItem = object({
  title: string(),
  jobTitle: string(),
  startDate: date(),
  totalClients: number(),
  description: string(),
  heroImage: string(),
  totalProjects: number(),
});

export type HeroItem = InferOutput<typeof HeroItem>;
