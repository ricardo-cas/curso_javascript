console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
  `Aracaju`,
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);
console.log(`Destinos disponíveis para compra: `);
console.log(listaDeDestinos);

console.log(
  `Destino vendido! :)\nAproveite a viagem para ${listaDeDestinos[0]} :) `
);
listaDeDestinos.splice(0, 1);
console.log(`Destinos disponíveis para a compra:\n *Sujeito a disponibilidade`);
console.log(listaDeDestinos);
