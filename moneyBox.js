function MoneyBox() {
    this._countCoin = 0;  // количество монет по умолчанию 0

    this.addCoin = () => {
        this._countCoin++;
    }

    this.getAmount = () => this._countCoin;
}




const box = new MoneyBox();

box.getAmount(); // 0
box.addCoin();
box.addCoin();
console.log(box.getAmount()); // 2