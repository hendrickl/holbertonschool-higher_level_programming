#!/usr/bin/node

const request = require('request');

// Get the movie ID from the command line argument
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    // Parse the JSON response
    const movieDetails = JSON.parse(body);

    // Print the title of the movie
    console.log(movieDetails.title);
  }
});
