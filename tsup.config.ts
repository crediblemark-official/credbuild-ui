import { defineConfig } from "tsup";
import type { Options } from "tsup";

const config: Options = {
  entry: ["src/index.ts", "src/sidebar-neat.css"],
  dts: true,
  format: ["cjs", "esm"],
  inject: ["./react-import.js"],
  external: [
    "react",
    "react-dom",
    "next",
    "next/image",
    "next/dynamic",
    "@crediblemark/build",
    "react-hot-toast",
    "@tiptap/starter-kit",
    "@tiptap/core",
    "@tiptap/react",
    "@tiptap/pm",
  ],
  clean: true,
  sourcemap: true,
  minify: false,
};

export default defineConfig(config);
