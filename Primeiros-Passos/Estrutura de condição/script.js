let idade =  20;
let idade2 =  10

if(idade === 20){
	idade = idade + 1510
	console.log("Idade adicionada com sucesso");
	console.log(idade);
}


//Multi Condicionais

/*
if(idade2 >= 18){
	if(idade2 < 60){
		console.log("Voçe é um adulto");
	}
}
*/

if(idade2 >= 18 && idade2 < 60){
	console.log("Voçe é um adulto");
}


if(idade2 <= 18){
	console.log("Voçê é adolescente");
}
else if(idade >= 19 && idade2 <= 60){
	console.log("Voçe é adulto");
}
else{
	console.log("Voçe é idoso");
}

let w =  10;
let z = 5;

if(w > z){
	console.log(true);
}else{
	console.log(false);
}

let preco =  50.3;

if(preco <= 45){
	console.log("Barato");
}else{
	console.log("Caro");
}

let a = "10";
let b = 10;

if(a == b){
	console.log(true);
}else{
	console.log(false);
}