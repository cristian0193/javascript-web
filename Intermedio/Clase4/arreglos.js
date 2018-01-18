//arreglos unidimensionales
//arreglos recorridos con for
let arreglo = [1, 34, 19, 28, 10];

for (var i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}

//arreglos recorridos con each
let arreglo2 = ['ruby', 'python', 'java', 'angular'];

//Elimina o filtrar un eleentos (ruby)
arreglo2 = arreglo2.filter((el) => el != 'ruby');

arreglo2.forEach(function(elemento) {
  console.log(elemento);
});

//filtrar los numeros pares (filter)
let arreglo3 = [1, 7, 19, 28, 10];

arreglo3.filter(element => (element % 2) == 0);

for (var j = 0; j < arreglo3.length; j++) {
  console.log(arreglo3[j]);
}

//encontrar un valor determinado (find)
let arreglo4 = ['ruby', 'python', 'java', 'angular'];

let valor = arreglo4.find((el) => el == 'angular');

console.log(valor);

//funcion maps
let numeros = [2, 35, 6, 20];

let cuadrados = numeros.map(numero => numero * numero);

console.log(cuadrados);

for (var i = 0; i < cuadrados.length; i++) {
  console.log(cuadrados[i]);
}