const agencias = ['1123', '2123', '3123', '4123', '5123'];

function CriaConta(event) {
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
    agencia,
    historico: []
  };

  window.localStorage.setItem(cpf, JSON.stringify(conta));
  window.localStorage.setItem('numero', String(numeroDaConta))
}

export { CriaConta };