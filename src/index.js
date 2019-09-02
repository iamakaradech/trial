const csv = require('csvtojson')
const path = require('path')
const _ = require('lodash')

function loadCSV (filePath) {
  csv().fromFile(filePath).then((members) => {
    printAllMember(_.sortBy(members, ['LastName']))
  })
}

function printAllMember (members) {
  _.each(members, (member) => {
    const { FirstName, LastName } = member

    console.log(`${FirstName} ${LastName}`)
  })
}

let filePath = path.join(__dirname, '../data/member.csv')
loadCSV(filePath)
