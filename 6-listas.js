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
listaDeDestinos.push(`Curitiba`, `Natal`, `Rio Grande o Sul`, `Minas Gerais`);
console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);
