import { ContaCorrente } from "../../Banco/ContaCorrente.js";
import { ContaPoupanca } from "../../Banco/ContaPoupanca.js";
import { ContaUniversitaria } from "../../Banco/ContaUniversitaria.js";

function TransformaContaEmObjeto(conta) {
  switch (conta.tipo) {
    case "Corrente":
      const contaCorrente = new ContaCorrente();
      contaCorrente.agencia = conta.agencia;
      contaCorrente.numero = conta.numeroDaConta;
      contaCorrente.saldo = Number(conta.saldo);
      contaCorrente.cartaDeCredito = conta.agencia;
      contaCorrente.historico = conta.historico;
      return contaCorrente;
      break;

    case "Poupança":
      const contaPoupanca = new ContaPoupanca();
      contaPoupanca.agencia = conta.agencia;
      contaPoupanca.numero = conta.numeroDaConta;
      contaPoupanca.saldo = Number(conta.saldo)
      contaPoupanca.historico = conta.historico;
      return contaPoupanca;
      break;

    case "Universitária":
      const contaUniversitaria = new ContaUniversitaria();
      contaUniversitaria.agencia = conta.agencia;
      contaUniversitaria.numero = conta.numeroDaConta;
      contaUniversitaria.saldo = Number(conta.saldo);
      contaUniversitaria.historico = conta.historico;
      return contaUniversitaria;
      break;

    default:
      alert("Houve um erro ao encontrar sua conta, tente novamente mais tarde.")
  }
}

export { TransformaContaEmObjeto };