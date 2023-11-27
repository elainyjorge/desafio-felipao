// Calculadora de partidas Rankeadas

// Usando if else 

function calcularPartidasRankeadas(vitorias, derrotas){
let saldoVitorias = vitorias - derrotas
let nivel

  if (vitorias <= 10){
    nivel = 'Ferro'
  } else if(vitorias <= 20){
    nivel = 'Bronze'
  } else if(vitorias <= 50) {
    nivel = 'Prata'
  } else if(vitorias <= 80){
    nivel = 'Ouro'
  } else if(vitorias <= 90){
    nivel = 'Diammante'
  } else if(vitorias <= 100){
    nivel = 'Lendário'
  } else {
    nivel = 'Imortal'
  }
return `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`
}

console.log(calcularPartidasRankeadas(40,15))

// Usando switch 

function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas
}

function exibirNivel(vitorias) {
  let nivel
  switch (true) {
    case vitorias <= 10:
      nivel = 'Ferro'
      break
    case vitorias > 10 && vitorias <= 20:
      nivel = 'Bronze'
      break
      case vitorias > 20 && vitorias <= 50:
        nivel = 'Prata'
        break
      case vitorias > 50 && vitorias <= 80:
        nivel = 'Ouro'
        break
      case vitorias > 80 && vitorias <= 90:
        nivel = 'Diamante'
        break
      case vitorias > 90 && vitorias <= 100:
        nivel = 'Lendário'
        break
      default:
        nivel = 'Imortal'
}
  return nivel
}

const saldoVitorias = calcularSaldo(40, 15)
const nivel = exibirNivel(40)

console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`)

