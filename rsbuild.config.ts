import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  plugins: [pluginReact(), pluginTypeCheck()],
  source: {
    entry: {
      desktop: { import: "./src/desktop/index.ts", html: false },
      mobile: { import: "./src/mobile/index.ts", html: false },
      config: { import: "./src/config/index.tsx", html: false },
    },
  },
  performance: {
    chunkSplit: { strategy: "all-in-one" },
  },
  output: {
    distPath: {
      root: "lib",
      html: "./",
      js: "js",
      jsAsync: "js",
      css: "css",
      cssAsync: "css",
      svg: "svg",
      font: "font",
      wasm: "wasm",
      image: "image",
      media: "media",
      assets: "assets",
    },
    dataUriLimit: Number.MAX_SAFE_INTEGER,
    filenameHash: false,
  },
});
