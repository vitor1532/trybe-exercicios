const studentRegister = (name, age) => {
  try {
    if(!name || !age) {
      throw new Error('Todas as informações são necessárias');
    }

    if(age < 18) {
      throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
    }

    return `${name}, seja bem-vindo(a) à AuTrybe!`
  } catch (error) {
    return error.message;
  }
}

console.log(studentRegister('oi', 18));