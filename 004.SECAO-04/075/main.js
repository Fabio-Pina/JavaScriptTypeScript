 /*
* * * Funções Fábrica (Factory Functions)
  */

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome, 
    sobrenome,
    
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto = 'falando sobre JavaScript') {
      return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Luiz', 1.90, 57);
const p3 = criaPessoa('Naina', 'Farias', 1.5, 110)

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

// const p1 = criaPessoa('Fabio', 'Pina', 1.6, 70);
// p1.nomeCompleto = 'Fábio Pina de Miranda Peixoto'
// console.log(p1.nomeCompleto);
      




