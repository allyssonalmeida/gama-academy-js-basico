function fizzBuzz(entrada) {
  if (typeof entrada == 'number') {
    if (entrada % 3 == 0) {
      if (entrada % 5 == 0) {
        return 'FizzBuzz';
      } else {
        return 'Fizz';
      }
    } else if (entrada % 5 == 0) {
      return 'Buzz';
    } else {
      return entrada;
    }
  } else {
    return 'Não é um numero';
  }
}
