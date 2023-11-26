import { Autenticar } from "../services/auth";

function DeletaConta() {
  // event.preventDefault();
  const cpf = document.getElementById("cpf").value;
  const password = document.getElementById("password").value;

  const { estaAutenticado, conta } = Autenticar(cpf, password);

  if (!estaAutenticado) {
    alert("Usuário ou senha incorretos.")
    return;
  }

  window.localStorage.removeItem(conta.cpf);
  alert("Conta removida com sucesso!");
}

export { DeletaConta };