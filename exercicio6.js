function substituirElemento(array, valorAntigo, novoValor) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valorAntigo) {
      array[i] = novoValor;
    }
  }
  return array;
}

function main() {
  const numeros = [1, 2, 3, 2, 4, 2];
  const novoArray = substituirElemento(numeros, 2, 5);
  console.log(novoArray);
}

main();
