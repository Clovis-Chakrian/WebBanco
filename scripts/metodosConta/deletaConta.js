import { Autenticar } from "../services/auth.js";

function DeletaConta() {
  // event.preventDefault();
  const cpf = document.getElementById("mCpf").value;
  const password = document.getElementById("mPassword").value;

  const { estaAutenticado, conta } = Autenticar(cpf, password);

  if (!estaAutenticado) {
    alert("Usuário ou senha incorretos.")
    return;
  }

  window.localStorage.removeItem(conta.cpf);
  alert("Conta removida com sucesso!");
}

export { DeletaConta };