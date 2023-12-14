// condicionais - if - else

// Menores de 18 -> Menor de idade (meia)
// Entre 18 e 60 -> Adultos (meia apenas com carteirinha)
// Maiores de 60 anos -> Idosos (meia)

// INTEIRA - Adulta e Não tem carteirinha
// MEIA - O resto

const idade = 20;
const temCarteirinha = false;
const éAdulta = idade >= 18 && idade <= 60;

if (éAdulta && temCarteirinha === false) {
  console.log("INTEIRA");
} else {
  console.log("MEIA");
}