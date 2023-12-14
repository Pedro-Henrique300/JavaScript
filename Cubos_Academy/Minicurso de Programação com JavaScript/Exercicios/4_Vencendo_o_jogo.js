/* Vencendo o jogo

*Problema*
Você foi contratado pela FIFA para crir um programa que mostre no telão qual está ganhando a partida
----------------------------------------------------------------------------------------------------

*Entrada*
A entrada do seu programa será composta por uma variável chamada placar, um array com dois elementos que
armazena, respectivamente, quantos gols o Time A está fazendo e quantos gols o Time B está fazendo.
----------------------------------------------------------------------------------------------------------

*Saída*
Você deve retornar:

° TIME A: caso Time A esteja ganhando;
° TIME B: caso Time B esteja ganhando;
° EMPATE: caso o jogo esteja empatado.
---------------------------------------
*/


function solução(placar) {
  let Time_A = placar[0];
  let Time_B = placar[1];
  
  if (Time_A > Time_B) {
    return "Time A";
  } else if (Time_B > Time_A) {
    return "Time B";
  } else {
    return "EMPATE";
  }
}

solução([3, 2]);