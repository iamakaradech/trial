const csv = require('csvtojson')
const _ = require('lodash')

const loadCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    csv().fromFile(filePath).then((members) => {
      resolve(members)
    }).catch(() => {
      throw new Error('Problem while load CSV file')
    })
  })
}

module.exports = {
  loadCSV
}
