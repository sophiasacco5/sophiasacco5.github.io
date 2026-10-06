// Default items that will appear in the bag list when the page loads
const bagItems = ["Phone", "Wallet", "Keys", "Sunscreen"];

// Select the form, input, and unordered list from the HTML
const addItemForm = document.getElementById("add-item-form");
const itemInput = document.getElementById("item-input");
const bagItemsList = document.getElementById("bag-items");

// Displays every item from the array on the website
function displayBagItems() {
  // Clears the current list before showing the updated array
  bagItemsList.innerHTML = "";

  // Creates one list item for each item in the array
  bagItems.forEach(function (item, index) {
    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `bag-item-${index}`;

    const label = document.createElement("label");
    label.htmlFor = `bag-item-${index}`;
    label.textContent = item;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    bagItemsList.appendChild(listItem);
  });
}

// Adds a new item when the user clicks "Add to Bag"
addItemForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newItem = itemInput.value.trim();

  // Only adds an item if the input is not empty
  if (newItem !== "") {
    bagItems.push(newItem);
    displayBagItems();

    // Clears the input box after the item is added
    itemInput.value = "";
  }
});

// Shows the default items when the page first loads
displayBagItems();