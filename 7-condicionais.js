console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
  `Aracaju`,
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);
console.log(`Destinos disponíveis para compra: `);
console.log(listaDeDestinos);

const idadeComprador = 21;

if (idadeComprador >= 18) {
  console.log(
    `Destino vendido! :)\nAproveite a viagem para '${listaDeDestinos[0]}' `
  );
  listaDeDestinos.splice(0, 1);
  console.log(`Destinos disponíveis para a compra:`);
  console.log(listaDeDestinos);
} else {
  console.log("Comprador sem idade suficiente para comprar passagens.");
}
