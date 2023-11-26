export class ContaBancaria {
  constructor(titular, numero, agencia, tipo, saldo) {
    this.titular = titular;
    this.numero = numero;
    this.agencia = agencia;
    this.tipo = tipo;
    this.saldo = saldo;
    this.historico = [];
  };

  getNumero() {
    return this.numero;
  };

  getSaldo() {
    return Number(this.saldo);
  };

  getHistorico() {
    return this.historico;
  }

  setSaldo() {
    return this.saldo();
  };

  sacar(valor) {
    this.saldo -= valor;
    this.addTransacao("saque", valor);
    return `Você sacou R$ ${valor} com sucesso`;
  };

  depositar(valor) {
    this.saldo += valor;
    this.addTransacao("deposito", valor);
    return "Deposito realizado com sucesso!"
  };

  addTransacao(tipo, valor) {
    const transacao = {
      tipo,
      valor,
      data: new Date()
    };

    this.historico = [...this.historico, transacao];
  }
};