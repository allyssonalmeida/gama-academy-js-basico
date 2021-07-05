let reverse = [];

function reverseString(entrada) {
  for (i = entrada.length - 1; i >= 0; i--) {
    reverse += entrada[i];
  }
  console.log(reverse);
}
