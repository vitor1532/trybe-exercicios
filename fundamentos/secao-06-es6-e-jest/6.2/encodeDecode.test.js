const { decode , encode } = require('./encodeDecode');

describe('testa a função encode', () => {
  it('testa se a função encode existe', () => {
    expect(encode).toBeDefined();
  })
});

describe('testa a função decode', () => {
  it('testa se a função decode existe', () => {
    expect(decode).toBeDefined();
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