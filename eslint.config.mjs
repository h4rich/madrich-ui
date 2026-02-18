import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginTailwindCSS from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...eslintPluginTailwindCSS.configs["flat/recommended"],
  {
    plugins: ["prettier-plugin-tailwindcss"],
    rules: {
      "tailwindcss/classnames-order": "error",
    },
  },
];

export default eslintConfig;
