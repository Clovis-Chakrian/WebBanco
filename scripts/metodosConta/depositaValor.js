import { Autenticar } from "../services/auth.js";
import { AtualizaConta } from "../utils/atualizaConta.js";
import { TransformaContaEmObjeto } from "../utils/transformaEmObjeto.js";

function DepositaValor() {
  // event.preventDefault();
  const cpf = document.getElementById("mCpf").value;
  const password = document.getElementById("mPassword").value;
  const valorParaDepositar = document.getElementById("mValor").value;

  const { estaAutenticado, conta } = Autenticar(cpf, password);

  if (!estaAutenticado) {
    alert("Usuário ou senha incorretos.")
    return;
  }

  const objConta = TransformaContaEmObjeto(conta);
  const msgRetorno = objConta.depositar(Number(valorParaDepositar));
  // console.log(objConta.saldo);
  AtualizaConta(objConta, "DEPOSITAR", conta.cpf);
  alert(msgRetorno);
}

export { DepositaValor }