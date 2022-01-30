 /* 
* * * Revisão do Básico em Arrays
  */

/** Exemplo 1 */

//              0          1        2 
// const nomes = ['Eduardo', 'Maria', 'Joana']; // Array Literal
// // String, Objetos, Funções, Números
// nomes[2] = 'João';
// delete nomes[2];
//  console.log(nomes);

/** Exemplo 2 */

// const nomes = new Array('Eduardo', 'Maria', 'Joana');
// nomes[2] = 'João';
// delete nomes[2];
//   console.log(nomes);

/** Exemplo 3 */

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = nomes;
// novo.pop();
//   console.log(nomes);
//   console.log(novo);

/** Exemplo 4 */

// const nomes = ['Eduardo', 'Maria', 'Joana'];
  // console.log(nomes.length);

/** Exemplo 5 */

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes.pop(); // Remove o último elemento do Array
  // console.log(nomes);

/** Exemplo 6 */

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const removido = nomes.pop();
//  console.log(nomes, removido);

/** Exemplo 7 - Shift - Remove do começo */

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const removido = nomes.shift();
//  console.log(nomes, removido);

/** Exemplo 8 - Insere elementos no final do Array */

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes.push('Fabio');
//  console.log(nomes);

/** Exemplo 9 - Insere elementos na frete no Array - Descola os elementos*/

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes.unshift('João');
// nomes.unshift('Wallace');
  //  console.log(nomes);

/** Exemplo 10 */

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = nomes.slice(1, -1);
  // console.log(novo);

/** Exemplo 11 */

// const nome = 'Fabio Pina Miranda Peixoto';
// const nomes = nome.split(', ');
//   console.log(nomes);

/** Exemplo 12 */

const nomes = ['Luiz', 'Ótario', 'Miranda'];
const nome = nomes.join();
  console.log(nomes);
