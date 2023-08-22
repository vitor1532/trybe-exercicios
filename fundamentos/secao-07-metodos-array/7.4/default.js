// Para Fixar
// Escreva uma função chamada multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (n1, n2 = 1) => n1 * n2;

console.log(multiply(5, 5));
