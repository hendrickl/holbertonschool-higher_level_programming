const toggleHeaderElement = document.querySelector("#toggle_header");
const headerElement = document.querySelector("header");

toggleHeaderElement.addEventListener("click", () => {
  if (headerElement.classList.contains("green")) {
    headerElement.classList.remove("green");
    headerElement.classList.add("red");
  } else {
    headerElement.classList.remove("red");
    headerElement.classList.add("green");
  }
});
