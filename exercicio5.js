function somaMatriz(matriz) {
  let somaTotal = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      somaTotal += matriz[i][j];
    }
  }

  return somaTotal;
}

function main() {
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const resultado = somaMatriz(matriz);
  console.log(`A soma da matriz informado eh: ${resultado}`);
}

main();
