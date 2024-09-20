let currentInput = null; 

function setupKeyboard(mode) {
  const keyboard = document.getElementById("numeric-keyboard");
  keyboard.innerHTML = ""; 

  let keys = [];
  if (mode === "binary") {
    keys = ["0", "1"];
  } else if (mode === "decimal") {
    keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }

  keys.forEach((key) => {
    const button = document.createElement("button");
    button.className = "num-key";
    button.innerText = key;
    button.onclick = () => addToInput(key);
    keyboard.appendChild(button);
  });
}

function addToInput(value) {
  if (currentInput) {
    currentInput.value += value;
  }
}

function deleteLastCharacter() {
  if (currentInput && currentInput.value.length > 0) {
    currentInput.value = currentInput.value.slice(0, -1);
  }
}

document.getElementById("binary1").onclick = () => {
  currentInput = document.getElementById("binary1");
  setupKeyboard("binary"); // Mostrar solo 0 y 1
};

document.getElementById("binary2").onclick = () => {
  currentInput = document.getElementById("binary2");
  setupKeyboard("binary"); // Mostrar solo 0 y 1
};

document.getElementById("binaryInput").onclick = () => {
  currentInput = document.getElementById("binaryInput");
  setupKeyboard("binary"); // Mostrar solo 0 y 1
};

document.getElementById("decimalInput").onclick = () => {
  currentInput = document.getElementById("decimalInput");
  setupKeyboard("decimal"); // Mostrar 0 a 9
};

function performOperation(operation) {
  let binary1 = document.getElementById("binary1").value;
  let binary2 = document.getElementById("binary2").value;

  let decimal1 = parseInt(binary1, 2);
  let decimal2 = parseInt(binary2, 2);
  let result;

  if (isNaN(decimal1) || isNaN(decimal2)) {
    document.getElementById("result").innerHTML =
      "Números binarios no válidos.";
    return;
  }

  switch (operation) {
    case "+":
      result = decimal1 + decimal2;
      break;
    case "-":
      result = decimal1 - decimal2;
      break;
    case "*":
      result = decimal1 * decimal2;
      break;
    case "/":
      result = decimal1 / decimal2;
      break;
    default:
      result = "Operación no válida";
  }

  document.getElementById(
    "result"
  ).innerHTML = `Resultado en binario: ${result.toString(
    2
  )} <br> Resultado en decimal: ${result}`;
}

function binaryToDecimal() {
  let binary = document.getElementById("binaryInput").value;
  let decimal = parseInt(binary, 2);

  if (isNaN(decimal)) {
    document.getElementById("result").innerHTML = "Número binario no válido.";
  } else {
    document.getElementById("result").innerHTML = `Valor decimal: ${decimal}`;
  }
}

function decimalToBinary() {
  let decimal = parseInt(document.getElementById("decimalInput").value);

  if (isNaN(decimal)) {
    document.getElementById("result").innerHTML = "Número decimal no válido.";
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Valor binario: ${decimal.toString(2)}`;
  }
}

function clearAll() {
  document.getElementById("binary1").value = "";
  document.getElementById("binary2").value = "";
  document.getElementById("binaryInput").value = "";
  document.getElementById("decimalInput").value = "";
  document.getElementById("result").innerHTML = "";
}

setupKeyboard("binary");