function square(x){
	return x * x;
}

function addsquare(a, b){
	let raizA = square(a);
	let raizB =  square(b);

	return raizA + raizB;
}

console.log(addsquare(7, 7));


function resultado(a, b){
	let concatenar = (val) => "Este é o valor" + val;
	let valor = a + b;
	let retorno = concatenar(valor);

	return retorno;
}

console.log(resultado(7, 3));

