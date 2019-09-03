const path = require('path')
const {
  loadCSV
} = require('../src/csv-util')

test('wrong file path', () => {
  const filePath = path.join(__dirname, '../data/members.csv')
  loadCSV(filePath).then(() => {
    fail('success with wrong file path')
  }).catch((error) => {
    expect(error.message).toMatch('Problem while load CSV file')
  })
})

test('result should be array', () => {
  const filePath = path.join(__dirname, '../data/member.csv')
  loadCSV(filePath).then((result) => {
    expect(Array.isArray(result)).toBe(true)
  }).catch((error) => {
    fail('Problem while load CSV file')
  })
})

test('first index should be Firstname Frodo, Lastname Baggins', () => {
  const filePath = path.join(__dirname, '../data/member.csv')

  loadCSV(filePath).then((result) => {
    const member = result[0]
    expect(member.FirstName).toMatch('Frodo')
    expect(member.LastName).toMatch('Baggins')
  })
})

test('last index should be Firstname Tiger, Lastname Woods', () => {
  const filePath = path.join(__dirname, '../data/member.csv')

  loadCSV(filePath).then((result) => {
    const member = result.pop()
    expect(member.FirstName).toMatch('Tiger')
    expect(member.LastName).toMatch('Woods')
  })
})