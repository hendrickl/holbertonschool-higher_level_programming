#!/usr/bin/node

const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// GET request to Star wars API to retrieve movies details
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const movies = JSON.parse(body).results;

    const moviesWithWedge = movies.filter(movie => {
      return movie.characters.some(characterUrl => characterUrl.includes('/18/'));
    });

    console.log(`${moviesWithWedge.length}`);
  }
});
