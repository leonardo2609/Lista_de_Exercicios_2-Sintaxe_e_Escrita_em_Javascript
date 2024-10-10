function multiplicarMatrizes(matrizA, matrizB) {
  // Verifica se a multiplicação é possível
  if (matrizA[0].length !== matrizB.length) {
    return "A multiplicação não é possível.";
  }
  // Variáveis úteis
  const linhasA = matrizA.length;
  const colunasB = matrizB[0].length;

  // Inicializa a matriz resultado
  const resultado = [];
  for (let i = 0; i < linhasA; i++) {
    resultado[i] = [];
    for (let j = 0; j < colunasB; j++) {
      resultado[i][j] = 0;
    }
  }

  // Realiza a multiplicação
  for (let i = 0; i < linhasA; i++) {
    for (let j = 0; j < colunasB; j++) {
      for (let k = 0; k < matrizA[0].length; k++) {
        resultado[i][j] += matrizA[i][k] * matrizB[k][j];
      }
    }
  }

  return resultado;
}

function main() {
  const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  const matrizB = [
    [7, 8],
    [9, 10],
    [11, 12],
  ];

  const resultado = multiplicarMatrizes(matrizA, matrizB);
  console.log(resultado);
}

main();
