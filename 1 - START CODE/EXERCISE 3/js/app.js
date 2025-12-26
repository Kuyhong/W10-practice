// Select the create button
const createBtn = document.getElementById("create");

// Listen for click
createBtn.addEventListener("click", createCard);

function createCard() {
  // 1 - Create card
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundColor = randomColor();

  // 2 - Card text
  const text = document.createElement("p");
  text.textContent = "Hello";

  // 3 - Footer
  const footer = document.createElement("div");
  footer.className = "card-footer";

  // 4 - Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove Card";
  removeBtn.addEventListener("click", () => {
    card.remove();
  });

  // 5 - Assemble card
  footer.appendChild(removeBtn);
  card.appendChild(text);
  card.appendChild(footer);

  // 6 - Add card to container
  document.querySelector(".container").appendChild(card);
}

// Generate random background color
function randomColor() {
  const colors = ["#ffb703", "#fb8500", "#8ecae6", "#219ebc", "#adb5bd"];
  return colors[Math.floor(Math.random() * colors.length)];
}

