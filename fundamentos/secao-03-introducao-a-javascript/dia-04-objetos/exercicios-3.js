const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

// 1 - Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.
const getValue = (obj, pos) => Object.values(obj)[pos];

// console.log(getValue(school, 0));

// 2 - Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
function getTotalStudents(arr) {

  for(let i = 0; i < arr.length; i += 1) {
    total += arr[i].students;
  }

  return total;
};

//console.log(getTotalStudents(school.lessons))

// 3 - Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.

function keyExists(obj, key) {
  for(let i = 0; i < obj.lessons.length; i += 1) {
    if(obj.lessons[i][key] === undefined) {
      return false;
    }
  }

  return true;
}

console.log(keyExists(school, 'professor'));

// 4 - Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.

function ChangeCourseShift(obj, course, newShift) {
  for(let i = 0; i < obj.lessons.length; i += 1) {
    if(obj.lessons[i].course === course) {
      obj.lessons[i].shift = newShift;
    }
  }
}

ChangeCourseShift(school, 'Python', 'Noite');

// console.log(school.lessons[0]);