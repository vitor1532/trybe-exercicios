const countries = require('./countries');
// Exercício 1
// Adicione a propriedade planet com o valor Earth em todos os países diretamente no array countries.

const addPlanet = () => {
  countries.forEach((element) => {
    element.planet = 'Earth';
  })
};

addPlanet();

// console.log(countries);

// Exercício 2
// Para cada país, crie um objeto apenas com as informação do nome, código da moeda e nome da moeda. Essas informações devem ser armazenadas em um novo array. Faça esse exercício usando o método forEach, não vale map. 😜

// Exemplo de como devem ser os objetos:

// {
//   name: 'United States',
//   currencyCode: 'USD',
//   currencyName: 'United States Dollar',
// }


const createObj = () => {
  let newArray = [];
  countries.forEach((element) => {
    let newObj = {};

    newObj = {
      name: element.name,
      currencyCode: element.currencies[0].code,
      currancyName: element.currencies[0].name,
    }
    newArray.push(newObj);
  });

  return newArray;
}

// console.log(createObj());

// Exercício 3
// Escreva uma função chamada findCountry que recebe dois parâmetros: o array de países e o nome do país desejado. Ao receber esses valores, a função deve retornar o elemento do país desejado. Caso não seja encontrado, a função deve lançar um erro com a mensagem: “País não encontrado!”.

const findCountry = (arr, name) => {
  const found = arr.find((country) => country.name === name);

  if (found) {
    return found;
  } else {
    return 'País não encontrado'
  }
};

// console.log(findCountry(countries, 'South Africa'));

// Exercício 4
// Desenvolva uma função que crie uma cópia do array countries e adicione a Alemanha a esse novo array através do spread operator.

const newCountry = {
  name: 'Germany',
  region: 'Europe',
  currencies: [{ code: 'EUR', name: 'Euro' }],
  capital: 'Berlin',
  population: 83190556,
  area: 357386
};

const addCountry = (newCountry, countries) => [...countries, newCountry];

// console.log(addCountry(newCountry, countries));

// Exercício 5
// Desenvolva uma solução para percorrer o array countries e construir uma string para cada país com informações e formatação específicas. As propriedades são passadas como argumentos para a função buildString e adicionadas à string final. A string deverá ser construída com as propriedades name, capital, currencies.code e currencies.name separadas por um -.

// O resultado final deve ser:

// Anguilla - The Valley - XCD - East Caribbean dollar
// Brazil - Brasília - BRL - Brazilian Real
// Canada - Ottawa - CAD - Canadian Dollar
// China - Beijing - CNY - Chinese Yuan
// France - Paris - EUR - Euro
// India - New Delhi - INR - Indian Rupee
// Mexico - Mexico City - MXN - Mexican Peso
// Russia - Moscow - RUB - Russian Ruble
// South Africa - Pretoria - ZAR - South African Rand
// United States - Washington -  D.C. - USD - United States Dollar

const buildString = (countries, name, ...propreties) => {
  const found = countries.find((country) => country.name === name);

  return `${found.name} - ${propreties}`;
}

countries.forEach((element) => {
  const result = buildString(countries, element.name, element.capital, element.currencies[0].code, element.currencies[0].name);
  console.log(result.split(',').join(' - '));
})
