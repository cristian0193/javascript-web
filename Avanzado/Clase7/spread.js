let numeros = [2, 3, 5];

function sumar(n1, n2, n3) {
  return n1 + n2 + n3;
}

let resultado = sumar(...numeros);
console.log(resultado);

let otro_arreglo = ['hola', 'Mundo'];
console.log([...numeros], [...otro_arreglo]);


//incluir 2 objectos en 1 solo objecto
let objecto = {
  clave: 3
}

let objetoDos = {
  otroClave: 4
}

console.log(objecto);
console.log(objetoDos);

let newObjecto = {
  ...objecto,
  ...objetoDos
}

console.log(newObjecto);

// ciclo for of y for in
let arreglo = [2, 3, 5];

for (numero of arreglo) {
  console.log(numero);
}

function saludoTodos() {
  for (nombre of arguments) {
    console.log('Hola ' + nombre);
  }
}

saludoTodos('Uriel', 'Codigo Facilito', 'Alumnos')

let usuario = {
  nombre: 'Christian',
  edad: 24
}

for (propiedad in usuario) {
  console.log(propiedad);
}