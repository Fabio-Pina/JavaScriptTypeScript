 /*
* * * Revisando Objetos
  */

// Duas formas: 

// 1º Notação de ponto '.'
// 2º Notação de colchetes []

// Factory Fucntions / Constructor Function / Classes

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
}

const p1 = new Pessoa('Fábio', 'Pina');
p1.nome = 'Outra coisa';
p1.sobrenome = 'Qualquer';
p1.fala = function() {console.log('Oi')};
p1.fala();
const p2 = new Pessoa('Luca', 'Toni')

console.log(p1);
console.log(p2);

