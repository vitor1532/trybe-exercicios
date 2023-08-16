const myFizzBuzz = require('./myFizzBuzz')

describe('Testa função myFizzBuzz', () => {
  it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
});

// describe('testa função multiply', () => {
//   test('retorna multiplicação com números positivos', () => {
//     expect(multiply(10, 4)).toBe(40);
//   });
//   test('retorna multiplicação com número negativo', () => {
//     expect(multiply(10, -4)).toBe(-40);
//   });
// })