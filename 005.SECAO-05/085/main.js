 /* 
* * * Map - Mapeando o Array
  */

// Para cada elemento
// Retorne apenas uma string com o nome da pessoa               0  1  2  3  4...
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto (id)

const pessoas = [
  { nome: 'Luiz', idade: 62    },
  { nome: 'Maria', idade: 23   },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Wallace', idade: 47 },
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade })); 

const comIds = pessoas.map(function(obj, indice) { 
  const newObj = { ...obj };
  newObj.id = indice;
    return newObj;
});

console.log(pessoas);
// console.log(comIds);