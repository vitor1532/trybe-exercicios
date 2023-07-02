const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 - Percorra o array imprimindo todos os valores contidos nele com a função console.log().

// for(i = 0; i < numbers.length; i += 1) {r
//   const item = numbers[i];
//   console.log(item);
// }

//2 - Some todos os valores contidos no array e imprima o resultado.

// let sum = 0;

// for(i = 0; i < numbers.length; i += 1) {
//   sum = sum += numbers[i];
// }

// console.log(sum);

//3 - Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

// let sum = 0;

// for(i = 0; i < numbers.length; i += 1) {
//   sum = sum += numbers[i];
// }

// sum <= 20 ? console.log('O valor da média aritmética é menor ou igual a 20') : console.log('O valor da média aritmética é maior que 20');

//4 - Utilizando for, descubra o maior valor contido no array e imprima-o.

// let bigerNumber = 0;

// for(i = 0; i < numbers.length; i += 1) {
//   numbers[i] > bigerNumber ? bigerNumber = numbers[i] : bigerNumber;
// }

// console.log(bigerNumber);

//5 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

// let impar = 0;

// for(i = 0; i < numbers.length; i += 1) {
//   numbers[i] % 2 === 0 ? impar: impar += 1;
// }

// impar === 0 ? console.log("Nenhum valor ímpar encontrado") : console.log(impar);