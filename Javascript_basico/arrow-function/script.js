const somar = (x, y) => {
	return x + y;
}


const verificar = (num) => {
	if(num >= 10){
		return "Maior que 10";
	}else{
		return "Menor que 10";
	}
}

const ampliar = (valor) => {
	if(valor >= 10){
		valor = valor +  2;
		return valor;
	}else{
		valor = valor +  4;
		return valor;
	}
}

console.log(ampliar(11));

let myFunction = (a, b) => a * b;

hello = (val) => "Hello " + val;

complemento = (val) => "teste " + val;

completarCpf = (val) => "1234-" + val;

console.log(completarCpf("8343"));

const calcular = (a, b) =>{
	valor = a - b;

	return valor;
}

console.log(calcular(7, 1));

console.log(complemento("em andamento"));

console.log(hello("world"));

console.log(verificar(6));

console.log(somar(5, 10));

console.log(myFunction(9, 2));