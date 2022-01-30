 /*
* * * Escopo Léxico
  */

const nome = 'Fábio';

function falaNome() {
  console.log(nome);
} 

function usaFalanome() {
  const nome = 'Pina';
  falaNome();
}
usaFalanome();