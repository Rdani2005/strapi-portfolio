import { fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import a11y from "eslint-plugin-jsx-a11y";
import jestDom from "eslint-plugin-jest-dom";
import testingLibrary from "eslint-plugin-testing-library";
import vitest from "eslint-plugin-vitest";
import storybook from "eslint-plugin-storybook";

const FILES = ["**/*.{js,cjs,mjs,jsx,ts,tsx}"];
const TEST_FILES = ["**/*.spec.{js,cjs,mjs,jsx,ts,tsx}"];

/** @type {import("eslint").Linter.Config} */
export const React = {
  files: FILES,
  settings: {
    react: {
      version: "^18.2.0",
    },
  },
  ...react.configs.flat.recommended,
};

/** @type {import("eslint").Linter.Config} */
export const ReactHooks = {
  files: FILES,
  plugins: { "react-hooks": fixupPluginRules(hooks) },
  rules: { ...hooks.configs.recommended.rules },
};

/** @type {import("eslint").Linter.Config} */
export const JsxA11y = {
  files: FILES,
  ...a11y.flatConfigs.recommended,
};

/** @type {import("eslint").Linter.Config} */
export const JestDom = {
  files: TEST_FILES,
  ...jestDom.configs["flat/recommended"],
  plugins: { "jest-dom": fixupPluginRules(jestDom) },
};

/** @type {import("eslint").Linter.Config} */
export const TestingLibrary = {
  files: TEST_FILES,
  ...testingLibrary.configs["flat/react"],
  plugins: { "testing-library": fixupPluginRules(testingLibrary) },
};

/** @type {import("eslint").Linter.Config} */
export const Vitest = {
  files: TEST_FILES,
  plugins: { vitest },
  rules: { ...vitest.configs.recommended.rules },
};

/** @type {import("eslint").Linter.Config} */
export const Storybook = {
  files: ["**/*.stories.{js,cjs,mjs,jsx,ts,tsx}"],
  plugins: { storybook: fixupPluginRules(storybook) },
  rules: { ...storybook.configs.recommended.overrides[0].rules },
};
