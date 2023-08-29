// Generar un arreglo con números del 1 al 90
const numeros = Array.from({ length: 90 }, (_, i) => i + 1);

// Mezclar los números aleatoriamente
shuffleArray(numeros);

// Obtener una referencia al contenedor del cartón
const carton = document.querySelector(".carton");

// Llenar las celdas del cartón
for (let fila = 0; fila < 3; fila++) {
  const filaDiv = document.createElement("div");
  filaDiv.classList.add("fila");

  for (let columna = 0; columna < 9; columna++) {
    const celda = document.createElement("div");
    celda.classList.add("celda");

    // Calcular el índice del número correspondiente a esta celda
    const numeroIndex = fila * 5 + columna;
    const numero = numeros[numeroIndex];

    // Asignar el número a la celda
    celda.textContent = numero;

    filaDiv.appendChild(celda);
  }

  carton.appendChild(filaDiv);
}

// Función para mezclar un arreglo aleatoriamente
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
