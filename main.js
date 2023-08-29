// Seleccionar la columna

const selectorColumna = () => {
  return Math.floor(Math.random() * 9) + 1;
};

const llenarCasilla = (num_fila) => {
  const columna = selectorColumna();
  const fila = document.querySelector(`.fila${num_fila}`);
  const casilla = fila.children[columna - 1];

  // Si la casilla esta vacia se llena. Sino se vuelve a intentar.

  if (casilla.innerText === "") {
    casilla.innerText = selectorNumero(columna);
  } else {
    llenarCasilla(num_fila);
  }
  console.log(`Fila: ${num_fila} Columna: ${columna}`);
};
const llenarCarton = () => {
  llenarCasilla(1);
  llenarCasilla(2);
  llenarCasilla(3);
};

// Boton nuevo carton

let btnNuevoCarton = document.getElementById("nuevo-carton");

// Vaciar carton

const vaciarCarton = () => {
  const casillas = document.querySelectorAll(".celda");
  casillas.forEach((casilla) => {
    casilla.innerText = "";
  });
};

const nuevoCarton = () => {
  numeros = [];
  for (let i = 1; i <= 5; i++) {
    llenarCarton();
  }
};

btnNuevoCarton.addEventListener("click", () => {
  vaciarCarton();
  nuevoCarton();
  console.clear();
  console.log("Nuevo carton generado");
});

// Generador de numeros a colocar

let numeros = [];
const selectorNumero = (columna) => {
  let numero = 0;
  switch (columna) {
    case 1:
      numero = Math.floor(Math.random() * 9) + 1;
      break;
    case 2:
      numero = Math.floor(Math.random() * 9) + 10;
      break;
    case 3:
      numero = Math.floor(Math.random() * 9) + 20;
      break;
    case 4:
      numero = Math.floor(Math.random() * 9) + 30;
      break;
    case 5:
      numero = Math.floor(Math.random() * 9) + 40;
      break;
    case 6:
      numero = Math.floor(Math.random() * 9) + 50;
      break;
    case 7:
      numero = Math.floor(Math.random() * 9) + 60;
      break;
    case 8:
      numero = Math.floor(Math.random() * 9) + 70;
      break;
    default:
      numero = Math.floor(Math.random() * 11) + 80;
      break;
  }

  if (numeros.includes(numero)) {
    // Si el número ya fue generado, llamamos a selectorNumero nuevamente
    return selectorNumero(columna);
  } else {
    // Si el número es nuevo, lo almacenamos en el array y lo devolvemos
    numeros.push(numero);
    return numero;
  }
};

// Inicia con un carton generado, y cuando se recarga la pagina se vuelve a generar otro.

nuevoCarton();
