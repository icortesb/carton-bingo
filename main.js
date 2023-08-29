// Seleccionar la columna

const selectorColuma = () => {
  return Math.floor(Math.random() * 9) + 1;
};

const llenarCasilla = (num_fila) => {
  const columna = selectorColuma();
  const fila = document.querySelector(`.fila${num_fila}`);
  const casilla = fila.children[columna - 1];
  // Si la casilla no esta con background rojo, se llena. Sino se vuelve a intentar.
  if (casilla.style.backgroundColor !== "red") {
    casilla.style.backgroundColor = "red";
  } else {
    llenarCasilla(num_fila);
  }
  console.log(`Fila: ${num_fila} Columna: ${columna}`);

  // Random depende num de columna
};

const prueba = document.getElementById("prueba");
prueba.addEventListener("click", () => {
  llenarCasilla(1);
  llenarCasilla(2);
  llenarCasilla(3);
});

const llenarCarton = () => {
  llenarCasilla(1);
  llenarCasilla(2);
  llenarCasilla(3);
  console.log("Carton lleno");
};

// Vaciar carton

const vaciarCarton = () => {
  const casillas = document.querySelectorAll(".celda");
  casillas.forEach((casilla) => {
    casilla.style.backgroundColor = "white";
  });
  console.log("Carton vacio");
};

// Boton nuevo carton

let btnNuevoCarton = document.getElementById("nuevo-carton");
const nuevoCarton = () => {
  for (let i = 1; i <= 5; i++) {
    llenarCarton();
  }
};

btnNuevoCarton.addEventListener("click", () => {
  vaciarCarton();
  nuevoCarton();
});
