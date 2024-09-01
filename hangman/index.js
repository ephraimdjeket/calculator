const wordsEl = document.querySelector(".word-wrapper");
const pElement = document.querySelectorAll(".Word");
const hangMan = document.querySelector(".part");

wordsEl.addEventListener("click", (e) => {
  pElement.forEach((p) => {
    if (p.textContent === e.target.textContent) {
      p.classList.remove("toggle");
    } else if (p.textContent !== e.target.textContent) {
      hangMan.classList.add("remove");
    }
  });
});
