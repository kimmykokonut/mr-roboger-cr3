// enter 0 get array


function beepBoop(inputNumber) {
  let numberArray = [];
  for (let num = 0; num <= inputNumber; num++) {
    numberArray.push(num);
  }
  return numberArray;
}