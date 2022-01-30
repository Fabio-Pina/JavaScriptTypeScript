 /* 
* * * Método Splice
  */

/** Exemplo 1 */

// const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// // nomes.splice(indice, delete, elem1, elem2, elem3);
// // pop
// const removidos = nomes.splice(4, 1);
//   console.log(nomes, removidos);

/** Exemplo 2 */

// const nomes = ['Fabio', 'Lucas Vieira', 'Tadeu'];
// const removidos = nomes.splice(-2, 1);
  // console.log(nomes, removidos);

/** Exemplo 3 */

// const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// const removidos = nomes.splice(-2, Number.MAX_VALUE); 
//   console.log(nomes, removidos);
//   console.log(Number.MAX_VALUE);

/** Exemplo 4 */

// const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// const removidos = nomes.splice(3, 0, 'Luiz');
//   console.log(nomes, removidos);

/** Exemplo 4 */

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Push
nomes.splice(nomes.length, 0, 'Fábio', 'Pina');
  console.log(nomes);




