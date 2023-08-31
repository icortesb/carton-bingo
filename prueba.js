// Buscamos los elementos del DOM que vamos a utilizar
// Filas
let fila1 = document.querySelector(".fila1");
let fila2 = document.querySelector(".fila2");
let fila3 = document.querySelector(".fila3");

// Boton
let boton = document.getElementById("nuevo-carton");

const selectorColumna = () => {
  return Math.floor(Math.random() * 9) + 1;
};

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

const llenarPrimerFila = () => {
  let columnasUtilizadas = [];
  let numerosUtilizados = [];

  while (numerosUtilizados.length < 5) {
    if (columnasUtilizadas.length >= 5) {
      break; // Detener el bucle si ya se han utilizado 5 columnas únicas
    }

    let columna = selectorColumna();
    let numero = selectorNumero(columna);

    if (
      !columnasUtilizadas.includes(columna) &&
      !numerosUtilizados.includes(numero)
    ) {
      columnasUtilizadas.push(columna);
      numerosUtilizados.push(numero);
      fila1.children[columna - 1].innerText = numero;
      fila1.children[columna - 1].classList.add("active");
    }
  }
};

// Segunda fila

const llenarSegundaFila = (fila1, numerosUtilizadosFila1) => {
  let columnasUtilizadas = [];
  let numerosUtilizados = [...numerosUtilizadosFila1];

  while (numerosUtilizados.length < 5) {
    if (columnasUtilizadas.length >= 5) {
      break;
    }

    let columna = selectorColumna();
    let numero = selectorNumero(columna);

    let numeroFila1 = fila1.children[columna - 1].innerText;

    if (
      !columnasUtilizadas.includes(columna) &&
      !numerosUtilizados.includes(numero) &&
      !numerosUtilizadosFila1.includes(numero) &&
      numero >= numeroFila1
    ) {
      columnasUtilizadas.push(columna);
      numerosUtilizados.push(numero);
      fila2.children[columna - 1].innerText = numero;
      fila2.children[columna - 1].classList.add("active");
    }
  }
};

// Tercer fila

const llenarTercerFila = (
  fila1,
  fila2,
  numerosUtilizadosFila1,
  numerosUtilizadosFila2
) => {
  let columnasUtilizadas = [];
  let numerosUtilizados = [
    ...numerosUtilizadosFila1,
    ...numerosUtilizadosFila2,
  ];

  while (numerosUtilizados.length < 5) {
    if (columnasUtilizadas.length >= 5) {
      break;
    }

    let columna = selectorColumna();
    let numero = selectorNumero(columna);
    console.log(`Tercer fila, columna:${columna}, numero: ${numero}`);

    let numeroFila1 = fila1.children[columna - 1].innerText;
    let numeroFila2 = fila2.children[columna - 1].innerText;

    if (
      !columnasUtilizadas.includes(columna) &&
      !numerosUtilizados.includes(numero) &&
      !numerosUtilizadosFila2.includes(numero) &&
      numero >= numeroFila2 &&
      numero >= numeroFila1
    ) {
      columnasUtilizadas.push(columna);
      numerosUtilizados.push(numero);
      fila3.children[columna - 1].innerText = numero;
      fila3.children[columna - 1].classList.add("active");
    }
  }
};

const generarCarton = () => {
  let numerosUtilizadosFila1 = [];
  llenarPrimerFila(numerosUtilizadosFila1);

  let numerosUtilizadosFila2 = [];
  llenarSegundaFila(fila1, numerosUtilizadosFila2);

  llenarTercerFila(
    fila1,
    fila2,
    numerosUtilizadosFila1,
    numerosUtilizadosFila2
  );
};

generarCarton();

// Nuevo carton.
