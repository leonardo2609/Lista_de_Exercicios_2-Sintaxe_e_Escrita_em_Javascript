function separarParesImpares(numeros) {
  const numero = {
    par: 0, // Propiedade Par, irá guardar a quantidade de números pares.
    impar: 0, // Propiedade ímpar, irá guardar a quantidade de números impares.
  };

  // Loop para iterar em cada número da array, numeros
  for (let i = 0; i < numeros.length; i++) {
    temp = numeros[i] % 2; // Divide o número do indice I por 2.
    if (temp === 0) {
      numero.par += 1; // Se o resto da divisão acima for estritamente igual 0, então ele irá somar mais um na propriedade PAR.
    } else {
      numero.impar += 1; // Se o resto da divisão acima for diferente de 0, então ele irá somar mais um na propriedade IMPAR.
    }
  }

  return numero;
}

function main() {
  const numeros = [42, 7, 89, 34, 56, 12, 98, 65, 23, 8]; // Array com 10 números
  const resultado = separarParesImpares(numeros); // Guardar o valor obtido na função
  console.log(resultado); // Imprime o resultado na tela
}

main(); // Roda o código
