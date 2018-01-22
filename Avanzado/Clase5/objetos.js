// como declarar un objeto de tipo arreglo
let curso = {
  titulo: 'Curso Profesional de Javascript',
  duracion: 2.2,
  formato: 'video',
  bloque: ['Introduccion', 'Funciones'],
  inscribir: function(usuario) {
    console.log(usuario + " ahora esta inscrito");
  }
}

console.log(curso.titulo);
console.log(curso['titulo']);
console.log(curso.inscribir('Christian'));

// instanciar objetos como JSON
function Curso(titulo) {
  this.titulo = titulo;
  this.inscribir = function(usuario) {
    console.log(usuario + ' se ha inscrito');
  }
}

let cursoRuby = new Curso('Curso Profesional Ruby');
let cursoJavascript = new Curso('Curso Profesional Javascript');

console.log(cursoRuby.titulo);
console.log(cursoJavascript.titulo);

// Clases en Javascript
class Cursos {
  constructor(titulo) {
    this.titulo = titulo;
  }

  inscribir(usuario) {
    console.log(usuario + " se ha inscrito");
  }
}

let javascriptCurso = new Cursos('Curso Profesional Javascript');
console.log(javascriptCurso.titulo);
console.log(javascriptCurso.inscribir("Christian"));

// Herencia en javascript

class Player {
  play() {
    this.video.play();
  }
  duration() {
    return this.video.duration / 100;
  }

}

// Heredamos del metodo player
class Vimeo extends Player {
  open() {
    this.redirectToVimeo(this.video);
  }
}

// Heredamos del metodo player
class Youtube extends Player {
  open() {
    this.redirectToYoutube(this.video);
  }
}

function User() {}
class Admin extends User {}
class CustomDate extends Date {}
class Coleccion extends Array {}

//Sobreescritura de metodos
class User2 {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log("Hola " + this.nombre);
  }
}

class Admin2 extends User2 {
  constructor(nombre) {
    super(nombre);
  }

  saludar() {
    super.saludar();
    console.log("Aqui esta el panel de administrador");
  }
}

let admin = new Admin2("Christian Rodriguez");
console.log(admin.saludar());