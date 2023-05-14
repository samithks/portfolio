/** @type {import('@ianvs/prettier-plugin-sort-imports').PrettierConfig} */
module.exports = {
  plugins: ['prettier-plugin-jsdoc', '@ianvs/prettier-plugin-sort-imports' /* 'prettier-plugin-tailwindcss' */],
  importOrder: [
    '<TYPES>',
    '<TYPES>^[./]',
    '<THIRD_PARTY_MODULES>',
    '^(next/(.*)$)|^(next$)',
    '^@/components/(.*)$',
    '^[./]',
  ],
  importOrderBuiltinModulesToTop: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderMergeDuplicateImports: true,
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  printWidth: 120,
  endOfLine: 'auto',
  useTabs: false,
  pluginSearchDirs: false,
}
