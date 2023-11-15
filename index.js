// Desafio Classificador de nível de Herói

const quantidadeHerois = Number(prompt("Digite o número de heróis: "))

for(let i=0; i <= quantidadeHerois; i++){
  const nomeHeroi = prompt("Digite o nome do herói: ")
  const quantidadeXP = Number(prompt("Digite a quantidade de experiência do héroi(De 0 a 10000)"))

  let nivel
  
  if(quantidadeXP <= 1000){
    nivel = "Ferro"
  } else if(quantidadeXP >= 1001 && quantidadeXP <= 2000){
    nivel = "Bronze"
  } else if (quantidadeXP >= 2001 && quantidadeXP <= 6000){
    nivel = "Prata"
  } else if(quantidadeXP >= 6001 && quantidadeXP <= 7000){
    nivel = "Ouro"
  } else if(quantidadeXP >= 7001 && quantidadeXP <= 8000){
    nivel = "Platina"
  } else if(quantidadeXP >= 8001 && quantidadeXP <= 9000){
    nivel = "Ascendente"
  } else if(quantidadeXP >= 9001 && quantidadeXP <= 10000){
    nivel = "Imortal"
  } else {
    nivel = "Radiante"
  } 
  console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)
}