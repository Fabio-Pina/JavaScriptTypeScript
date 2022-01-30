 /*
* * * Switch / Case
  */

// const data = new Date('1987-04-21 00:00:00')
// const diaSemana = data.getDay()
//   let diaSemanaTexto

//   if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo'
//   } else if (diaSemana === 1) {
  
//   diaSemanaTexto = 'Segunda'
//   } else if (diaSemana === 2) {

//   diaSemanaTexto = 'Terça'
//   } else if (diaSemana === 3) {  

//   diaSemanaTexto = 'Quarta'
//   } else if (diaSemana === 4) {

//   diaSemanaTexto = 'Quinta'
//   } else if (diaSemana === 5)

//   diaSemanaTexto = 'Sexta' 
//   else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sábado'
//   }

// console.log(diaSemana, diaSemanaTexto);

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo'
    break
    case 1:
      diaSemanaTexto = 'Segunda'
    break
    case 3:
      diaSemanaTexto = 'Terça'
    break
    case 4:
      diaSemanaTexto = 'Quarta'
    break
    case 5: 
      diaSemanaTexto = 'Quinta'
    break
    case 6:
      diaSemanaTexto = 'Sexta'
    break
    case 7:
      diaSemanaTexto = 'Sábado'
    break
  }

  return
}

const data = new Date('1987-04-26 00:00:00')
let dia = diaSemana = data.getDay();