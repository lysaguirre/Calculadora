const displayValorAnterior = document.getElementsByClassName(
  "calculadora__display-anterior"
);
const displayValorActual = document.getElementsByClassName(
  "calculadora__display-actual"
);

const btnNumeros = document.querySelectorAll(".numero");
const btnOperadores = document.querySelectorAll("operador");

const display = new Display(displayValorAnterior, displayValorActual);

btnNumeros.forEach((boton) => {
  boton.addEventListener("click", () => {
    display.agregarNumero(boton.innerHTML);
  });
});
