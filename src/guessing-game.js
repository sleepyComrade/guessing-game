class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return Math.round((this.max - this.min) / 2) + this.min;
  }

  lower() {
    this.max = this.guess();
  }

  greater() {
    this.min = this.guess();
  }
}

module.exports = GuessingGame;