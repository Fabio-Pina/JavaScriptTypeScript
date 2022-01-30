 /*
* * * Closures
  */

// Escopo Global

function retornaFuncao(nome) {
  return function() {
    return nome;
  };
}

const funcao1 = retornaFuncao('Fabio')
const funcao2 = retornaFuncao('Pina');
console.dir(funcao1);
console.dir(funcao2);

console.log(funcao1(), funcao2);