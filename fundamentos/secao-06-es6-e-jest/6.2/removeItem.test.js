const removeItem = require('./removeItem');

describe('Testa a função removeItem', () => {
  it('Verifica se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifica se a chamada removeItem([1, 2, 3, 4], 3) NÃO retorna o array [1, 2, 3, 4].', () => {
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifica se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
