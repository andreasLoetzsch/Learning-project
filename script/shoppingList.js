let shoppingList = [];

function btnSave() {
  // ska spara det som skrevs in i input field
  //och visas i listan

  let deleteBtn = document.createElement("button");
  let userInput = document.getElementById("user-input");
  let shoppingListItem = document.createElement("div");
  let shoppingListInput = document.createElement("span");

  deleteBtn.addEventListener("click", function () {
    shoppingListItem.remove();
  });

  shoppingListItem.classList.add("shopping-list-item");
  shoppingListInput.classList.add("shopping-list-span");
  deleteBtn.textContent = "Delete";

  shoppingList = userInput.value;
  shoppingListInput.textContent = `• ` + shoppingList;

  shoppingListItem.append(shoppingListInput, deleteBtn);
  document.querySelector(".shopping-list-container").append(shoppingListItem);
  console.log(shoppingList);
}
