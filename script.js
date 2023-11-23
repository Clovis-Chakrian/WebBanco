import { ContaCorrente } from './Banco/ContaCorrente.js';
import { ContaUniversitaria } from './Banco/ContaUniversitaria.js';
import { ContaPoupanca } from './Banco/ContaPoupanca.js';

const agencias = ['1123', '2123', '3123', '4123', '5123'];
if (!window.localStorage.getItem('numero')) {
  window.localStorage.setItem('numero', 0);
}

const criaContaForm = document.getElementById("criaConta");
const verContaForm = document.getElementById("verConta");
// const verContaForm = document.getElementById("verConta");

function criaConta(event) {
  event.preventDefault();
  let numeroAtual = Number(window.localStorage.getItem('numero'));

  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const saldo = document.getElementById("saldo").value;
  const password = document.getElementById("password").value;
  const tipo = document.getElementById("conta").value;
  const numeroDaConta = numeroAtual + 1;
  const agencia = agencias[Math.floor(Math.random() * 5)];

  const conta = {
    nome,
    cpf,
    saldo,
    password,
    tipo,
    numeroDaConta,
    agencia
  };

  window.localStorage.setItem(cpf, JSON.stringify(conta));
  window.localStorage.setItem('numero', String(numeroDaConta))
}

function ObjetoConta(conta) {
  switch (conta.tipo) {
    case "Corrente":
      const contaCorrente = new ContaCorrente();
      contaCorrente.agencia = conta.agencia;
      contaCorrente.numero = conta.numeroDaConta;
      contaCorrente.saldo = conta.saldo;
      contaCorrente.cartaDeCredito = conta.agencia;

      // console.log({ ...conta }, "Corrente", contaCorrente)
      // contaCorrente.sacar(500);
      // console.log({ ...conta }, "Corrente", contaCorrente)
      return contaCorrente;
      break;

    case "Poupança":
      console.log({ ...conta }, "Poupança")
      break;

    case "Universitária":
      console.log({ ...conta }, "Universitaria")
      break;

    default:
      alert("Houve um erro ao encontrar sua conta, tente novamente mais tarde.")
  }
}

function verConta(event) {
  event.preventDefault();
  const cpf = document.getElementById("cpfVer").value;
  const password = document.getElementById("passVer").value;

  console.log(!window.localStorage.getItem(Number(cpf)))
  if (!window.localStorage.getItem(Number(cpf))) {
    alert('Senha ou CPF incorretos');
    return;
  }

  const contaJson = JSON.parse(window.localStorage.getItem(cpf));
  if (contaJson.password !== password) {
    alert('Senha ou CPF incorretos');
    return;
  }

  // alert(conta.nome)
  // console.log(conta)
  const c1 = ObjetoConta(contaJson);
  console.log(c1, "Yey");

  const titular = document.getElementById('titular');
  const cpfConta = document.getElementById('cpfConta');
  const saldo = document.getElementById('saldoP');
  const tipo = document.getElementById('tipoP');
  const numero = document.getElementById('numeroP');
  const agencia = document.getElementById('agenciaP');

  titular.innerText = `${titular.innerText} ${contaJson.nome}`;
  cpfConta.innerText = `${cpfConta.innerText} ${contaJson.cpf}`;
  saldo.innerText = `${saldo.innerText} ${contaJson.saldo}`;
  tipo.innerText = `${titular.innerText} ${contaJson.tipo}`;
  numero.innerText = `${numero.innerText} ${contaJson.numeroDaConta}`;
  agencia.innerText = `${agencia.innerText} ${contaJson.agencia}`;
}

function sacarValor(event) {
  event.preventDefault();
  const cpf = document.getElementById("cpf").value;
  const password = document.getElementById("password").value;

  const validCpf = window.localStorage.getItem("cpf", cpf);
  const validPass = window.localStorage.getItem("password", password);

  if (validCpf != cpf || password != validPass) {
    alert('Login ou senha incorretos');
    return;
  }

  linkToAccount.click();
}

criaContaForm.addEventListener("submit", criaConta);
verContaForm.addEventListener("submit", verConta);
// verContaForm.addEventListener("submit", verConta);