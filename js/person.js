let ladder = {
  step: 0,

  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  show() {
    console.log(this.step)
    return this
  }
}

ladder.up().up().down().show()