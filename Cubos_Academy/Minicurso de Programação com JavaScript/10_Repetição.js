
// Quantos números entre 1 e 1000 são multíplos de 17

let resposta = 0;
let i = 1;

while (i <= 1000) {
  if (i % 17 === 0) {
    resposta += 1;
  }
  i++;
}

console.log("São multíplos de 17:", resposta, "números!");
