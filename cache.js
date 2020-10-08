
const cache  = () => {

    const  cache = new Set();

    return  function(base, pow) {
         if (base && pow && typeof base === 'number' && typeof pow === 'number') {
             const res = base ** pow;
             const isCached = cache.has(res);

             if (isCached) {
                const tmpArr = [...cache];

                const findElem = tmpArr.find((elem) => elem === res)

                 return {
                     value: findElem,
                     cached: isCached
                 }
             } else {
                 cache.add(res);

                 return {
                     value: res,
                     cached: isCached
                 };
             }

         } else {
             return false;
         }
    }
}

const calculate = cache();

console.log(calculate(3,3));
console.log(calculate(2, 10)); // { value: 1024, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: false}
console.log(calculate()); // false