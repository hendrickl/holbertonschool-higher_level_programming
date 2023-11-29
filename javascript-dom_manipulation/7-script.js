fetch("https://swapi-api.hbtn.io/api/films/?format=json")
  .then((response) => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the JSON response
    return response.json();
  })
  .then((data) => {
    let listMoviesElement = document.querySelector("#list_movies");

    data.results.forEach((movie) => {
      let newLiElement = document.createElement("li");
      newLiElement.textContent = movie.title;
      listMoviesElement.append(newLiElement);
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
