// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;
let chances = 3;

// DOM ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");

const instructionLabel = document.getElementById("instructionLabel");

// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

// Show Game View
function showGame() {
  chances = 3;
  passwordInput.value = "";
  instructionLabel.textContent = "Enter your code (You can try 3 times only !)";
  show(passwordView);
  hide(lostView);
  hide(wonView);
}

// Show Win View
function showWin() {
  hide(passwordView);
  hide(lostView);
  show(wonView);
}

// Show Lost View
function showLost() {
  hide(passwordView);
  hide(wonView);
  show(lostView);
}

// Handle Check Button
function handleCheck() {
  const userCode = Number(passwordInput.value);

  if (userCode === SECRET_CODE) {
    showWin();
  } else {
    chances--;

    if (chances > 0) {
      instructionLabel.textContent = `Wrong code! You have ${chances} chance(s) left`;
      passwordInput.value = "";
    } else {
      showLost();
    }
  }
}

// MAIN ---------------------------------------------------------
showGame();
