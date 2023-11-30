#!/usr/bin/node

const fs = require('fs');

// Get file path and content from the command line arguments
const filePath = process.argv[2];

// Write the content to the file in utf-8
fs.writeFile(filePath, 'C is fun', 'utf-8', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`${filePath}`);
  }
});
