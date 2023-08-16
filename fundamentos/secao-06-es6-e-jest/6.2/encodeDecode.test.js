const { decode , encode } = require('./encodeDecode');

describe('testa a função encode', () => {
  it('testa se a função encode existe', () => {
    expect(encode).toBeDefined();
  })
  it('testa se as vogais "a, e, i , o, u" retornam 1, 2, 3, 4 e 5 respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  })
});

describe('testa a função decode', () => {
  it('testa se a função decode existe', () => {
    expect(decode).toBeDefined();
  })
  it('testa se os numeros 1, 2, 3, 4 e 5 retornam as vogais "a e i o u" respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  })
});
// describe('testa função multiply', () => {
//   test('retorna multiplicação com números positivos', () => {
//     expect(multiply(10, 4)).toBe(40);
//   });
//   test('retorna multiplicação com número negativo', () => {
//     expect(multiply(10, -4)).toBe(-40);
//   });
// })