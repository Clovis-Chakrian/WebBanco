function MostraGrafico() {
  const canva = document.getElementById('grafico');
  const cpf = document.getElementById("gCpf").value;
  const tipoGrafico = document.getElementById("graficosTipos").value;

  const conta = JSON.parse(window.localStorage.getItem(cpf));
  console.log(conta)
  const transacoesSaque = conta.historico.filter(transacao => transacao.tipo === 'saque');
  const transacoesDeposito = conta.historico.filter(transacao => transacao.tipo === 'deposito');
  const transacoes = [];
  const transacoesDatas = [];
  conta.historico.forEach(transacao => {
    if (transacao.tipo === 'saque') {
      transacoes.push(-transacao.valor);
    } else {
      transacoes.push(transacao.valor);
    }

    transacoesDatas.push(transacao.data);
  });

  let chartStatus = Chart.getChart("grafico");

  if (chartStatus != undefined) {
    chartStatus.destroy();
  }

  switch (tipoGrafico) {
    case "barra":
      new Chart(canva, {
        type: 'bar',
        data: {
          labels: ['Saques', 'Depositos'],
          datasets: [{
            label: 'Quantidades de operações realizadas por tipo',
            data: [transacoesSaque.length, transacoesDeposito.length],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      break;

    case "pizza":
      new Chart(canva, {
        type: 'pie',
        data: {
          labels: ['Saques', 'Depositos'],
          datasets: [{
            label: 'Quantidades de operações realizadas por tipo',
            data: [transacoesSaque.length, transacoesDeposito.length],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      break;

    case "linha":
      new Chart(canva, {
        type: 'line',
        data: {
          labels: transacoesDatas,
          datasets: [{
            label: 'Histórico geral de transações',
            data: transacoes,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }
      )
      break;

    default:
      geraBarra([transacoesSaque.length, transacoesDeposito.length], canva);
      break;
  }

  // console.log(transacoes);
  // new Chart(canva, {
  //   type: 'bar',
  //   data: {
  //     labels: ['Saques', 'Depositos'],
  //     datasets: [{
  //       label: 'Quantidades de operações realizadas por tipo',
  //       data: [transacoesSaque.length, transacoesDeposito.length],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       height: 300,
  //       width: '300px'
  //     }
  //   }
  // });
};



function geraBarra(data, canva, chart) {
  return {
    type: 'bar',
    data: {
      labels: ['Saques', 'Depositos'],
      datasets: [{
        label: 'Quantidades de operações realizadas por tipo',
        data,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
};

function geraPizza(data, canva) {
  return {
    type: 'pie',
    data: {
      labels: ['Saques', 'Depositos'],
      datasets: [{
        label: 'Quantidades de operações realizadas por tipo',
        data,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
}

function geraLinha(data, canva) {
  return {
    type: 'line',
    data: {
      labels: [''],
      datasets: [{
        label: 'Histórico geral de transações',
        data,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
}

export { MostraGrafico };