// Utility Logic
// Business Logic
function rangeOfNumbers(num) {
  const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );
  let numberRange = arrayRange(1, num, 1);
  return numberRange;
}

function beepBoop(num) {
  const numRange = rangeOfNumbers(num).toString().split(",");
  console.log(numRange, "numRange");
  let resultArray = [];
  if (num == 0) {
    resultArray.push(num);
  }
  for (let i = 0; i <= numRange.length - 1; i++) {
    if (numRange[i].includes("3")) {
      resultArray.push("Won't you be my neighbor?");
    } else if (numRange[i].includes("2")) {
      resultArray.push("Boop!");
    } else if (numRange[i].includes("1")) {
      resultArray.push("Beep!")
    } else {
      resultArray.push(numRange[i]);
    }
  }
  console.log(resultArray, "resultArray3");
}
beepBoop(13);
//UI Logic