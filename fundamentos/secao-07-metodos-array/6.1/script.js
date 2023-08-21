// Temperaturas em graus Celsius
const temperaturesCelsius = [23, 10, 32, 21, 47];
// Fahrenheit = (Celsius * 9/5) + 32

const tempFarenheit = temperaturesCelsius.map((temperature) => {
  temperature = (temperature * 9/5) + 32;

  return temperature;
});

// console.log(temperaturesCelsius);

// console.log('----')

// console.log(tempFarenheit);

// EXERCÍCIO 2:
// Dado um array de números, crie uma função que retorne um novo array com as raízes quadradas dos números. No entanto, se um número for negativo, a função deve substituí-lo por NaN (Não é um Número).
const numbers = [4, 9, -1, 16, -5, 25];

const sqrtRoots = numbers.map((number) => {
  number = Math.sqrt(number);

  return number;
})

// console.log(numbers);
// console.log('---');
// console.log(sqrtRoots);

// ----------------------
const livros = require('./livros');
// Exercício 3
// Implemente a função formatedBookNames que deve retornar um array de strings no formato: Nome do livro - Gênero - Nome da pessoa autora.

const formatedBookNames = livros.books.map((book) => {
  return `${book.name} - ${book.genre} - ${book.author.name}.`
});

// console.log(livros);

// console.log('---');

// console.log(formatedBookNames);

// Exercício 4
// Implemente a função nameAndAge que deve retornar um array de objetos, cada objeto deve conter:

// A chave author, e o valor deve ser o nome da pessoa autora;
// A chave age, e o valor deve ser a idade da pessoa autora quando lançou o livro.

const nameAndAge = livros.books.map(({ author : { name, birthYear }, releaseYear }) => {
  let obj = {
    author: name,
    birthYear,
    releaseYear,
  }

  return obj;
});

console.log(nameAndAge);