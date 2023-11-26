import { VerConta } from './scripts/metodosConta/verConta.js';
import { DepositaValor } from './scripts/metodosConta/depositaValor.js';
import { SacaValor } from './scripts/metodosConta/sacaValor.js';
import { IniciaId } from './scripts/utils/iniciaId.js';
import { CriaConta } from './scripts/metodosConta/criaConta.js';
// import { DeletaConta } from './scripts/metodosConta/deletaConta.js';

const criaContaForm = document.getElementById("criaConta");
const verContaForm = document.getElementById("verConta");
const manipulaConta = document.getElementById("mButtonRealizaOperacao");

IniciaId();

criaContaForm.addEventListener("submit", CriaConta);

verContaForm.addEventListener("submit", VerConta);

manipulaConta.addEventListener("click", () => {
  const operacao = document.getElementById("mOperacoes").value;

  if (operacao === "DEPOSITAR") {
    return DepositaValor();
  }

  return SacaValor();
});