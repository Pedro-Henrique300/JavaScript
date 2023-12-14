const listaDeNumeros = [34, 14, 56, 768, 8, 81, 3, 6, 10];

// 1. Qual a soma deles?

let acumulador = 0;

for (const numero of listaDeNumeros) {
  acumulador += numero;
}

console.log("A soma deles:", acumulador);



// 2. Qual o menor deles?

let oMenorNumeroAtéAgr;

for (const numero of listaDeNumeros){
  if (oMenorNumeroAtéAgr === undefined){
    oMenorNumeroAtéAgr = numero;
  } else {
    if (numero < oMenorNumeroAtéAgr) {
      oMenorNumeroAtéAgr = numero;
    }
  }
}

console.log("O menor deles:", oMenorNumeroAtéAgr);
