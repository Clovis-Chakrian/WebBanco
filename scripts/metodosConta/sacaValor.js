import { Autenticar } from "../services/auth.js";
import { AtualizaConta } from "../utils/atualizaConta.js";
import { TransformaContaEmObjeto } from "../utils/transformaEmObjeto.js";

function SacaValor() {
  const cpf = document.getElementById("mCpf").value;
  const password = document.getElementById("mPassword").value;
  const valorParaSacar = document.getElementById("mValor").value;

  const { estaAutenticado, conta } = Autenticar(cpf, password);

  if (!estaAutenticado) {
    alert("Usuário ou senha incorretos.")
    return;
  }

  const objConta = TransformaContaEmObjeto(conta);
  const msgRetorno = objConta.sacar(Number(valorParaSacar));
  AtualizaConta(objConta, "SACAR", conta.cpf);
  alert(msgRetorno);
}

export { SacaValor };