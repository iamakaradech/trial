const generateLotto = require('../src/generate-lotto')

test('send right format lotto number', () => {
  generateLotto('221231').then((lotto) => {
    expect(lotto.length).toEqual(6)
  }).catch((error) => {
    fail(error.message)
  })
})

test('send wrong format lotto number', () => {
  generateLotto(22123).then(() => {
    fail('Wrong format can generate lotto')
  }).catch((error) => {
    expect(error.message).toMatch('Wrong lotto number format')
  })
})

test('check last two digit', () => {
  let lottoNumber = '123486'
  let twoDigit = lottoNumber.slice(-2)
  generateLotto(lottoNumber).then((lottos) => {
    expect(lottos.length).toEqual(6)
    for (let i = 0;i < lottos.length; i++) {
      expect(lottos[i].slice(-2)).toEqual()
    }
  })
})