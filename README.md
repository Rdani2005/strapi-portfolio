# @strapi-portfolio Monorepo

![Node.js](https://img.shields.io/badge/node-%3E=18.x-blue?logo=node.js)
![pnpm](https://img.shields.io/badge/built%20with-pnpm-orange?logo=pnpm)
![ESLint](https://img.shields.io/badge/code%20style-eslint-4B32C3?logo=eslint)
![Prettier](https://img.shields.io/badge/formatter-prettier-F7B93E?logo=prettier)
![License](https://img.shields.io/badge/license-MIT-green)

This is a monorepo managed with [pnpm](https://pnpm.io/) that includes a headless CMS powered by Strapi and a frontend application built with Next.js. The structure supports scalable development using reusable packages and shared tooling.

## 🧰 Tooling

- **Monorepo manager**: [pnpm Workspaces](https://pnpm.io/workspaces)
- **Frontend**: [Next.js](https://nextjs.org/)
- **CMS**: [Strapi](https://strapi.io/)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)
- **Git hooks**: [Husky](https://typicode.github.io/husky/)
- **Pre-commit checks**: [lint-staged](https://github.com/okonet/lint-staged)

---

## 🚀 Available Scripts

From the root of the monorepo, you can run:

| Command        | Description                               |
| -------------- | ----------------------------------------- |
| `pnpm install` | Install all workspace dependencies        |
| `pnpm dev`     | Start dev mode (run this inside each app) |
| `pnpm format`  | Format code using Prettier                |
| `pnpm lint`    | Run ESLint (fails on warnings or errors)  |
| `pnpm prepare` | Initialize Husky for Git hooks            |

---

## ✅ Linting & Formatting Rules

- `ESLint` and `Prettier` are integrated.
- The following file types are automatically checked and formatted on commit:
  - JavaScript, TypeScript, JSX, TSX: `*.{js,cjs,mjs,ts,jsx,tsx}`
  - JSON, Markdown, CSS: `*.{json,md,css}`

These checks are powered by `lint-staged` and enforced via Husky Git hooks.

---

## 📦 Package Publishing

The packages inside `packages/` are internal by default, but can be configured for external publishing if needed.

---

## 📄 License

[MIT](LICENSE) © [Rdani2005](https://rdani2005.com)
