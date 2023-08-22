// Exercício 1
// Faça uma função que some todos os números pares do array numbers usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// array.reduce(callback, valorInicial);

const sum = numbers.reduce((acc, current) => acc + current, 0);

console.log(sum);