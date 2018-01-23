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

// Metodos accesores
class Usuario3 {
  constructor(nombre) {
    this._nombre = nombre;
  }

  get name() {
    return this._nombre.charAt(0).toUpperCase() + this._nombre.slice(1);
  }

  set name(nombre) {
    this._nombre = nombre;
  }
}

let user3 = new Usuario3("cristian");
user3.name = "Luisa"
console.log(user3.name);

// Metodos estaticos
class Usuario4 {
  constructor(permiso = "lectura") {
    this.permiso = permiso
  }

  static createAdmin() {
    let user4 = new Usuario4("Administrador");
    return user4;
  }
}

let administrador = Usuario4.createAdmin();
console.log(administrador);

// __Proto__
let user5 = {
  nombre: "Christian"
};
let animal = Object.create(null);
animal.vivo = true;
animal.estaVivo = function() {
  if (this.vivo) console.log("Sigue vivo");
}
let perro = Object.create(animal);
perro.estaVivo();

//propiedad prototype
function User6() {}
let user6 = new User6();
console.log(user6.__proto__);
console.log(User6.prototype);