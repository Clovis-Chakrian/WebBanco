import { Autenticar } from "../services/auth.js";

function VerConta(event) {
  event.preventDefault();
  const cpf = document.getElementById("cpfVer").value;
  const password = document.getElementById("passVer").value;

  const { estaAutenticado, conta } = Autenticar(cpf, password)

  if (!estaAutenticado) {
    alert("Usuário ou senha incorretos");
    return;
  }

  const titular = document.getElementById('titular');
  const cpfConta = document.getElementById('cpfConta');
  const saldo = document.getElementById('saldoP');
  const tipo = document.getElementById('tipoP');
  const numero = document.getElementById('numeroP');
  const agencia = document.getElementById('agenciaP');

  titular.innerText = `Titular: ${conta.nome}`;
  cpfConta.innerText = `CPF: ${conta.cpf}`;
  saldo.innerText = `Saldo: ${conta.saldo}`;
  tipo.innerText = `Tipo de conta: ${conta.tipo}`;
  numero.innerText = `Número da conta: ${conta.numeroDaConta}`;
  agencia.innerText = `Agência: ${conta.agencia}`;
}

export { VerConta };