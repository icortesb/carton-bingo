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
      numero = Math.floor(Math.random() * 10) + 81;
      break;
  }

  if (numeros.includes(numero)) {
    return selectorNumero(columna); // CAMBIAR porque si numero + 1 no se puede usar igual lo coloca. Puede salir mayor al rango de columna. Cambiar la logia en las funciones especificas de fila no aca.
  } else {
    // Si el número es nuevo, lo almacenamos en el array y lo devolvemos
    numeros.push(numero);
    return numero;
  }
};
let columnasUtilizadas = [];
let numerosUtilizados = [];

const llenarPrimerFila = () => {
  while (numerosUtilizados.length < 5) {
    if (columnasUtilizadas.length >= 5) {
      break;
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

const llenarSegundaFila = () => {
  let columnasUtilizadas = [];
  let numerosUtilizados = [];
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

const llenarTercerFila = () => {
  try {
    let columnasUtilizadas = [];
    let numerosUtilizados = [];

    while (numerosUtilizados.length < 5) {
      if (columnasUtilizadas.length >= 5) {
        break;
      }

      let columna = selectorColumna();
      let numero = selectorNumero(columna);

      let numeroFila1 = fila1.children[columna - 1].innerText;
      let numeroFila2 = fila2.children[columna - 1].innerText;

      if (
        !columnasUtilizadas.includes(columna) &&
        !numerosUtilizados.includes(numero) &&
        numero >= numeroFila1 &&
        numero >= numeroFila2
      ) {
        columnasUtilizadas.push(columna);
        numerosUtilizados.push(numero);
        fila3.children[columna - 1].innerText = numero;
        fila3.children[columna - 1].classList.add("active");
      }
    }
  } catch (error) {
    window.location.reload();
  }
};

const generarCarton = () => {
  llenarPrimerFila();
  llenarSegundaFila();
  llenarTercerFila();
};

// Nuevo carton.

generarCarton();

boton.addEventListener("click", () => {
  window.location.reload();
});

// Calcular cartones posibles

// Vamos a calcular cantidad de combinaciones posibles por columna y multiplicarlas entre si llenando unicamente 5 casilleros por fila y asumiendo que quedan 4 sin pintar.

// Calculamos el coeficiente binomial C(9, 3) por columna. 9 es el total de numeros posibles y 3 es la cantidad de numeros que elegimos. Por la ultima fila, sera C(10, 3) para sumar el 90.


const calcularFactorial = (n) => {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
};


const coeficienteBinomial = (n, k) => {
  return calcularFactorial(n) / (calcularFactorial(k) * calcularFactorial(n - k));
};



let resultado = 1;
for (i = 0; i < 4; i++) {
  resultado = resultado * coeficienteBinomial(9, 3);
}

// Resultado sin permutaciones.
resultado = resultado * coeficienteBinomial(10, 3);


document.getElementById("cartones-posibles").innerText = `La cantidad de cartones posibles es ${resultado}.`;

// Calcular la probabilidad de adivinar los 15 numeros desordenados en 40 bolas.

const calcularProbabilidad = (k, n, p) => {
  return (coeficienteBinomial(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k));
};

let probabilidad = calcularProbabilidad(15, 40, 1 / 90);
probabilidad = probabilidad.toFixed(20);

document.getElementById("probabilidad").innerText = `La probabilidad de adivinar los 15 numeros en 40 bolas es de ${probabilidad}.`;