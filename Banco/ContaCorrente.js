import { ContaBancaria } from './ContaBancaria.js';

export class ContaCorrente extends ContaBancaria {
  constructor(numero, agencia, saldo, cartaDeCredito) {
    super();
    this.cartaDeCredito = cartaDeCredito;
    this.tipo = 'Corrente';
    this.numero = numero;
    this.agencia = agencia;
    this.saldo = saldo;
  }

  getCartao() {
    return this.cartaDeCredito;
  };

  setCartao(limite) {
    this.cartaDeCredito.limite = limite;
  };
};