module.exports = (lottoNumber) => {
  return new Promise((resolve, reject) => {
    let match = RegExp(/^\d{6}$/g)
    if (!match.test(lottoNumber)) {
      throw new Error('Wrong lotto number format')
    }

    let twoDigit = lottoNumber.toString().slice(-1)
    const MAX_GENERATED_NUMBER = 6
    let winningNumbers = []

    for (let i = 0; i < MAX_GENERATED_NUMBER; i++) {
      winningNumbers.push(`${i.toString().padStart(4, '0')}${twoDigit}`)
    }

    resolve(winningNumbers)
  })
}
