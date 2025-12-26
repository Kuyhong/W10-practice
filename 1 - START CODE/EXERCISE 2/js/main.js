const button = document.querySelector("button");
const colorText = document.getElementById("result-color");

button.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
});

