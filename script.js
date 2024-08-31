const formEl = document.querySelector(".form");
const textAreaEl = document.querySelector(".textarea");

formEl.addEventListener("click", (e) => {
  valueToInput(e);
  clearInput(e);
  switch (e.target.textContent) {
    case "/":
      parseInt((textAreaEl.value += "/"));
      break;
    case "*":
      console.log("*");
      break;
    case "-":
      console.log("-");
      break;
    case "+":
      console.log("+");
      break;
    case "%":
      console.log("%");
      break;
  }
});
function valueToInput(e) {
  e.target.textContent === "DEL"
    ? (textAreaEl.value = textAreaEl.value.slice(0, -1))
    : (textAreaEl.value += e.target.textContent);
}

function clearInput(e) {
  if (e.target.textContent === "C") {
    textAreaEl.value = "";
  }
}
