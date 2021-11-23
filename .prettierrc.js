const prettierConfig = require('@anijs/prettier')

module.exports = {
  ...prettierConfig,
  printWidth: 110,
  overrides: [
    {
      files: ['**/*.yml', '**/*.yaml'],
      options: {
        singleQuote: false
      }
    }
  ]
}
