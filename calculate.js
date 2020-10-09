function Calc() {
    let self = this;

    this._cache = [];  // храним историю всех операций

    this._allOperation = [  // храним базовые операции калькулятора, по умолчанию +, -. По возможности можно добавить новые
        {
            sign: '+',
            operation: (a, b) => a + b
        },
        {
            sign: '*',
            operation: (a, b) => a * b
        }
    ];


    this.operation = (expr) =>  {
        if (expr && typeof expr === 'string') {

            const sign = expr.match(/[\+\-\*\/]/g)[0];
            const [num1, num2] = expr.match(/\d+/g);
            const funcOperation = this._allOperation.find((elem) => sign === elem.sign );

            this._cache.push({
                operation: sign, operands: [num1, num2]
            });

            return funcOperation.operation(+num1, +num2);
        }
        else {
            return false;
        }
    }

    this.addOperation = (sign, callback) => {
        this._allOperation.push({
            sign: sign,
            operation: callback
        })
    }

    this.history = () => {
        return this._cache;
    }

    this.clearHistory = () => {
        this._cache.splice(0, this._cache.length);
    }

    return {
        operation: self.operation,
        addOperation: self.addOperation,
        history: self.history,
        clearHistory: self.clearHistory
    }
}


const calculator = new Calc()

console.log(calculator.operation('31 + 32')) // 63
console.log(calculator.operation('10 * 2')) // 10
console.log(calculator.addOperation('/', (a, b) => a / b))
console.log(calculator.operation('10 / 2')) // 5

console.log(calculator.history());
calculator.clearHistory();
console.log(calculator.history());