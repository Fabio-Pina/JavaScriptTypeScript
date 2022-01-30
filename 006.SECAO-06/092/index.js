 /*
* * * Métodos úteis para Objetos
  */

// Object.assign(des, any)
// Object.getOwnPropertyDescriptor(o, 'prop');
// ...(spread)

// Object.keys (retorna as chaves)
// Object.freeze (congela o objeto)
// Object.defineProperties (define várias propriedades)
// Object.defineProperty (define uma propriedade)


//* Exemplo 1 */

// const produto = { nome: 'Caneca', preco: 1.8, material: 'poliuretano' };
// const caneca =  { nome: produto.nome, preco: produto.preco };

// caneca.nome = 'Xícara';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

/** Exemplo 2 */

// const produto = { nome: 'Produto', preco: 1.8 };
// Object.freeze(produto);
// produto.nome = 'Outro produto';
// const caneta  = { nome: produto.nome, preco: produto.preco };
// console.log(Object.keys(produto));

/** Exemplo 3 */

// const produto = { nome: 'Produto', preco: 1.8 };
// Object.defineProperty(produto, 'nome', {
//   writable: false,
//   configurable: false,
//   value: 'Qualquer outra coisa'
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(produto);

// ** Exemplo 4 */

const produto = { nome: 'Produto', preco: 1.8 };
console.log(Object.values(produto));




