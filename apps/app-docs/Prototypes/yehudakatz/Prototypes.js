function Wallet() {
  this.amount = 0;
}

Wallet.prototype.deposit = function(amount) {
  this.amount += amount;
};
Wallet.prototype.withdraw = function(amount) {
  if (this.amount >= amount) {
    this.amount -= amount;
  } else {
    throw "Insufficient funds.";
  }
};

let myWallet = new Wallet();
myWallet.deposit(100);
console.log(myWallet.amount);
