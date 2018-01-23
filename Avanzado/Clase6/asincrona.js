const request = require('request');

request('http://google.com', function() {
  console.log("Termine la peticion de google");
});

console.log("Codigo despues de peticion a google");