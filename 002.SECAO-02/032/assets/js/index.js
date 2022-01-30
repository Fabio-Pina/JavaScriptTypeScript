 /*
* * * Objetos (Básico)
  */

//** Exemplo 1 */

// const array = [1, 2, 3]
// array.push(4)
// array[0] = 'Fabio'
// console.log(array)

//* Exemplo 2 */

// const nome01      = 'Fabio' 
// const sobrenome01 = 'Pina'
// const idade01     =     42

// const nome02      = 'Naina'
// const sobrenome02 = 'Pina'
// const idade02     =    32

// console.log(nome01, sobrenome01, idade01)
// console.log(nome02, sobrenome02, idade02)

//** Exemplo 3 */

// const pessoa1 = {
//   nome: 'Fábio',
//   sobrenome: 'Miranda',
//   idade: 42,
// };

// const pessoa2 = {
//   nome: 'Mathias',
//   sobrenome: 'Araújo',
//   idade: 8
// }

// console.log(pessoa1)
// console.log(pessoa2)

//** Exemplo 4 */

// function criaPessoa (nome, sobrenome, idade) {
//   return {
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade
//   };
// }

// const pessoa1 = criaPessoa('Fabio', 'Pina', 42);
// const pessoa2 = criaPessoa('Janaína', 'Farias', 33);
// const pessoa3 = criaPessoa('Vera', 'Cristina', 67);
// const pessoa4 = criaPessoa('Mathias', 'Araújo', 8);

// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
// console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
// console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);
// console.log(pessoa4.nome, pessoa4.sobrenome, pessoa4.idade);

//** Exemplo 5 */

// const pessoa1 = {
//   nome: 'Fábio',
//   sobrenome: 'Pina',
//   idade: 42
// }

// console.log(pessoa1)

//** Exemplo 6 */

const pessoa1 = {
  nome: 'Fábio',
  sobrenome: 'Pina',
  idade: 42,

  fala() {
    console.log(`A minha idade atual é ${this.idade}`)
  },

  incrementaIdade() {
    this.idade++;
  }
};

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()


