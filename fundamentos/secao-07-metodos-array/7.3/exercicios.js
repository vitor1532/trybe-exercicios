const countries = require('./countries');
// Exercício 1
// Adicione a propriedade planet com o valor Earth em todos os países diretamente no array countries.

const addPlanet = () => {
  countries.forEach((element) => {
    element.planet = 'Earth';
  })
};

addPlanet();

console.log(countries);
