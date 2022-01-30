 /*
* * * Funções (Básico)
  */

//** Exemplo 1 */

// function saudacao(nome) {
//   return (`Bom dia ${nome}!`); 
// }

// const variavel = saudacao('Fábio');
// console.log(variavel);

//** Exemplo 2 */

// function soma(x, y) {
//   const resultado = x + y;
//   return resultado;
// }

// console.log(soma(2, 2))
// console.log(soma(4, 2))
// console.log(soma(6, 2))

//** Exemplo 3 */

// function soma(x, y) {
//   const resultado = x + y;
//   return resultado;
// }

// console.log(soma(2, 2))
// console.log(resultado) // lança um erro no output/node

//** Exemplo 4 */

// function soma(x, y) {
//   const resultado = x + y;
//   return resultado; // Depois de return a engine do JavaScript encerra
//   //                   encerra o programa.
//   console.log('Olá, mundo!') // Não vai ser lido
// }

// const resultado = soma(2, 2); // Erro de redeclaração de função
// console.log(resultado)

//** Exemplo 5 */

// function soma(x, y) {
//   const resultado = x + y
//   return resultado
// }

// const resultado = soma() // Vai dar como resultado NaN = Not a Number
// console.log(resultado)

//** Exemplo 6 */

// function soma(x, y) {
//   const resultado = x + y
//   return resultado
// }

// const resultado = soma(4, 2)
// console.log(resultado)

//** Exemplo 7 */

// function soma(x = 1, y = 1) {
//   const resultado = x + y
//   return resultado
// }

// const resultado = soma(4, 2)
// console.log(resultado)

//** Exemplo 8 */

// const raiz = function(n) {
//   return n ** 0.5;
// };

// console.log(raiz(9))
// console.log(raiz(16))
// console.log(raiz(25))

//** Exemplo 9 */ Função de Seta - Arrow Function

// const raiz = function(n) {
//   return n ** 0.5;
// } // Isto vira Arrow Function()

// const raiz = n => n ** 0.5;

// console.log(raiz(9))
// console.log(raiz(16))
// console.log(raiz(25))