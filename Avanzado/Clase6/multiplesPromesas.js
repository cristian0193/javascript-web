let p1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Hola Mundo'));
let p2 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Segundo Hola Mundo'));
let p3 = Promise.reject();

let saluda = () => console.log('Hola a todos');

// p1.then(function() {
//   p2.then(function() {
//     saluda();
//   });
// });

Promise.all([p1, p2, p3]).then(resultado => {
  console.log(resultado);
  saluda();
}).catch(() => console.log('Falle'));