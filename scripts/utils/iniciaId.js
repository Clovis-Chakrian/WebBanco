function IniciaId () {
  if (!window.localStorage.getItem('numero')) {
    window.localStorage.setItem('numero', 0);
  }
}

export { IniciaId };