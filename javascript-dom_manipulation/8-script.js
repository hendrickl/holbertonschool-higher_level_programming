fetch("https://hellosalut.stefanbohacek.dev/?lang=fr")
  .then((response) => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the JSON response
    return response.json();
  })
  .then((data) => {
    let helloElement = document.querySelector("#hello");
    helloElement.textContent = data.hello;
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
