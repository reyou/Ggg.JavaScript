function Wallet() {
  this.amount = 0;
}

Wallet.prototype.deposit = function(amount) {
  console.log("Deposit arrived: " + amount);
  this.amount += amount;
};
Wallet.prototype.withdraw = function(amount) {
  if (this.amount >= amount) {
    this.amount -= amount;
  } else {
    throw "Insufficient funds.";
  }
};
function BoundedWallet(maxAmount) {
  Wallet.call(this); // 1 point
  this.maxAmount = maxAmount; // 1 point
}

BoundedWallet.prototype = Object.create(Wallet.prototype); // 1 point
BoundedWallet.prototype.constructor = BoundedWallet; // 1 point

BoundedWallet.prototype.deposit = function(amount) {
  console.log("BoundedWallet Deposit arrived: " + amount);
  if (this.amount + amount > this.maxAmount) {
    throw "Insufficient wallet capacity";
  }

  Wallet.prototype.deposit.call(this, amount); // this.amount += amount;
}; // 1 point

let boundedWallet = new BoundedWallet(500);
boundedWallet.deposit(300);
boundedWallet.withdraw(200);
