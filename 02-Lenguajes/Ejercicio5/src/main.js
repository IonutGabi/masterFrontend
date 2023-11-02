class SlothMachine {
  #countCoins;

  constructor() {
    this.#countCoins = 0;
  }

  play() {
    this.#countCoins++;

    const firstSlot = Math.random() < 0.5;
    const secondSlot = Math.random() < 0.5;
    const thirdSlot = Math.random() < 0.5;

    if (firstSlot && secondSlot && thirdSlot) {
      console.log(`Congratulations!!!. You won ${this.#countCoins} coins!!`);
      this.#countCoins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
