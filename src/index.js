const path = require('path')
const _ = require('lodash')
const { loadCSV } = require('./csv-util')

let filePath = path.join(__dirname, '../data/member.csv')
console.log(filePath)
loadCSV(filePath).then((members) => {
  console.log(members)
  _.each(members, (member) => {
    const { FirstName, LastName } = member

    console.log(`${FirstName} ${LastName}`)
  })
}).catch((error) => {
  console.log(error.message)
})
