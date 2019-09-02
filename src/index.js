const generateLotto = require('./generate-lotto')
const lotto = '112445'
generateLotto(lotto).then((result) => {
  console.info('result', result)
}).catch((error) => {
  console.log(error)
})
