 /*
* * * Criando Classes
  */

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando`)
  }

  comer() {
    console.log(`${this.nome} está comendo`)
  }

  beber() {
    console.log(`${this.nome} está bebendo`)
  }
}

const p1 = new Pessoa('Fábio', 'Pina');
const p1 = new Pessoa('Janaína', 'Farias');
const p1 = new Pessoa('Mathias', 'Araújo');
const p1 = new Pessoa('Vera', 'Cristina');


// console.log(p1);

