import kintoneGlobalConfig from "@cybozu/eslint-config/flat/globals/kintone.js";
import presetsTypescriptPrettier from "@cybozu/eslint-config/flat/presets/typescript-prettier.js";
import eslintPluginPackageJson from "eslint-plugin-package-json";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: ["lib", "dist"],
  },
  ...presetsTypescriptPrettier,
  {
    languageOptions: {
      globals: kintoneGlobalConfig,
    },
  },
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    ...eslintPluginPackageJson.configs.recommended,
    rules: {
      ...eslintPluginPackageJson.configs.recommended.rules,
      "@typescript-eslint/consistent-type-imports": "off",
    },
  },
];
