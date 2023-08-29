// Seleccionar la columna

const selectorColumna = () => {
  return Math.floor(Math.random() * 9) + 1;
};

const llenarCasilla = (num_fila) => {
  const columna = selectorColumna();
  const fila = document.querySelector(`.fila${num_fila}`);
  const casilla = fila.children[columna - 1];
  // Si la casilla no esta con background rojo, se llena. Sino se vuelve a intentar.
  // if (casilla.style.backgroundColor !== "red") {
  if (casilla.innerText === "") {
    casilla.innerText = "num";
  } else {
    llenarCasilla(num_fila);
  }
  console.log(`Fila: ${num_fila} Columna: ${columna}`);

  // Random depende num de columna
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
  for (let i = 1; i <= 5; i++) {
    llenarCarton();
  }
};

btnNuevoCarton.addEventListener("click", () => {
  vaciarCarton();
  nuevoCarton();
  console.log("Nuevo carton generado");
});
