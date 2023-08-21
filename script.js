// Author : Aman Jha
// Date   : 20 August 2023
// Purpose: To implement the functions of a Calcutor.

let currentInput = "";

function clearResult() {
  currentInput = "";
  document.getElementById("result").value = "";
}

function appendChar(char) {
  if (char === "AC" ) {
    clearResult();
  } else {
    currentInput += char;
    document.getElementById("result").value = currentInput;
  }
}

function calculate() {
  try {
    currentInput = eval(currentInput);
    document.getElementById("result").value = currentInput;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function calculateSquareRoot() {
  currentInput = Math.sqrt(currentInput);
  document.getElementById("result").value = currentInput;
}

function calculatePower() {
  currentInput = Math.pow(currentInput, 2);
  document.getElementById("result").value = currentInput;
}

function calculateLog() {
  currentInput = Math.log(currentInput);
  document.getElementById("result").value = currentInput;
}

function handleBackspace() {
  if (currentInput.length > 0) {
    currentInput = currentInput.slice(0, -1);
    document.getElementById("result").value = currentInput;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".buttons button");
  buttons.forEach(button => {
    button.addEventListener("click", function() {
      if (button.innerHTML === "=") {
        calculate();
      } else if (button.classList.contains("sqrt")) {
        calculateSquareRoot();
      } else if (button.classList.contains("power")) {
        calculatePower();
      } else if (button.classList.contains("log")) {
        calculateLog();
      } else {
        appendChar(button.innerHTML);
      }
    });
  });

  document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (/[0-9+\-*/.={AC}+()]/.test(key)) {
      event.preventDefault();
      if (key === "=") {
        calculate();
      } else {
        appendChar(key);
      }
    }
  });

  document.addEventListener("keyup", function(event) {
    const key = event.key;
    if (key === "Enter") {
      calculate();
    }else if (key === "Backspace") {
      handleBackspace();
    }else if (key === "Delete") {
      clearResult();
    }
  });
});


