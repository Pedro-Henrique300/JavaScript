// Marcador de vida (Condicionais)

function solução(vida, classe) {
  let vidaRestante;

  if (classe === 1) {
    vidaRestante = vida - 20;
    if (vidaRestante <= 0) {
      return "PERDEU";
    } else {
      return vidaRestante;
    }
  } else if (classe === 2) {
    vidaRestante = vida - 30;
    if (vidaRestante <= 0) {
      return "PERDEU";
    } else {
      return vidaRestante;
    }
  } else if (classe === 3) {
    vidaRestante = vida - 40;
    if (vidaRestante <= 0) {
      return "PERDEU";
    } else {
      return vidaRestante;
    }
  } else if (classe === 4) {
    vidaRestante = vida - 50;
    if (vidaRestante <= 0) {
      return "PERDEU";
    } else {
      return vidaRestante;
    }
  } else {
    return "Classe inválida";
  }
}

console.log(solução(10, 4));
