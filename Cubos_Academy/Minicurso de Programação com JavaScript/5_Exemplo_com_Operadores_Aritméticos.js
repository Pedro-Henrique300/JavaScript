let preçoProduto1 = 30.50;
console.log("Preço do produto 1 é", preçoProduto1);

preçoProduto1 = preçoProduto1 + 1.0;
console.log("Preço do produto 1 é", preçoProduto1);

// preçoProduto1 = preçoProduto1 + 1.0;
preçoProduto1 += 1.0;
console.log("Preço do produto 1 é", preçoProduto1);

// preçoProduto1 = preçoProduto1 * 0.8;
// preçoProduto1 *= 0.8;
const desconto = preçoProduto1 * 0.2;
preçoProduto1 -= desconto;
console.log("Preço do produto 1 é", preçoProduto1);