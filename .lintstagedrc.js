// { "*.{json,md,yml,css,js,ts}": ["eslint --fix", "prettier --write"] }

module.exports = {
  '*.{json,md,yml,css,js,ts}': filenames =>
    filenames.map(filename => {
      console.log(filename)
      return ''
    })
}
