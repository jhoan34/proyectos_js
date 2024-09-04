class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));

    this.size.resize(newWidth, newHeight);
  }

  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const nuevaX = Math.max(0, Math.min(newPosition.x, maxX));
    const nuevaY = Math.max(0, Math.min(newPosition.y, maxY));

    this.position.move(nuevaX, nuevaY);
  }
}

function changeWindow (programWindow) {

  programWindow.move(new Position())
  programWindow.resize(new size(400,300))
  rogramWindow.move(new Position(100,150))

}

// Crear una instancia de ProgramWindow
const programWindow = new ProgramWindow();

// Crear una nueva posición
const nuevaPosicion = new Position(20, 20);
console.log(l, "sasa");

// Mover la ventana a la nueva posición
programWindow.move(nuevaPosicion);

// Mostrar la posición actual
console.log(programWindow.position.x); // Debería imprimir 20
console.log(programWindow.position.y); // Debería imprimir 20


const objeto = {
  constructor: function(titulo, autor, anoPublicacion) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacion = anoPublicacion;
  
    this.mostrarInfo = function() {
      console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Año de Publicación: ${this.anoPublicacion}`);
    }
  }
};

let libro1 = new objeto.constructor('La República', 'Platón', -380);

libro1.mostrarInfo(); 

console.log(libro1);



const l = {
  nombre: "lucas" ,
  saludar () {
      console.log(this.nombre)
  }

}  

function otro () {
  nombre ="robeto"
  l.saludar()
}


otro()
console.log(this.nombre)
