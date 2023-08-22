const students = require('./students')

// Exercício 1
// Faça uma função que some todos os números pares do array numbers usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// array.reduce(callback, valorInicial);

const sum = numbers.reduce((acc, current) => acc + current, 0);

// console.log(sum);

// Exercício 2
// Crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. Você usará tanto o map quanto o reduce dentro dele.
// Resultado esperado: 
// [
//   { name: 'Jorge', course: 'Português' },
//   { name: 'Mario', course: 'Biologia' },
//   { name: 'Jorge', course: 'Português' },
//   { name: 'Maria', course: 'Química' },
//   { name: 'Natalia', course: 'Português' },
//   { name: 'Wilson', course: 'Português' },
// ]

const best = (acc, current) => acc.grade > current.grade ? acc : current;

const report = (students) => students.map((student) => {
  return {
    name: student.name,
    course: student.courses.reduce(best).name
  }
});

console.log(report(students));
