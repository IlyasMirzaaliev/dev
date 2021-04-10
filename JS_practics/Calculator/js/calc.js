// let buttonPlus = document.getElementById('buttonPlus');
// let buttonMinus = document.getElementById('buttonMinus');
// let buttonMultiplay = document.getElementById('buttonMultiplay');
// let buttonDevide = document.getElementById('buttonDevide');



// let operationButtons = [
//   buttonPlus, 
//   buttonMinus, 
//   buttonMultiplay, 
//   buttonDevide
// ];



let operationButtons = document.getElementsByClassName("operation-button");

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

function makeOperation(operationCode) {
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);

  if (operationCode === "+") {
    let result = number1 + number2;
    window.alert(result);
  } else if (operationCode === "-") {
    let result = number1 - number2;
    window.alert(result);
  } else if (operationCode === "*") {
    let result = number1 * number2;
    window.alert(result);
  } else if (operationCode === "/") {
    let result = number1 / number2;
    window.alert(result);
  }
}

function onOperationButtonClick(eventObject) {
  let clickedElement = eventObject.currentTarget;
  let operation = clickedElement.innerHTML;
  makeOperation(operation);
}

for (let i = 0; i < operationButtons.length; i++) {
  let button = operationButtons[i];
  button.addEventListener("click", onOperationButtonClick);
}









