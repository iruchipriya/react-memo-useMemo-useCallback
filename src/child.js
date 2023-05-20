import React from 'react';

// without useMemo
// export default function Child({name}) {
// console.log("Skinny Jack")
//   return (
//     <div>{name}</div>
//   )
// }

function memoize(func) {
  const cache = {};
  return function (number) {
    if (cache[number]) {
      return cache[number];
    } else {
      const result = func(number);
      cache[number] = result;
      return result;
    }
  };
}

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(5)); // Output: 120 (cached result)
console.log(memoizedFactorial(10)); // Output: 3628800
console.log(memoizedFactorial(10)); // Output: 3628800 (cached result)

//generic
function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  };
}

function multiply(n1, n2) {
  return n1 * n2;
}

const memoizedMultiply = memoize(multiply);

console.log(memoizedMultiply(5, 2)); // Output: 10
console.log(memoizedMultiply(5, 2)); // Output: 10 (cached result)
console.log(memoizedMultiply(3, 4)); // Output: 12
console.log(memoizedMultiply(3, 4)); // Output: 12 (cached result)

export default React.memo(function Child({ name }) {
  console.log('child');
  return (
    <>
      {name()}
      <div>Really Skinny Jack</div>
    </>
  );
});
