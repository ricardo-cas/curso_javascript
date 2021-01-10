console.log("Conversão de Tipos");

console.log("Ano: " + 2020);
console.log(
  'Quando usamos o operador + estamos fazendo uma concatenação de dois valores, o resultado de "2" + "2" é o abaixo:'
);
console.log("2" + "2");

// console.log();
console.log("Fazendo uma conversão forçada usando o ParseInt");
console.log(parseInt("2") + parseInt("2"));
console.log(
  "Fazendo uma conversão implícita, utilizando o / o JS vai tentar converter o valor em número e depois exibir o resultado, pois só faz sentido ter a divisão se for por número"
);
console.log("7" / "2");

console.log(
  "O JavaScript vai tentar realizar a convesao de um texto para numero e tentar dividir esse valor, porém irá retornar um tipo especial'NaN' que significa 'Not a Number'"
);
console.log(
  "Ou seja, ele tenta fazer a operação mas nao consegue por um dos tipos nao ser numero, retornando esse tipo 'NaN'"
);
