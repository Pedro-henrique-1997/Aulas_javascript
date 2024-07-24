var frutas = ['banana', 'maca', 'melancia', 'pera'];
var animais = ['ave', 'reptil', 'anfibio', 'insetos'];

animais.push("mamiferos");

for(let ani of animais){
	console.log(ani);
}
animais.pop();
console.log(animais.join("-"))
//frutas.push("laranja")
//console.log(frutas.length);
//frutas.pop()
//console.log(frutas.join('-'));
console.log(frutas[0] = "uva");
console.log(frutas);