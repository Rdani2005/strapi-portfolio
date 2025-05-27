import { InferOutput, object, pipe, string, url } from "valibot";

export const Review = object({
  avatar: pipe(string(), url()),
  name: string(),
  jobTitle: string(),
  review: string(),
});

export type Review = InferOutput<typeof Review>;
