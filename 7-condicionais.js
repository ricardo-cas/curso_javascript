console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
  `Aracaju`,
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

console.log(`Deletando itens...`);
listaDeDestinos.splice(0, 3);
console.log(listaDeDestinos);
console.log(`\n
Para mostrar somente um elemento da lista, é necessário passar o indice como parametro da lista`);
console.log(listaDeDestinos[0]);
console.log(listaDeDestinos[0], listaDeDestinos[3]);
