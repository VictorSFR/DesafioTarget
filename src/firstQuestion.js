
//Algoritmo descrito na questão
var index = 13;
var sum = 0;
var k = 0;
while (k < index) {
  k = k + 1;
  sum = sum + k;
}

document.querySelector('#firstQuestion').innerHTML = sum;


console.log(sum);
