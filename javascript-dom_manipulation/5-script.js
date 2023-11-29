const headerElement = document.querySelector("header");
const updateHeaderElement = document.querySelector("#update_header");

updateHeaderElement.addEventListener("click", () => {
  headerElement.textContent = "New Header!!!";
});
