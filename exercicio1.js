function contarOcorrencias(array) {
  const repeticao = {}; // Criar um objeto vazio para guardar os números

  for (let numero of array) {
    if (repeticao[numero]) {
      // Verifica se o número já se encontra no objeto, se sim:
      repeticao[numero]++; // Soma-se mais um
    } else {
      // se não
      repeticao[numero] = 1; // Reinicia a contagem
    }
  }

  return repeticao; // Retorna para fora da função o resultado da repetição
}

function main() {
  const numeros = [4, 4, 9, 2, 9, 6, 1, 1, 4, 3]; // Lista de Números
  const resultado = contarOcorrencias(numeros); // Guarda o resultado da função
  console.log(resultado); // Imprime na tela o resultado
}

main();
