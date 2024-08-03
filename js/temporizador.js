class Temporizador {
  constructor() {
    this.contador = document.querySelector(".contador");
    this.tiempoInicialInput = document.querySelector(".tiempo-inicial");
    this.btnIniciar = document.querySelector(".iniciar");
    this.btnPausar = document.querySelector(".pausar");
    this.btnReiniciar = document.querySelector(".reiniciar");
    this.intervalo = null;
    this.tiempoRestante = 0;

    this.btnIniciar.addEventListener("click", () => this.iniciar());
    this.btnPausar.addEventListener("click", () => this.pausar());
    this.btnReiniciar.addEventListener("click", () => this.reiniciar());
  }

  actualizarContador() {
    const minutos = Math.floor(this.tiempoRestante / 60);
    const segundos = this.tiempoRestante % 60;
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    this.contador.textContent = `${horas
      .toString()
      .padStart(2, "0")}:${minutosRestantes
      .toString()
      .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
    this.tiempoRestante--;

    if (this.tiempoRestante < 0) {
      clearInterval(this.intervalo);
      alert("¡Tiempo agotado!");
    }
  }

  iniciar() {
    this.tiempoRestante = parseInt(this.tiempoInicialInput.value);
    this.intervalo = setInterval(() => this.actualizarContador(), 1000);
    this.btnIniciar.disabled = true;
    this.btnPausar.disabled = false;
  }

  pausar() {
    clearInterval(this.intervalo);
    this.btnIniciar.disabled = false;
    this.btnPausar.disabled = true;
  }

  reiniciar() {
    clearInterval(this.intervalo);
    this.tiempoRestante = 0;
    this.contador.textContent = "00:00:00";
    this.btnIniciar.disabled = false;
    this.btnPausar.disabled = true;
  }
}

const temporizador = new Temporizador();
