import { isoDate, pipe, string, transform } from "valibot";

export function formatDate(name: string) {
  return pipe(
    string(`${name} is required`),
    isoDate(`${name} must be a valid date`),
    transform((date) => new Date(date)),
  );
}
