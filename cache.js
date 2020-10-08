
const cache  = () => {

    let oldValue = 0;

    return  function(base, pow) {
        const result = base ** pow;
        const isCache = result === oldValue;

        if (!isCache) {
            oldValue = result;
        }

        return {
            value: result,
            fromCache: isCache
        }
    }
}

const calculate = cache();

console.log(calculate(3,3));
console.log(calculate(2, 10)); // { value: 1024, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: true}