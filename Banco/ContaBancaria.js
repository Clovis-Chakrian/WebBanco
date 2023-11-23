export class ContaBancaria {
  constructor(numero, agencia, tipo, saldo) {
    this.numero = numero;
    this.agencia = agencia;
    this.tipo = tipo;
    this.saldo = saldo;
  };

  getNumero() {
    return this.numero;
  };

  getSaldo() {
    return this.saldo;
  };

  setSaldo() {
    return this.saldo();
  };

  sacar(valor) {
    this.saldo -= valor;
  };

  depositar(valor) {
    this.saldo += this.saldo;
  };
};