import { InferOutput, object, string } from "valibot";

const WithTitle = object({
  title: string(),
});

type WithTitle = InferOutput<typeof WithTitle>;

export function filterByTitle<T extends WithTitle>(
  items: T[],
  title: string,
): T | undefined {
  return items.find((item) => item.title === title);
}
