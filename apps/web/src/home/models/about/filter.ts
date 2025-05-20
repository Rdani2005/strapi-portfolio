type WithTitle = { title: string };

export function filterByTitle<T extends WithTitle>(
  items: T[],
  title: string,
): T | undefined {
  return items.find((item) => item.title === title);
}
