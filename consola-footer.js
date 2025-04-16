const texto = "> Profesores:\nAlex N. Perea Lazo \nBrian A. Rivera \nCentro Educativo Nonogasta";
let i = 0;
const consola = document.querySelector(".console-effect");

function escribir() {
  if (i < texto.length) {
    consola.textContent += texto.charAt(i);
    i++;
    setTimeout(escribir, 50);
  }
}

window.addEventListener("DOMContentLoaded", escribir);