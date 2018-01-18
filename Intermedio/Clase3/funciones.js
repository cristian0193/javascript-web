// Funcion para ejecutar codigo
function miPrimeraFuncion() {
  console.log('consola 1');
}
miPrimeraFuncion();

// Funcion con parametros
function cuadradoNumero(cuadrado) {
  return cuadrado * cuadrado;
}
console.log(cuadradoNumero(4));

// variables locales y globales
var nombre = "Christian";

function scope_local() {
  var nombre = "Alexis"
  console.log(nombre);
}

console.log(nombre);
scope_local();

// Diferencias entre let y variable
// en este ejemplo vemos, si el tipo de variable es var (funciona)
// pero si es let (falla), esto se debe a que dentro de un ciclo o condicion no se permite los const ni let.
function metodoEsMayorEdad(edad) {
  if (edad > 18) {
    var resultado = "Es mayor de edad";
  } else {
    var resultado = "Es menor de edad";
  }
  console.log(resultado);
}
console.log(metodoEsMayorEdad(20));

// argumentos y parametros
// parametro : numero
// argumento : (2) pasado en la funcion
function cuadradoNumero(numero) {
  return numero * numero;
}
console.log(cuadradoNumero(2));

// funciones sin parametros pero obteniendo argumentos
function sumaArgumentos() {
  return arguments[0] + arguments[1];
}
console.log(sumaArgumentos(1, 5));

// funciones anonimas
function executor(funcion) {
  funcion();
}

executor(function() {
  console.log("Hola Funcion anonima");
});

// Manejo del contexto
// Ejemplo 1
let objeto = {
  demo: function() {
    console.log(this);
  }
};

let executor1 = {
  funcion: null,
  execute: function(f) {
    this.funcion = f;
    this.funcion();
  }
};
executor1.execute(objeto.demo);

//Ejemplo 2
// Arrow Function 1
let demo2 = () => {
  console.log("Hola Mundo");
}

// Arrow Function 2
suma = (a, b) => a + b;
console.log(suma(2, 3));

// Arrow Function 3
let autor = {
  nombre: "Christian",
  apellido: "Rodriguez",
  nombreCompleto: function() {
    setTimeout(() => {
      console.log(this.nombre + " " + this.apellido);
    }, 1000);
  }
}
autor.nombreCompleto();

//Call, Apply y Bind
//Ejemplo con call
function executor3(funcion) {
  funcion.call(autor2);
}

let autor2 = {
  nombre: "Christian",
  apellido: "Rodriguez",
  nombreCompleto: function() {
    console.log(this.nombre + " " + this.apellido);
  }
}
executor3(autor2.nombreCompleto);

//Ejemplo con Apply
function executor4(funcion) {
  funcion.apply(autor3);
}

let autor3 = {
  nombre: "Christian",
  apellido: "Rodriguez",
  nombreCompleto: function() {
    console.log("Hola desde Apply");
  }
}

function saludar(tipo) {
  console.log("Hola Christian : " + tipo);
}

saludar.apply(window, ["Apply"]);

//Ejemplo con Bind
function executor5(funcion) {
  funcion();
}

let autor4 = {
  nombre: "Christian",
  apellido: "Rodriguez",
  nombreCompleto: function() {
    console.log("Hola desde Bind");
  }
}

executor5(autor4.nombreCompleto.bind(autor4));