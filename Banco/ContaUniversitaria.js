import { ContaBancaria } from "./ContaBancaria.js";

export class ContaUniversitaria extends ContaBancaria {
  constructor(numero, agencia, saldo) {
    super();
    this.tipo = 'Poupança';
    this.numero = numero;
    this.agencia = agencia;
    this.saldo = saldo;
  };

  sacar(valor) {
    if ((valor <= 500) && (valor > 0)) {
      this.saldo -= valor;
      this.addTransacao("saque", valor);
      return `Você sacou R$ ${valor} com sucesso`;
    }

    return 'Você está tentando sacar um valor inválido para sua conta';
  }
};