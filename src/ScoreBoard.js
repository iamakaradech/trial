class ScoreBoard {
  constructor () {
    this.reset()
  }

  static getInstance () {
    if (!ScoreBoard.instance) {
      ScoreBoard.instance = new ScoreBoard()
    }

    return ScoreBoard.instance
  }

  goalForHome () {
    this.home++
  }

  goalForAway () {
    this.away++
  }

  show () {
    return `Home ${this.home} - ${this.away} Away`
  }

  reset () {
    this.home = 0
    this.away = 0
  }
}

module.exports = { ScoreBoard }
