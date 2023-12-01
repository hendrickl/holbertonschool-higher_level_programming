#!/usr/bin/node

const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Make a GET request to the specified API URL
request(apiUrl, (error, response, body) => {
 console.log('body :' + body);
 console.log('body parsed :' + JSON.parse(body));

 const tasks = JSON.parse(body);
 const tasksCompleted = {};

 tasks.forEach(task => {
  if (task.completed) {
   tasksCompleted[task.userId]++;
  }
 });
   console.log('tasksCompleted :' + tasksCompleted);
}); 
