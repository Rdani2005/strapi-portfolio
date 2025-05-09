/** @type {Set<import("esbuild").ImportKind>} */
const JS_IMPORT_KINDS = new Set([
  "import-statement",
  "dynamic-import",
  "require-call",
  "require-resolve",
]);

/**
 * @param {import("esbuild").ImportKind} kind
 * @returns {boolean}
 */
function isImportStatement(kind) {
  return JS_IMPORT_KINDS.has(kind);
}

/**
 * @param {string} path
 * @param {string} scope
 * @returns {boolean}
 */
function isMonorepoImport(path, scope) {
  return path[0] === "." || path.startsWith(scope);
}

/**
 * @param {import("esbuild").OnResolveArgs} args
 * @param {string} scope
 * @returns {boolean}
 */
function shouldIncludeInBundle(args, scope) {
  return !isImportStatement(args.kind) || isMonorepoImport(args.path, scope);
}

/**
 * @param {string} candidate
 * @returns {string}
 */
function canonizeScope(candidate) {
  let scope = candidate;
  if (!scope.startsWith("@")) scope = `@${scope}`;
  if (!scope.endsWith("/")) scope = `${scope}/`;
  return scope;
}

/**
 * @param {string} target
 * @returns {import("esbuild").Plugin}
 */
export function excludeAllPackagesExceptFromScope(target) {
  const scope = canonizeScope(target);
  return {
    name: "monorepo-no-external-plugin",
    setup(build) {
      build.onResolve({ filter: /(.*)/ }, (args) => {
        if (shouldIncludeInBundle(args, scope)) return;
        return { path: args.path, external: true };
      });
    },
  };
}
