import type { Plugin } from "esbuild";

// Vite won't transpile external typescript modules, that's why this package uses ES modules instead of TypeScript.
// We need to define the types anyway because the package is being consumed by TypeScript.
//
// See: https://github.com/vitejs/vite/issues/5370

export declare function excludeAllPackagesExceptFromScope(
  scope: string,
): Plugin;
