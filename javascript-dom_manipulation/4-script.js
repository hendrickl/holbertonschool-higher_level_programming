const addLiElement = document.querySelector("#add_item");
const listElement = document.querySelector(".my_list");

addLiElement.addEventListener("click", () => {
  let newLiElement = document.createElement("li");
  newLiElement.textContent = "Item";
  listElement.append(newLiElement);
});
