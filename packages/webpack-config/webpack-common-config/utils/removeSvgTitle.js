module.exports = function removeSvgTitleContent(source) {
  const pattern = /<title>[^<]*<\/title>/g
  return source.replace(pattern, '')
}
