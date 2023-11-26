function Autenticar(cpf, password) {
  if (!window.localStorage.getItem(Number(cpf))) {
    return {
      estaAutenticado: false,
      conta: null
    };
  }

  const contaJson = JSON.parse(window.localStorage.getItem(cpf));

  if (contaJson.password !== password) {
    return {
      estaAutenticado: false,
      conta: null
    };
  }

  return {
    estaAutenticado: true,
    conta: contaJson
  };
}

export { Autenticar };