 /*
* * * Maneira de declarar funções 
  */

// Declaração de Função (Function Hoisting)

falaOi()
function falaOi() {
    console.log('Oie');
}

// First-class objects (Objetos de Primeira Classes)
// Function Expression

const souUmDado = function() {
  console.log('Sou um dado.');
};
souUmDado();

// Arrow Function

const funcaoArrow = () => {
  console.log('Sou uma arrow function !');
};
funcaoArrow();

// Dentro de um objeto

const obj = {
  falar: function() {
    console.log('Estou falando...')
  }
};
obj.falar();


