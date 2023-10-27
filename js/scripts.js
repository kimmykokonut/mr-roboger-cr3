// enter 1 get beep

testArray = [0,1,2,3]

function beepBoop(inputNumber) {
  let numberArray = [];
  for (let num = 0; num <= inputNumber; num++) {
    numberArray.push(num);
  }
  console.log(numberArray);
  return assessDigit(numberArray)
}

function assessDigit(array) {
  if (array.includes(1)) {
    findReplace(array, 1, "Beep!");
  } 
  if (array.includes(2)) {
    findReplace(array, 2, "Boop!");
  }
  if (array.includes(3)) {
    findReplace(array, 3, "Won't you be my neighbor?");
  }
  return array
}

function findReplace(array, findValue, replaceValue) {
  array[array.indexOf(findValue)] = replaceValue, array
  return array
} 