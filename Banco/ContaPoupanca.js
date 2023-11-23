import { ContaBancaria } from "./ContaBancaria.js";

export class ContaPoupanca extends ContaBancaria {
  constructor(numero, agencia, saldo) {
    super();
    this.tipo = 'Poupança';
    this.numero = numero;
    this.agencia = agencia;
    this.saldo = saldo;
  };
};