let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let displayValue = document.querySelector(".display-text");
let expressions = document.querySelector(".expression");
let button = document.querySelectorAll("button");
let clear = document.getElementById("clear");
let allClear = document.getElementById("allClear");
let equals = document.getElementById("equals");
let lastOperator;
let operators = document.querySelectorAll(
  "#percentage, #divide, #multiply, #minus, #plus"
);
operators.forEach((operator) =>
  operator.addEventListener("click", (e) => {
    if (e.target.id == "divide") {
      op = "/";
    } else if (e.target.id == "percentage") {
      op = "%";
    } else {
      op = e.target.textContent;
    }
    if (a) {
      b = +displayValue.textContent;
      a = operate(a, b, lastOperator);
      expressions.textContent = a + " " + op;
      displayValue.textContent = "";
      lastOperator = op;
    } else {
      a = +displayValue.textContent;
      expressions.textContent = displayValue.textContent + " " + op;
      displayValue.textContent = "";
      lastOperator = op;
    }
  })
);
let a, b, op;
equals.addEventListener("click", (e) => {
  b = +displayValue.textContent;
  displayValue.textContent = operate(a, b, op);
  expressions.textContent = "";
  reset();
});

allClear.addEventListener("click", () => {
  displayValue.textContent = "";
  expressions.textContent = "";
  reset();
});

button.forEach((button) =>
  button.addEventListener("click", (e) => {
    if (numbers.includes(+e.target.textContent))
      if (displayValue.textContent == 0) {
        displayValue.textContent = e.target.textContent;
      } else {
        displayValue.textContent += e.target.textContent;
      }
    else if (e.target.textContent == ".") displayValue.textContent += ".";
  })
);

clear.addEventListener("click", () => {
  let arr = displayValue.textContent.split("");
  arr.pop();
  displayValue.textContent = arr.join("");
});

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function percent(a) {
  return a / 100;
}
function reset() {
  a = "";
  b = "";
  op = "";
}
function operate(a, b, op) {
  if (op == "+") return add(a, b);
  else if (op == "-") return subtract(a, b);
  else if (op == "x") return multiply(a, b);
  else if (op == "/") return divide(a, b);
  else if (op == "%") return percent(a);
}

//Enables Dark-Mode
let themeButton = document.getElementById("mode");

themeButton.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeButton.innerHTML = `<img src="./images/sun.png" alt="" />`;
  } else {
    themeButton.innerHTML = `<img src="./images/moon.png" alt="" />`;
  }
};
