const hello = require('../src/hello')

test('check null value', () => {
  expect(() => hello(null)).toThrow()
})

test('check text equal', () => {
  let text = 'Santa Claus'
  expect(hello(text)).toEqual(`Hello, ${text}!`)
})
