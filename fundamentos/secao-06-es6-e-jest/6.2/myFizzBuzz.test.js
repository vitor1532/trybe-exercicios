const myFizzBuzz = require('./myFizzBuzz')

describe('Testa função myFizzBuzz', () => {
  it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Caso num seja um número divisível apenas por 3, a função retorna "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('Caso num seja um número divisível apenas por 5, a função retorna "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Caso num não seja um número, a função retorna false', () => {
    expect(myFizzBuzz('oi')).toBe(false);
  });
});
