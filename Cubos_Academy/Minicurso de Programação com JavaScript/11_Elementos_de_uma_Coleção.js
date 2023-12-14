const palavra = "AaEeIiOoUu"
let numeroDeVogais = 0;

for (const letra of palavra) {
  if (letra === "a" || letra === "A") { numeroDeVogais += 1 }
  if (letra === "e" || letra === "E") { numeroDeVogais += 1 }
  if (letra === "i" || letra === "I") { numeroDeVogais += 1 }
  if (letra === "o" || letra === "O") { numeroDeVogais += 1 }
  if (letra === "u" || letra === "U") { numeroDeVogais += 1 }
}

console.log("Nessa palavra há", numeroDeVogais, "vogais.");