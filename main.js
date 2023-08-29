const nuevoCarton = document.getElementById("nuevo-carton");

const fila1 = document.querySelector(".fila1");
const tercerCelda = fila1.children[2];

nuevoCarton.addEventListener("click", () => {
  tercerCelda.innerHTML = "";
  const parrafo = document.createElement("p");
  parrafo.textContent = "24";
  tercerCelda.appendChild(parrafo);
  console.log("Nuevo carton");
});

// Random

// Seleccionar la columna
const selectorColumna = Math.floor(Math.random() * 9) + 1;

console.log(selectorColumna);
