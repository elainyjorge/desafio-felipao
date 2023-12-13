// Desafio 3: Escrevendo as classes de um jogo

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar(){
    if(this.tipo === 'mago'){
      this.ataque = 'magia'
    } else if(this.tipo === 'guerreiro'){
      this.ataque = 'espada'
    } else if(this.tipo === 'monge'){
      this.ataque = 'artes marciais'
    } else if(this.tipo === 'ninja'){
      this.ataque = 'shuriken'
    } else {
      this.ataque = 'ataque não identificado!'
    }
    return `O ${this.tipo} atacou usando ${this.ataque}.`
  }
}

const heroi1 = new Heroi('Valente', 18, 'guerreiro')
const heroi2 = new Heroi('Veloz', 20, 'ninja')

console.log(heroi1.atacar())
console.log(heroi2.atacar())
