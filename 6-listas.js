console.log(`Trabalhando com listas`);
// Declarando lista de destinos
//  as listas são chamadas do tipo Array

const listaDeDestinos = new Array(
  `Aracaju`,
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

// como imprimir a lista?
console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);
console.log(`Para adicionar algum item dentro de uma lista {Array}\n
é utilizado o comando '.push()'\n`);
console.log(`Adicionando itens...`);
listaDeDestinos.push(`Curitiba`, `Natal`, `Rio Grande o Sul`, `Minas Gerais`);
console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);
console.log(`\n
Para realizar a remoção de itens de uma lista é necessário utilizar o comando: .splice([valor inicial],[quantidade de itens a serem deletados])\n
Conforme lista abaixo:`);
console.log(listaDeDestinos);
console.log(`Deletando itens...`);
listaDeDestinos.splice(0, 3);
console.log(listaDeDestinos);
console.log(`\n
Para mostrar somente um elemento da lista, é necessário passar o indice como parametro da lista`);
console.log(listaDeDestinos[0]);
console.log(listaDeDestinos[0], listaDeDestinos[3]);
