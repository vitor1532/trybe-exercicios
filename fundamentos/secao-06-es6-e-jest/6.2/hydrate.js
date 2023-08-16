const hydrate = (string) => {
  const array = string.split('');
  let counter = 0;

  array.forEach(element => {
    const drinks = parseInt(element);
    if (drinks) {
      counter += drinks;
    }
  });

  return `${counter} copo${counter === 1 ? '' : 's'} de água`;
}

module.exports = hydrate;