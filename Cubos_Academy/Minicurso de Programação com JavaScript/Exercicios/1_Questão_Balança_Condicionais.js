/* Balança

*Problema*
Crie um programa para dizar para qual lado a balança vai inclinar quando coloca-se dois corpos de cada lado.
-------------------------------------------------------------------------------------------------------------

*Entrada*
A entrada do seu programa é composta por quatro variáveis:
°pesoLadoA1: Peso de um dos corpos colocados no lada A da balança;
°pesoLadoA2: Peso do outro corpo colocado no lado A da Balança;
°pesoLadoB1: Peso de um dos corpos colocados no lada B da balança;
°pesoLadoB2: Peso do outro corpo colocado no lado B da Balança;
------------------------------------------------------------------

*Saida*
Retorne: 

° LADO A: caso a balança se incline para o Lado A;
° LADO B: caso a balança se incline para o Lado B;
° EQUILIBRIO: caso a balança não se incline para nenhum dos dois lados.
-----------------------------------------------------------------------*/

function solução (pesoLadoA1, pesoLadoA2, pesoLadoB1, pesoLadoB2) {
  let somaLadoA = pesoLadoA1 + pesoLadoA2;
  let somaLadoB = pesoLadoB1 + pesoLadoB2
  
  if (somaLadoA === somaLadoB) {
    return console.log("EQUILIBRIO");
  } else {
    if (somaLadoA > somaLadoB) {
      return console.log("Lado A");
    } else {
      return console.log("Lado B");
    }
  }
}

solução(10, 20, 10, 10);