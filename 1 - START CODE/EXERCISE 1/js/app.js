let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

// 1- Move item 3 to container 2
const item3 = container1.querySelector(".item:nth-child(3)");
container2.appendChild(item3);

// 2- Remove item 4
const item4 = container2.querySelector(".item");
item4.remove();

// 3- Create item 10 and add it to container 3
const item10 = document.createElement("div");
item10.className = "item";
item10.textContent = "10";
container3.appendChild(item10);

// 4- Set all items in blue containers to red
const blueContainers = document.querySelectorAll(".containerBlue");
blueContainers.forEach(container => {
  container.querySelectorAll(".item").forEach(item => {
    item.style.color = "red";
  });
});

