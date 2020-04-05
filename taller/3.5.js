const pagina = {
  alIniciar() {
    console.log('Se ha Iniciado el ciclo de vida');
  },
  alFinalizar() {
    console.log('Se ha Finalizado el ciclo de vida');
  }
};


let evento = 'alFinalizar'
pagina[evento]();