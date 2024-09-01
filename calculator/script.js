const formEl = document.querySelector(".form");
const textAreaEl = document.querySelector(".textarea");

formEl.addEventListener("click", (e) => {
  equalSign(e);
  valueToInput(e);
  clearInput(e);
});

function equalSign(e) {
  if (e.target.textContent === "=") {
    let result = eval(textAreaEl.value);
    textAreaEl.value = result;
  }
}

function valueToInput(e) {
  const clickedValue = e.target.textContent;

  if (clickedValue === "DEL") {
    textAreaEl.value = textAreaEl.value.slice(0, -1);
  } else if (clickedValue !== "=") {
    textAreaEl.value += clickedValue;
  }
}
function clearInput(e) {
  if (e.target.textContent === "C") {
    textAreaEl.value = "";
  }
}
