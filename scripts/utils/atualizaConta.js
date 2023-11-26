// Funciona semelhante ao save changes async com padrao repository no dotnet, sendo que bem mais simples
function AtualizaConta(objConta, operacao, cpf) {
  const conta = JSON.parse(window.localStorage.getItem(cpf));
  switch (operacao) {
    case "DEPOSITAR":
      conta.saldo = objConta.getSaldo();
      conta.historico = objConta.getHistorico();
      window.localStorage.setItem(cpf, JSON.stringify(conta));
      break;

    case "SACAR":
      conta.saldo = objConta.getSaldo();
      conta.historico = objConta.getHistorico();
      window.localStorage.setItem(cpf, JSON.stringify(conta));
      break

    default:
      return;
  }
}

export { AtualizaConta };