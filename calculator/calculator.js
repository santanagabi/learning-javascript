let buffer = "0";
let runningTotal = 0;
let previousOperator = null;
const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }

  rerender();
}

function handleNumber(number) {
  if (buffer === "0") {
    buffer = number;
  } else {
    buffer += number;
  }
}

function handleMath(value) {
  if (buffer === "0") {
    // Não faz nada se o buffer for 0
    return;
  }

  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = value;
  buffer = "0"; // Reinicia o buffer após a operação matemática
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      // Limpa o buffer e o total
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      if (previousOperator === null) {
        // Precisa de dois números para calcular
        return;
      }

      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = "" + runningTotal; // Converte para string para exibição
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      // Log para indicar que a seta para trás foi pressionada
      console.log("Back arrow");
      break;
    case "+":
    case "-":
    case "×":
      handleMath(symbol);
      break;
  }
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

function rerender() {
  screen.innerText = buffer;
}

init();
