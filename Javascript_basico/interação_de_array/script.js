let fruits = ['maca', 'pera', 'laranja', 'banana', 'uva'];

let frutas = fruits.filter((item) => {
	return item.length <= 4;
});

var numeros = [1, 10, 3, 9, 28, 89];

var condicao = numeros.filter((item) => {
	return item >= 10;
});

var multiplos = [5, 8, 10, 25, 55, 89, 40, 75];

var condicao5 = multiplos.filter(multiplos => multiplos % 5 === 0);
console.log(condicao5);

console.log(condicao);

var vetor = [9, "teste", "2", 291, "valor"];

var string = vetor.filter((value) => {
	return value.length >= 0;
});

console.log(string);
console.log(frutas);

console.log("*************Funcao every************");

let ok = fruits.every((value) => {
	return fruits.length < 3;
});

if(ok){
	console.log("Todos sao maiores que 3");
}else{
	console.log("Todos nao sao maiores que 3");
}
var animais = ["ave", "anfibio", "insetos"];

var verificacao = animais.every((teste) => {
	return animais.length < 5;
});

console.log(verificacao);

console.log("*************Funcao some************");

let ok2 = fruits.some((value) => {
	return fruits.length > 3;
});

if(ok2){
	console.log("Todos sao maiores que 3");
}else{
	console.log("Todos nao sao maiores que 3");
}

console.log("*******funcao includes*******");

if(fruits.includes("pera")){
	console.log("Tem pera");
}else{
	console.log("Nao tem pera");
}


if(animais.includes("aquaticos")){
	console.log(true);
}else{
	console.log(false);
}