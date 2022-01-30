 /* 
* * * Exercicio - const e let
  */

const nome = 'Fábio';
const sobrenome = 'Pina';
const idade = 42;
const peso = 70;
const alturaEmCm = 1.60;
let imc;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm)
anoNascimento = 2021 - idade

  console.log(`${nome}, ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
  console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`)
  console.log(`${nome} nasceu em ${anoNascimento}.`)