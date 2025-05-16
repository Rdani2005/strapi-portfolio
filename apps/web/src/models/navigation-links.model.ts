import { InferOutput, object, string } from "valibot";

export const NavigationLink = object({
  path: string(),
  name: string(),
});

export type NavigationLink = InferOutput<typeof NavigationLink>;
