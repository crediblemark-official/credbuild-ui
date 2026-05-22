# @crediblemark/build-ui

The official companion visual blocks library for **Crediblemark**. Packaged with 45+ highly polished, production-ready premium blocks (from business layouts, headers, hero blocks, to grids and custom pricing panels) to speed up your page-building workflow.

[![npm version](https://img.shields.io/npm/v/@crediblemark/build-ui.svg)](https://www.npmjs.com/package/@crediblemark/build-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ⚡ Zero-Config Quick Start (Recommended)

The easiest way to integrate `@crediblemark/build-ui` into a project already using `@crediblemark/build` is by using the intelligent Crediblemark CLI.

Inside your project root, run:
```bash
npx credbuild add build-ui
```

This dynamic command will automatically:
1. Detect your package manager (`bun`, `pnpm`, `yarn`, `npm`) and install `@crediblemark/build-ui`.
2. Find your global CSS file (e.g. `app/globals.css`, `src/index.css`) and prepend the neat sidebar import stylesheet.
3. Automatically generate a ready-to-use `credbuild.config.tsx` with all the companion presets imported.

---

## 🛠️ Manual Installation

If you prefer to configure the blocks manually, follow these three simple steps:

### 1. Install the Package
Add the library as a dependency to your React project:
```bash
bun add @crediblemark/build-ui
# or npm install @crediblemark/build-ui
# or pnpm add @crediblemark/build-ui
```

### 2. Import the Stylesheets
In your main global CSS stylesheet (e.g., `app/globals.css`, `src/index.css`), add the companion stylesheet import statement at the **very top** (before any other rules):
```css
@import "@crediblemark/build-ui/sidebar-neat.css";
```

### 3. Register the Preset in your Config
Import and export `buildUiPreset` inside your editor configuration file `credbuild.config.tsx`:
```tsx
import { buildUiPreset } from "@crediblemark/build-ui";

// Crediblemark Visual Editor Configuration
const config = buildUiPreset;

export default config;
```

---

## 🧩 Mixing Package Blocks & Custom Local Blocks

When you install `@crediblemark/build-ui`, all the 45+ companion blocks are installed inside your project's `node_modules`. This keeps your project's codebase completely clean and allows you to update the companion library effortlessly with a single command (`npm update @crediblemark/build-ui`) whenever new features or bug fixes are released.

If you want to create your own local custom blocks (e.g., in `components/credbuild/`) and mix them with the companion blocks, you can easily combine them inside `credbuild.config.tsx`:

```tsx
import { buildUiPreset } from "@crediblemark/build-ui";
import MyLocalCustomHero from "@/components/credbuild/MyLocalCustomHero";

// Combine companion package blocks with your local custom blocks
const config = {
  ...buildUiPreset,
  components: {
    ...buildUiPreset.components,       // Expose all 45+ package blocks
    "my-local-hero": MyLocalCustomHero // Expose your custom local block
  }
};

export default config;
```

---

## 🎨 Block Library Highlights

`@crediblemark/build-ui` brings highly stylized, beautifully structured vanilla CSS responsive blocks to your visual builder:
- **Modular Sections**: Rich Heading Blocks, Flex Columns, dynamic Container wrappers.
- **Thematic Elements**: Feature Items with customizable icons, grid blocks, pricing models, and customizable buttons.
- **High-Fidelity Animations**: Native support for micro-animations like `fadeIn`, `slideUp`, `zoomIn`, and `slideRight` built directly into the render blocks.
- **Aesthetic Precision**: Tailored to adhere to Crediblemark's signature premium neutral-dark layouts.

---

## 📜 License

MIT © [Rasyiqi Crediblemark](https://github.com/crediblemark-official)
