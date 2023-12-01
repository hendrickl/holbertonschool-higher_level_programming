#!/usr/bin/node

const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// GET request to Star wars API to retrieve movies details
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log('body' + body);
    const movies = JSON.parse(body).results;

    const moviesWithWedge = movies.filter(movie => {
      return movie.characters.some(characterUrl => characterUrl.includes('/18/'));
    });

    console.log(`Nombre de films avec Wedge Antilles : ${moviesWithWedge.length}`);
  }
});
