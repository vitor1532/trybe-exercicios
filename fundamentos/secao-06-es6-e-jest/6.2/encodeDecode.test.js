const { decode , encode } = require('./encodeDecode');

describe('testa a função encode', () => {
  it('testa se a função encode existe', () => {
    expect(encode).toBeDefined();
  })
  it('testa se encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('testa se as vogais "a, e, i , o, u" retornam 1, 2, 3, 4 e 5 respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  })
  it('converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });
  it('converte a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  it('converte a vogal "i" no número 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  it('converte a vogal "o" no número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  it('converte a vogal "u" no número 5', () => {
    expect(encode('nu')).toEqual('n5');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);
  });
});

describe('testa a função decode', () => {
  it('testa se a função decode existe', () => {
    expect(decode).toBeDefined();
  })
  it('testa se decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('testa se os numeros 1, 2, 3, 4 e 5 retornam as vogais "a e i o u" respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  })
  it('converte apenas o número 1 na vogal a', () => {
    expect(decode('1n1')).toEqual('ana');
  });
  it('converte apenas o número 2 na vogal e', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  it('converte apenas o número 3 na vogal i', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });
  it('converte apenas o número 4 na vogal o', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  it('converte apenas o número 5 na vogal u', () => {
    expect(decode('n5')).toEqual('nu');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5);
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