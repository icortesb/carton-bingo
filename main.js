// Seleccionar la columna

const selectorColumna = () => {
  return Math.floor(Math.random() * 9) + 1;
};

// Llenar fila

const llenarFila = (num_fila) => {
  const columna = selectorColumna();
  const fila = document.querySelector(`.fila${num_fila}`);
  const casilla = fila.children[columna - 1];

  // Si la casilla esta vacia se llena. Sino se vuelve a intentar.

  if (casilla.innerText === "") {
    casilla.innerText = selectorNumero(columna);
    casilla.classList.add("active");
  } else {
    llenarFila(num_fila);
  }
};
const llenarCarton = () => {
  llenarFila(1);
  llenarFila(2);
  llenarFila(3);
};

// Click en casilla activa para pintarla

const casillaActiva = document.querySelectorAll(".active");

const pintarCasilla = (casilla) => {
  if (casilla.innerText !== "") {
    casilla.classList.add("pintada");
  }
};

casillaActiva.forEach((casilla) => {
  casilla.addEventListener("click", () => {
    pintarCasilla(casilla);
  });
});

// Vaciar carton

const nuevoCarton = () => {
  numeros = [];
  for (let i = 1; i <= 5; i++) {
    llenarCarton();
  }

  const casillasActivas = document.querySelectorAll(".active");
  casillasActivas.forEach((casilla) => {
    // Primero, removemos cualquier evento de clic existente
    casilla.removeEventListener("click", pintarCasilla);

    // Luego, verificamos si la casilla está vacía antes de agregar el nuevo evento
    if (casilla.innerText !== "") {
      casilla.addEventListener("click", () => {
        pintarCasilla(casilla);
      });
    }
  });
};

const vaciarCarton = () => {
  const casillas = document.querySelectorAll(".celda");
  casillas.forEach((casilla) => {
    casilla.innerText = "";
    casilla.classList.remove("active", "pintada");
    casilla.removeEventListener("click", pintarCasilla);
  });
};

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

// Boton nuevo carton

let btnNuevoCarton = document.getElementById("nuevo-carton");

btnNuevoCarton.addEventListener("click", () => {
  console.log("Click");
  vaciarCarton();
  nuevoCarton();
});
