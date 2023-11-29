fetch("https://swapi-api.hbtn.io/api/people/5/?format=json")
  .then((response) => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the JSON response
    return response.json();
  })
  .then((data) => {
    // Access the character name from the response
    let characterName = data.name;
    let characterElement = document.querySelector("#character");
    characterElement.textContent = characterName;
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
