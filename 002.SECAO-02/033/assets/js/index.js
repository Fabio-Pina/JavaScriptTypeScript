 /*
* * * Valores primitivos e valores por referência
  */

//** Primitivos (imutáveis) - sting, number, boolean, undefined, null (bigint, symbol)*/

//** Exemplo 1 */

//           01234
// let nome = 'Fábio'
//  console.log(nome)

//** Exemplo 2 */

// let a = 'A';
// let b = a; // Cópia
// console.log(a, b); //

// a = 'Outra coisa'
// console.log(a, b);

//** Exemplo 3 - Referência (mutável) - array, object, function */

// let a = [1, 2, 3]
// let b = a;
// let c = b; 

// console.log(a, b)

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// console.log(c)

//** Exemplo 4 */

const a = {
  nome: 'Fábio',
  sobrenome: 'Otávio'
}

const b = a

a.nome = 'Otávio'
console.log(a)
console.log(b)