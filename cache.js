
const cache  = () => {

    const cache = {};

    return function(base, pow) {
         if (base && pow && typeof base === 'number' && typeof pow === 'number') {
             const key = base + ',' + pow;
             const isCached =  cache.hasOwnProperty(key);

             if (isCached) {

                 return {
                     value: cache[key],
                     cached: isCached
                 }
             } else {
                 const res = base ** pow;

                 cache[key] = res;

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
console.log(calculate(2, 10)); // { value: 1024, fromCache: true}
console.log(calculate()); // false
console.log(calculate(3,4)); // { value: 81, fromCache: false }
console.log(calculate(3,4)); // { value: 81, fromCache: true }