/*Utiliznado JavaScript puro rodando no navegador, é necessário selecionar arquivo JSON manualmente para esse algoritmo rodar.

O ARQUIVO placeholderdata.json DEVE SER SELECIONADO.
*/

document.getElementById('fileInput').addEventListener('change', function (event) {
    //armazena arquivo selecionado em (file)
    const file = event.target.files[0];

    //Cria um objeto da interface FileReader
    const reader = new FileReader();

    //Cria array que armazenará faturas
    let invoices = [];

    //É executado ao carregar arquivo JSON.
    reader.onload = function (e) {
        //Converte o conteúdo do arquivo para um objeto JavaScript
        const data = JSON.parse(e.target.result); 

        //Itero pelo objeto JSON e adiciono valores diferentes de 0 ao array Invoices.
        data.forEach(entry => {
            if (parseFloat(entry.invoicing) != 0) {
                invoices.push(parseFloat(entry.invoicing));
            }
        });


        //Calculo soma das faturas e média
        let soma = invoices.reduce((accumulator, current) => accumulator + current);
        let media = soma / (invoices.length + 1);
        let cont = 0;
        console.log("Média = " + media);

        //Registro o número de vezes em que a fatura foi maior que a média mensal. 
        invoices.forEach(e => {
            if (e > media) {
                cont++;
            }
        })
        console.log("Número de vezes que a fatura foi maior que a média: " + cont);

        let max = Math.max(...invoices);
        let min = Math.min(...invoices);


        //Este loop serve apenas para imprimir o maior valor e menor valor juntamente com a data.
        data.forEach(entry => {
            if (parseFloat(entry.invoicing) == max) {
                console.log("Maior valor: " + entry.invoicing + " na data " + entry.date);
            } else
                if (parseFloat(entry.invoicing) == min) {
                    console.log("Menor valor: " + entry.invoicing + " na data " + entry.date);
                }

        });

    };

    //lê um arquivo JSON
    reader.readAsText(file); 
});
