// enter 1 get beep

testArray = [0,1,2,3]

function beepBoop(inputNumber) {
  let numberArray = [];
  for (let num = 0; num <= inputNumber; num++) {
    numberArray.push(num);
  }
  return numberArray;
}

function findReplace(array, findValue, replaceValue) {
  array[array.indexOf(findValue)] = replaceValue, array
  return array
} 


findReplace(testArray, 1, "Beep!")