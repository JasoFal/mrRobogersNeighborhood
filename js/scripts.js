// Utility Logic
// Business Logic
function rangeOfNumbers(num) {
  let zeroArray = [];
  if (num === 0) {
    zeroArray.push(num);
  }
  const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );
  let range = arrayRange(1, num, 1);
  return range;
}

function beepBoop() {
  
}

rangeOfNumbers(0);
//UI Logic