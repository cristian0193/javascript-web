// let: variable local o de metodo
let nombre = "Christian";
console.log(nombre);

// var: variable global
var apellido = "Rodriguez";
console.log(apellido);

// const: variable constante, este no cambio
const PI = 3.1416;
console.log(PI);

//numeros y operaciones
let edad = 25; //entero
let cambio = 2.2; //decimal

let resultado = edad * cambio;
console.log(resultado);

console.log(Math.PI); //obtener el numero PI

console.log(Math.pow(10, 2)); //elevador exponecial

console.log(Math.sqrt(4)); //raiz cuadrada

//boolenos
let notificacionesActivas = true;
let recibirCorreos = false;

let booleano = new Boolean(1);
console.log(booleano.toString());

//Operadores de comparacion (==, !=, <=, >=, ===)
var edadMia = 24;

console.log(edadMia == 24); //true
console.log(edadMia == 20); //false
console.log(edadMia != 18); //true
console.log(edadMia != 24); //false
console.log(edadMia > 24); //false
console.log(edadMia < 24); //false
console.log(edadMia >= 24); //true
console.log(edadMia <= 24); //true
console.log(edadMia == "24"); //true
console.log(edadMia === "24"); //false (verifica valor y tipo de datos)
console.log(edadMia !== "24"); //true

//Operadores logicos (&&, ||)
console.log(edadMia == 24 && "hola" == "hola"); //true
console.log(edadMia == 24 && 13 === "13"); //false
console.log(edadMia == 24 || 13 == "13"); //true
console.log(!false); //true
console.log(!true); //false