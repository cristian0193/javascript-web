//condicionales (if, else)
if (true) console.log("condicion cumplida lineal") //en una sola linea

if (true) {
  console.log("condicion cumplida bloque") //en bloque de llaves
}

//Ejercicio # 1
let edadMayor = 10;

if (edadMayor > 18) {
  console.log("Eres mayor de edad")
} else {
  console.log("No eres mayor de edad tienes : " + edadMayor)
}

//Ejercicio # 2
let calificacion = 9;

if (calificacion == 10) {
  console.log("Excelente")
} else if (calificacion > 7) {
  console.log("Muy Bien")
} else if (calificacion > 5) {
  console.log("Puedes Mejorar")
} else {
  console.log("Reprobado")
}

//ciclos (while, for, do while)

while (false) {
  console.log("presione cancelar para terminar la ejecucion")
}

do {
  console.log("presione cancelar para terminar la ejecucion")
} while (false);

for (var i = 1; i < 11; i++) {
  console.log(i);
}

//tipos de datos indefinidos (undefined, null)
numero = null;
console.log(typeof numero); //object
console.log(null == undefined)
//undefined: cuando no se a declaro la variables
console.log("adadd" * 3)
console.log(100 / 0);