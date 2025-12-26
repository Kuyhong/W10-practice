// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  const descriptionInput = document.getElementById("description");
  const prioritySelect = document.getElementById("priority");

  // 1- Create a new task object
  const task = {
    description: descriptionInput.value,
    priority: prioritySelect.value
  };

  // 2- Add the task to the array
  tasks.push(task);

  // 3- Display tasks
  displayTasks();

  // Clear input
  descriptionInput.value = "";
}

// Display tasks on DOM
function displayTasks() {
  // Remove old items
  const oldItems = document.querySelectorAll(".item");
  oldItems.forEach(item => item.remove());

  // Create DOM elements
  tasks.forEach(task => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.textContent = task.description;

    if (task.priority === "High") {
      div.style.backgroundColor = "red";
    } else {
      div.style.backgroundColor = "grey";
    }

    document.body.appendChild(div);
  });
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

// Run addItem when button is clicked
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
