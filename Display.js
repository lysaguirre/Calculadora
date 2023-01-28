class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorAnterior = displayValorAnterior;
    this.displayValorActual = displayValorActual;
    this.calculadora = new Calculadora();
    this.valorActual = "";
    this.ValorAnterior = "";
  }

  agregarNumero(numero) {
    this.valorActual = this.value + numero;
    this.imprimirValores();
  }

  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = this.ValorAnterior;
  }
}
