const permutation = require('./permutation')

const permutations = permutation('209324')

console.log('Possible : ', permutations.length)
console.log(permutations.join(', '))
