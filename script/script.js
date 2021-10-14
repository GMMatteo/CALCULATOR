var displayDiv = document.querySelector("#display");
let n1 = "";
let n2 = "";
let answer = "";

function calculate() {
      let current = parseFloat(n2);
      let prev = parseFloat(n1);
      let computation = 0;
      switch(answer) {
        case "+":
          computation = current + prev;
          break;
        case "-":
          computation = current - prev;
          break;
        case "*":
          computation = current * prev;
          break;
        case "/":
          computation = current / prev;
          break;
      }
      n1 = computation;
      answer = "";
      displayDiv.innerText = computation.toLocaleString("en-US");
    }

function press(num) {
  if (num === '.' && n1.includes('.')) return
  n1 += num;
  displayDiv.innerText = n1.toLocaleString("en-US");
}

function setOP(calc) {
  if (n1 === '') return
  if (n2 !== '') {
    calculate()
  }
  answer = calc;
  n2 = n1;
  n1 = "";
}

function clr() {
  n1 = "";
  n2 = "";
  answer = "";
  displayDiv.innerText = "0.0";
}


