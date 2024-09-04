//Definindo variáveis
var text = 'Hello world'; 
var reverseText = "";

//Este loop irá pegar a ultima letra de [text] e adicionar a String [newText], assim reventendo a String.
while (text.length > 0) {
  reverseText = reverseText + text.slice(-1);
  text = text.slice(0, -1);
}

console.log(reverseText);

