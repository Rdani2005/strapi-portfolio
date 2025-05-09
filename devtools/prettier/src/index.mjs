/** @type {import("prettier").Config} */
export default {
  // To avoid issues with other plugins, prettier-plugin-tailwindcss must be the last declared plugin.
  // See https://github.com/tailwindlabs/prettier-plugin-tailwindcss/tree/1fa24c2d33f17c9729e3f4a2018518a55699969d?tab=readme-ov-file#compatibility-with-other-prettier-plugins
  plugins: ["prettier-plugin-tailwindcss"],
  // Functions found under @tokyo/ui/css.
  tailwindFunctions: ["css", "cn"],
  tailwindPreserveWhitespace: true,
};
