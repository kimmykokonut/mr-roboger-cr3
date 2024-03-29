function beepBoop(inputNumber) {
  let numberArray = [];
  for (let num = 0; num <= inputNumber; num++) {
    let digits = num.toString().split('');
    if (digits.includes('3')) {
      numberArray.push(3);
    } else if (digits.includes('2')) {
      numberArray.push(2);
    } else if (digits.includes('1')) {
      numberArray.push(1);
    } else {
      numberArray.push(num);
    }
  }
  return assessDigit(numberArray);
}

function assessDigit(array) {
  for (const value of array) {
    if (array.includes(1)) {
      findReplace(array, 1, "Beep!");
    }
    if (array.includes(2)) {
      findReplace(array, 2, "Boop!");
    }
    if (array.includes(3)) {
      findReplace(array, 3, "Won't you be my neighbor?");
    }
  }
  return array
}

function findReplace(array, findValue, replaceValue) {
  array[array.indexOf(findValue)] = replaceValue, array
  return array
}

function handleSelect(event) {
  event.preventDefault();
  const nameInput = document.getElementById("nameInput").value;
  const numberInput = parseInt(document.getElementById("numberInput").value);
  let result = beepBoop(numberInput);
  const div = document.getElementById("results");
  const sayName = document.createElement("h4");
  sayName.append("Be my neighbor, " + nameInput + "?");
  div.append(sayName);
  const ul = document.createElement("ul");
  div.append(ul);
  result.forEach(function (item) {
    let li = document.createElement("li");
    li.append(item);
    ul.append(li);
    div.removeAttribute("class");
  });
}

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  form.addEventListener("submit", handleSelect);
  form.addEventListener("submit", function () {
    resetBtn.removeAttribute("class");
  })
  resetBtn.addEventListener("click", function () {
    const divResults = document.querySelector("div#results");
    divResults.setAttribute("class", "hidden");
    document.getElementById("nameInput").value = null;
    document.getElementById("numberInput").value = null;
    resetBtn.setAttribute("class", "hidden");
    window.location.reload(true);
  })
});