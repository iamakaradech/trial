module.exports = (text) => {
  if (!text) {
    throw new Error('Wrong text format')
  }

  return `Hello, ${text.toString()}!`
}
