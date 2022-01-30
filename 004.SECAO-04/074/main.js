 /*
* * * Funções Imediatas (IIFE) Immediately Invoked Function Expression
  */

(function(idade, peso, altura) {
  
  const sobrenome = 'Pina';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Fábio'));
  }

  falaNome();
  console.log(idade, peso, altura);

})(42, 70, 1.58);



