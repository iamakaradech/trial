const { ScoreBoard } = require('./ScoreBoard')

const scoreBoard1 = ScoreBoard.getInstance()
scoreBoard1.goalForAway()
console.log(scoreBoard1.show())

const scoreBoard2 = ScoreBoard.getInstance()
scoreBoard2.goalForAway()
console.log(scoreBoard2.show())

scoreBoard2.reset()
scoreBoard1.goalForHome()
console.log(scoreBoard1.show())
