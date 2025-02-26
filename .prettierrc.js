module.exports = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "^server-only$",

    "<THIRD_PARTY_MODULES>",

    "^@shadcn-ui/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/modules/(.*)$",
    "^@/components/(.*)$",
    "^@/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/utils/(.*)$",
    "^@/types/(.*)$",
    "<INTERNAL_MODULES>",
    "^[./]",
    "^[../]",
    "^(?!.*[.]css$)[./].*$",
    ".css$",
    ".css$",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  importOrderCaseSensitive: false,
  importOrderSeparation: true,
};
