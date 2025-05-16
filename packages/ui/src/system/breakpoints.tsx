import { UnionTypeFromArray } from "@strapi-portfolio/core";

/**
 * Names of the available breakpoints.
 * @see {@link Breakpoint}
 */
export const BreakpointNames = ["tablet", "laptop", "desktop"] as const;

/**
 * Breakpoint that targets a specific device based on its width, used for responsive design.
 */
export type Breakpoint = UnionTypeFromArray<typeof BreakpointNames>;

/**
 * Map with the available breakpoints.
 * @remarks The value corresponds to the breakpoint name. If you want the breakpoint value use {@link BreakpointValues} instead.
 */
export const Breakpoint = {
  tablet: "tablet",
  laptop: "laptop",
  desktop: "desktop",
} as const;

/**
 * Map with the breakpoint values.
 * @remarks The value corresponds to the breakpoint width value. If you want the breakpoint name use {@link Breakpoint} instead.
 */
export const BreakpointValues = {
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  wide: 1536,
} as const;
