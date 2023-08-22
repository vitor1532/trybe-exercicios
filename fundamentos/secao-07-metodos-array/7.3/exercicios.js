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

console.log(createObj());
