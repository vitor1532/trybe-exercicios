const countries = require('./countries');

// Exercício 1
// Crie a função getPopulation que retorne a quantidade total da população de todos os países.

// De olho na dica 👀: o valor inicial deve começar com 0, portanto o acumulador é um número.

const getPopulation = countries.reduce((acc, current) => acc + current.population, 0);

// console.log(getPopulation);

// Exercício 2
// 🚀 Crie a função longestName que deve retornar o país com o maior nome.

// De olho na dica 👀: o reduce consegue comparar o valor do primeiro com o segundo parâmetro. Compare o tamanho da string name do primeiro parâmetro com a do segundo parâmetro e retorne aquele que for maior.

// const expectedResult = {
//   name: 'American Samoa',
//   region: 'Oceania',
//   currencies: [{ code: 'USD', name: 'United States Dollar' }],
//   capital: 'Pago Pago',
//   population: 55197,
//   area: 199
// };

const longestName = () => {
  return countries.reduce((acc, current) => acc.name.length > current.name.length ? acc : current);
}

// console.log(longestName());

// Exercício 3
// 🚀 Crie uma função chamada totalAreaByRegion que recebe um parâmetro opcional region com o valor padrão ‘Europe’. Essa função calcula e retorna a área total de todos os países de uma determinada região.

const totalAreaByRegion = (region = 'Europe') => {
  return countries.reduce((acc, current) => {
    if (current.region === region) {
      return acc + current.area;
    }
    return acc;
  }, 0);
}

// console.log(totalAreaByRegion());

// Exercício 4
// 🚀 Crie uma função chamada getLargestCountriesByRegion que retorna um objeto contendo os países com a maior área em cada região. O objeto de retorno deve ter a seguinte estrutura:

// {
//   Asia: { name: 'Afghanistan', area: 652230 },
//   Europe: { name: 'Russia', area: 17098242 },
//   // ...
// }

const getLargestCountriesByRegion = () => {
  const result = countries.reduce((acc, current) => {
    if (!acc[current.region] || acc[current.region].area < current.area) {
      acc[current.region] = {
        name: current.name,
        area: current.area,
      }
    }
    return acc;
  }, {})

  return result;
};

console.log(getLargestCountriesByRegion());