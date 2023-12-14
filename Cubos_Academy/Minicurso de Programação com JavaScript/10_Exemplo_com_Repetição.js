const deposito = 800;
const objetivo = 100000;
const rendimentoAnual = 0.16;

let conta = 0;
let meses = 0;

// todo ano ela rende 10%
// todo mês fazer um deposito

// quantos meses demora para chegar em 100.000.

while (conta < objetivo) {
  conta += deposito;
  conta += conta * rendimentoAnual / 12;
  meses ++;
}

console.log("Demerou", meses, "meses.");
console.log("Demerou", meses/12, "anos.");