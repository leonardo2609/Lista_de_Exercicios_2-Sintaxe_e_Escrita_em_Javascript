function ordenarPorIdade(pessoas) {
  // A função sort modifica o array original, por isso criamos uma cópia para não alterar o original
  const pessoasOrdenadas = [...pessoas];

  // A função de comparação para o método sort
  pessoasOrdenadas.sort((a, b) => {
    return a.idade - b.idade;
  });

  return pessoasOrdenadas;
}

const pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 35 },
];

const pessoasOrdenadas = ordenarPorIdade(pessoas);
console.log(pessoasOrdenadas);
