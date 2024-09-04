//Define dicionario faturamento
const faturamento = {
  SP: 67836.43,
  RJ: 36578.66,
  MG: 29299.88,
  ES: 27165.48,
  Outros: 19849.53,
};

//inicializa total
var total = 0.0;

//Calcula total do faturamento
for (let estado in faturamento) {
    total += faturamento[estado]
}

//Calcula porcentagens e as detalha por estado.
for (let estado in faturamento) {
    let valor = faturamento[estado];
    let porcentagem = (valor / total) * 100;
    console.log(estado+": "+porcentagem.toFixed(2)+"%");
}



