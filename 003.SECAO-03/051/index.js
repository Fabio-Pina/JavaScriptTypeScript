 /*
* * * Atribuição via Desestrutração(Objetos)
  */

const pessoa = {
  nome: 'Fábio',
  sobrenome: 'Pina',
  idade: 30,
  endereco: {
    rua: 'Estação Carandirú',
    numero: 111
  }
};

// Atribuição via desestruturação
const { endereco: { rua, numero }, endereco } = pessoa;
console.log(rua, numero, endereco);


