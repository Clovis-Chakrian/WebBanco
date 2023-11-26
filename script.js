import { VerConta } from './scripts/metodosConta/verConta.js';
import { DepositaValor } from './scripts/metodosConta/depositaValor.js';
import { SacaValor } from './scripts/metodosConta/sacaValor.js';
import { IniciaId } from './scripts/utils/iniciaId.js';
import { CriaConta } from './scripts/metodosConta/criaConta.js';
import { DeletaConta } from './scripts/metodosConta/deletaConta.js';
import { MostraGrafico } from './scripts/services/mostraGrafico.js';
// import { DeletaConta } from './scripts/metodosConta/deletaConta.js';

const criaContaForm = document.getElementById("criaConta");
const verContaForm = document.getElementById("verConta");
const manipulaConta = document.getElementById("mButtonRealizaOperacao");
const deletaConta = document.getElementById("deletarConta");
const mostraGrafico = document.getElementById("mostraGrafico");

IniciaId();

criaContaForm.addEventListener("submit", CriaConta);

verContaForm.addEventListener("submit", VerConta);

deletaConta.addEventListener("click", DeletaConta)

manipulaConta.addEventListener("click", () => {
  const operacao = document.getElementById("mOperacoes").value;

  if (operacao === "DEPOSITAR") {
    return DepositaValor();
  }

  return SacaValor();
});

mostraGrafico.addEventListener("click", MostraGrafico);

// const ctx = document.getElementById('myChart');

// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });