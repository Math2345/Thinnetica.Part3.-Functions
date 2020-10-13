function MoneyBox() {
    let self = this;

    this._countCoin = 0;  // количество монет по умолчанию 0 приватный метод

    this.addCoin = () => {
        this._countCoin++;
    }

    this.getAmount = () => this._countCoin;

    return {
        addCoin: self.addCoin,
        getAmount: self.getAmount
    }
}

const box = new MoneyBox();

box.getAmount(); // 0
box.addCoin();
box.addCoin();
box.addCoin();
console.log(box.getAmount());