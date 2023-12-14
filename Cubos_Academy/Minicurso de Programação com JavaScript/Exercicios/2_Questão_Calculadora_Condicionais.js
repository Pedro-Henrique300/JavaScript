/* Calculadora

*Problema*
Você foi contratado por uma empresa de contabilidade para criar um programa para ajudá-los nos cálculos que são
realizados diariamente.

Você ficou responsável por implementar uma calculadora, uma das funcionalidades do produto.
--------------------------------------------------------------------------------------------

*Entrada*
A entrada do programa é composta por três variáveis:

° numero1: Indica o primeiro elemento do cálculo;
° numero2: Indica o segundo elemento do cálculo;
° operacao: Indica qual cálculo deve ser feito com os números. Os possíveis valores são: "soma", "subtração", "divisão", "multiplicação."
-----------------------------------------------------------------------------------------------------------------------------------------

*Saída*
Você deve retornar o resultado.
-----------------------------------
*/

function solução(numero1, numero2, operacao) {
  const soma = numero1 + numero2;
  const subtração = numero1 - numero2;
  const divisão = numero1 / numero2;
  const multiplicação = numero1 * numero2;
  
  if (operacao === "soma") {
    return soma;
  } else if (operacao === "subtração") {
    return subtração;
  } else if (operacao === "divisão") {
    return divisão;
  } else if (operacao === "multiplicação") {
    return multiplicação;
  } else {
    return "Opção Inválida!";
  }
}

console.log(solução(10, 10, "multiplicação"));
