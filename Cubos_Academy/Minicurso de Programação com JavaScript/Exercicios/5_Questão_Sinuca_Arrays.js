/*Sinuca Brasileira*/


function solução (jogadorA) {
  let somaJogadorA = 0
  for (let item of jogadorA) {
    somaJogadorA += item
  }
  let somaJogadorB = 120 - somaJogadorA
  if (somaJogadorA > somaJogadorB) {
    return "JOGADOR A GANHOU"
  } else if (somaJogadorB > somaJogadorA) {
    return "JOGADOR B GANHOU"
  } else {
    return "EMPATE"
  }
}

solução(10, 11, 3, 4);