import { defineConfig, globalIgnores } from "eslint/config";
const nextVitals = (await import("eslint-config-next/core-web-vitals.js")).default;
const nextTs = (await import("eslint-config-next/typescript.js")).default;

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
