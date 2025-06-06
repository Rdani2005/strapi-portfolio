import unjs from "eslint-config-unjs";
import * as Configs from "./configs.mjs";

export default unjs(
  {
    ignores: [
      "**/build",
      "**/dist",
      "**/node_modules",
      "**/public",
      "**/.next",
      "**/out",
      "**/apps/api",
    ],
  },
  Configs.React,
  Configs.ReactHooks,
  Configs.JsxA11y,
  Configs.JestDom,
  Configs.TestingLibrary,
  Configs.Vitest,
  Configs.Storybook,
  {
    // Rule overrides
    rules: {
      curly: "off",
      "no-undef": "off",
      "multiline-ternary": "off",
      "unicorn/no-null": "off",
      "unicorn/no-for-loop": "off",
      "unicorn/prefer-export-from": "off",
      "unicorn/no-array-callback-reference": "off",
      "react/no-unknown-property": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "quote-props": ["error", "as-needed", { numbers: true }],
      "no-restricted-imports": [
        "error",
        {
          name: "next/link",
          message:
            "Use `@strapi-portfolio/web/i18n/navigation` instead for better i18n support.",
          importNames: ["default"],
        },
        {
          name: "next/navigation",
          message:
            "Use `@strapi-portfolio/web/i18n/navigation` instead for better i18n support.",
          importNames: [
            "redirect",
            "permanentRedirect",
            "useRouter",
            "usePathname",
          ],
        },
      ],
    },
  },
  {
    // Disable file name case rule for Remix routes
    // the rule gets in the way of the route naming convention of Remix.
    files: ["apps/*/src/routes/**/*.tsx"],
    rules: {
      "unicorn/filename-case": "off",
    },
  },
);
