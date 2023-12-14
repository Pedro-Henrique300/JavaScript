function solução (respostas) {
  let quantidadePromotores = 0
  let quantidadeDetratores = 0
  
  for (let item of respostas) {
    if (item === 9 || item === 10) {
      quantidadePromotores += 1
    } else if (item >= 0 && item <= 6) {
      quantidadeDetratores += 1
    }
  }
  
  let quatidadeTotal = respostas.length
  
  let nps = (quantidadePromotores - quantidadeDetratores) / quatidadeTotal * 100
  
  return nps
}