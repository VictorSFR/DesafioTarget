function isSquare(num) {
  let squareRoot = Math.sqrt(num);
  return Number.isInteger(squareRoot);
}
  
//Testa se (5*num^2 + 4) ou (5*num^2 - 4) é um quadrado perfeito, ou seja, sua raiz quadrada é um número natural.
function belongsToFibonacci(num) {
  return (
    isSquare(5 * (num * num) + 4) || isSquare(5 * (num * num) - 4)
  );
}


let num = 3;
if (belongsToFibonacci(num)) {
  console.log(num+" pertence à sequência de Fibonacci.");
} else {
  console.log(num+" não pertence à sequência de Fibonacci.");
}


