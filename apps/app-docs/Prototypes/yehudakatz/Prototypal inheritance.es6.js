class Wallet {
  // 1 point
  constructor() {
    this.amount = 0;
  } // 1 point
  deposit(amount) {
    this.amount += amount;
  }
  withdraw(amount) {
    if (this.amount >= amount) {
      this.amount -= amount;
    } else {
      throw "Insufficient funds.";
    }
  } // 1 point
}

class BoundedWallet extends Wallet {
  // 1 point
  constructor(maxAmount) {
    super(); // 1 point
    this.maxAmount = maxAmount;
  }
  deposit(amount) {
    if (this.amount + amount > this.maxAmount) {
      throw "Insufficient wallet capacity";
    }
    super.deposit(amount);
  } // 1 point
}

let myWallet = new Wallet();
myWallet.deposit(100);
console.log(myWallet.amount);
console.log(myWallet.amount > 100); // 1 point
