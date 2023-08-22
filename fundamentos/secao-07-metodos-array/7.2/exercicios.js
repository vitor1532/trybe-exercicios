const pokemons = require('./pokemons');

// Exercício 1
// Utilizando o método filter e object destructuring, crie uma função filterStrongPokemons que retorna um novo array contendo apenas os Pokémons com nível superior a 30.

const filterStrongPokemons = pokemons.filter(({ level }) => level > 30);

// console.log(filterStrongPokemons);

// Exercício 2
// Utilizando os métodos filter e map encadeados, crie uma função getStrongPokemonNames que retorna um novo array contendo apenas os nomes dos Pokémons com nível superior a 50.

const getStrongPokemonNames = pokemons.filter(({ level }) => level > 50)
  .map(({ name }) => name);

// console.log(getStrongPokemonNames);


// Exercício 3
// Utilize o método sort para ordenar o array de Pokémons em ordem crescente com base no nível de cada Pokémon.

const sortedByLevel = pokemons.sort((a, b) => a.level - b.level);

// console.log(sortedByLevel);

// Exercício 4
// Utilizando o método sort e default destructuring, crie uma função chamada sortPokemons que retorna o array de Pokémons ordenado por nível em ordem decrescente. Caso dois Pokémons tenham o mesmo nível, a ordenação deve ser feita pelo nome em ordem alfabética crescente.

const sortPokemons = pokemons.sort(({ name: firstName, level: firstLevel }, { name: secondName, level: secondLevel }) => {
  if (firstName === secondName) {
    return firstName.localeCompare(secondName);
  } else {
    return secondLevel - firstLevel;
  }
});

console.log(sortPokemons);
