const techList = (arr, name) => {
  const arraySorted = arr.sort();
  let newArray = [];
  arraySorted.forEach(element => {
    const obj = {
      'tech': element,
      'name': name,
    };
    newArray.push(obj);
  });

  return newArray;
}

module.exports = techList;