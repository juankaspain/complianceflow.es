module.exports = {
  // TypeScript and JavaScript files
  '*.{ts,tsx,js,jsx}': [
    'eslint --fix',
    'prettier --write',
    () => 'tsc --noEmit', // Type check
  ],
  
  // CSS and style files
  '*.{css,scss,sass}': ['prettier --write'],
  
  // JSON, Markdown, YAML files
  '*.{json,md,yml,yaml}': ['prettier --write'],
  
  // Run tests for changed files
  '*.{ts,tsx}': ['vitest related --run'],
};