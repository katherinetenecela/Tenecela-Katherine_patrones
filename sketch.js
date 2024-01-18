const celdas = [];
const RETICULA = 4;
const ancho; //altura de celda
const alto; //anchura de celda

const azulejos = [];
const NA = 16; // numero de azulejos

const reglas = [
  // reglas de los bordes de cada azulejo
  {
    //Tile 0
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //Tile 1
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //Tile 2
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //Tile 3
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //Tile 4
    UP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //Tile 5
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },
  {
    //Tile 6
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //Tile 7
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //Tile 8
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //Tile 9
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //Tile 10
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //Tile 11
    UP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //Tile 12
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //Tile 13
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //Tile 14
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },
  {
    //Tile 15
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
];
function preload() {
  for (let i = 0; i < NA; i++) {
    azulejos[i] = loadImage(`azulejos/tile${i}.png`);
  }
}

function setup() {
  createCanvas(1080, 1080);
  ancho = width / RETICULA;
  alto = height / RETICULA;

  let opcionesI = [];
  for (let i = 0; i < azulejos.length; i++) {
    opcionesI.push(i);
  }

  for (let i = 0; i < RETICULA * RETICULA; i++) {
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    };
  }

 // celdas[8].colapsada = true;
 // celdas[3].colapsada = true;

 // celdas[12].colapsada = [5, 6, 8];
  //celdas[4].colapsada = [4, 7, 12];
  //celdas[1].colapsada = [6, 4, 8, 10];
 // celdas[5].colapsada = [11, 6, 4, 8, 10];
  
}

function draw() {
  const celdasDisponibles = celdas.filter((celda) => {
  return celda.colapsada == false;});

  if (celdasDisponibles.length > 0) {
    celdasDisponibles.sort((a, b) => {
      return a.opciones.length - b.opciones.length;
     });

     const celdasPorColapsar = celdasDisponibles.filter((celda) => {
      return(
      celda.opciones.length == celdasDisponibles[0].opciones.length
     );
  });
  

  const celdaSeleccionada = random(celdasPorColapsar);
  celdaSeleccionada.colapsada = true;


  const opcionSeleccionada = random(celdaSeleccionada.opciones);

  celdaSelecionada.opciones = [opcionSeleccionada];

  print(celdasActuales);

  for(let x =0;){
    
  }

  }
  
  noLoop();
}
