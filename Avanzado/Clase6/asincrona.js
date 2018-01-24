// request con callbacks
// const request = require('request');
//
// request('http://google.com', function() {
//   console.log("Termine la peticion de google");
// });
//
// console.log("Codigo despues de peticion a google");

// request utilizando promesas
const request = require('request-promise');

request('http://google.com').then(function(html) {
  console.log('Termine la peticion de Google');
}).catch(function(err) {
  console.log(err);
});

// Creacion de mis propias promesas