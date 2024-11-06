// menerima argumen sebuah fungsi
function memoize(fn) {
  const cache = new Map();

  // mengembalikan nilai berupa fungsi
  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
}

function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

function hundreds(arr) {
  return arr.filter((a) => a % 100 === 0);
}

// Fungsi memoize dan fungsi lainnya tetap sama
const memoizedSumArray = memoize(sumArray);
const memoizedHundreds = memoize(hundreds); // versi memoized dari hundreds

const largeArray = Array.from({ length: 5000 }, (_, i) => i + 1);

// Uji memoizedSumArray
console.time("Memoized Sum First Call");
console.log("Total:", memoizedSumArray(largeArray));
console.timeEnd("Memoized Sum First Call");

console.time("Memoized Sum Second Call (Cached)");
console.log("Total:", memoizedSumArray(largeArray));
console.timeEnd("Memoized Sum Second Call (Cached)");

// Uji memoizedHundreds
console.time("Memoized Hundreds First Call");
console.log("Hundreds:", memoizedHundreds(largeArray));
console.timeEnd("Memoized Hundreds First Call");

console.time("Memoized Hundreds Second Call (Cached)");
console.log("Hundreds:", memoizedHundreds(largeArray));
console.timeEnd("Memoized Hundreds Second Call (Cached)");
