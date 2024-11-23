module.exports = {
  // Use parentheses only when necessary for single-argument arrow functions
  arrowParens: 'avoid',

  // Place the closing bracket of JSX tags on the same line as the last prop
  bracketSameLine: true,

  // Disable spaces between brackets in object literals
  bracketSpacing: false,

  // Use single quotes instead of double quotes for consistency
  singleQuote: true,

  // Add trailing commas wherever possible (e.g., in objects, arrays, etc.)
  trailingComma: 'all',

  // Specify the line length that Prettier will wrap on
  printWidth: 80,

  // Use 2 spaces for indentation
  tabWidth: 2,

  // Use spaces instead of tabs for indentation
  useTabs: false,

  // Ensure that files end with a newline
  endOfLine: 'lf',

  // Automatically format embedded languages like HTML or CSS within JS files
  embeddedLanguageFormatting: 'auto',

  // Sort and format imports for cleaner code
  importOrder: ['^react', '^@', '^[./]'],
  importOrderSeparation: true,
};
