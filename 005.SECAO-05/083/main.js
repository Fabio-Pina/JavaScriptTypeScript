 /* 
* * * Concatenando Arrays
  */

/** Exemplo 1 */

// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const a3 = a1 + a2;
  //   console.log(typeof a3);

/** Exemplo 2 */

// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const a3 = a1.concat(a2);
  // console.log(a3);

/** Exemplo 3 */

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1.concat(a2, [7, 8, 9], 'Fábio');

// ... Spread Operator
const a3 = [...a1, ...a2]
 console.log(a3);

