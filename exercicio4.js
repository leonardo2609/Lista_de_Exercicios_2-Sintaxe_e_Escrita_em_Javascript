function ehPalindromo(palavra) {
  const newPalavra = palavra.toLowerCase(); // Altera todos os caracteres para letras minúsculas
  const reverse = newPalavra.split("").reverse().join(""); // Aqui existem 3 atributos, split separa a palavra em arrays, reverse inverte a array e join junto novamente a array em uma String.

  if (newPalavra === reverse) {
    return console.log(
      `A palavra ${palavra} eh um palíndromo! Resultado: ${reverse}` // Se a newPalavra for exatamente igual ao reverse, que eh a palavra invertida, ele imprimi na tela está linha.
    );
  } else {
    return console.log(
      `A palavra ${palavra} não eh um palíndromo! Resultado: ${reverse}` // Se a newPalavra for diferente do reverse, que eh a palavra invertida, ele imprimi na tela está linha.
    );
  }
}

function main() {
  const palavra = "Oto"; // Digite a palavra aqui
  ehPalindromo(palavra); // inicia a função
}

main();
