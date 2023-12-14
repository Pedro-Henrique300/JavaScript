// condicionais - if - else

// Menores de 18 -> Menor de idade (meia)
// Entre 18 e 60 -> Adultos (meia apenas com carteirinha)
// Maiores de 60 anos -> Idosos (meia)

// MEIA - menor de idade OU idosa OU (adulta com carteirinha)
// INTEIRA - O resto

const idade = 17;
const temCarteirinha = false;
const éAdulta = idade >= 18 && idade <= 60;

if (idade < 18 || idade > 60 || (éAdulta && temCarteirinha)) {
  console.log("MEIA");
} else {
  console.log("INTEIRA");
}