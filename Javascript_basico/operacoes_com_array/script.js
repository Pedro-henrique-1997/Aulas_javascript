let fruits = ['banana', 'maca', 'uva', 'morango', 'jaca', 'abacate'];

let elementos = ["fogo", "agua", "terra", "ar"];

console.log(elementos.sort());
console.log(elementos.reverse());

fruits.sort();
fruits.reverse();

console.log(fruits);

let carros = [
   {nome: "fiat", ano: "2020"},
   {nome: "bmw", ano: "2021"},
   {nome: "una", ano: "2023"},
   {nome: "mustange", ano: "2024"}
]

carros.sort((a, b) => {
	if(a.ano > b.ano){
		return 1;
	}else if(b.ano > a.ano){
		return -1;
	}else{
		return 0;
	}
})

console.log(carros);

var pokemon = [
  {nome: "charmander", tipo: "fogo", ID: 23},
  {nome: "bulbassauro", tipo: "grama", ID: 34},
  {nome: "squirtle", tipo: "agua", ID: 11}
]

console.log(pokemon[0].nome);

pokemon.sort((x, y) => {
	if(x.ID > y.ID){
		return 1;
	}else if(x.ID < y.ID){
		return -1;
	}else{
		return 0;
	}
})

console.log(pokemon);
