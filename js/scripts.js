function beepBoop(inputNumber) {
  let numberArray = [];
  for (let num = 0; num <= inputNumber; num++) {
    numberArray.push(num);
  }
  console.log(numberArray);
  // return assessDigit(numberArray)
  return singledDigit(numberArray);
}

function singledDigit(numberArray) {
  let singleArray = [];
  for (const element of numberArray) {
      let digits = element.toString().split('');
      if (digits.includes('3')) {
        singleArray.push(3);
      } else if (digits.includes('2')) {
        singleArray.push(2);
      } else if (digits.includes('1')) {
        singleArray.push(1);
      } else {
        singleArray.push(element);
      }
  console.log(singleArray);
  }
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