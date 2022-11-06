const inputText = document.querySelector(".inputText");
const countBtn = document.querySelector(".countBtn");
const number = document.querySelector(".number");

countBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const countWords = (input) => {
    return input.split(" ").filter((e) => e).length;
  };

  number.textContent =
    inputText.value !== ""
      ? countWords(inputText.value)
      : alert("Please fill the input field");
});
