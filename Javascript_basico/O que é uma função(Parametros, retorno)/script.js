function gravidade(){
	console.log("A gravidade e: ");
	console.log(9.8);
}

gravidade();
gravidade();

var cartaoStatus = true;
var saldo = 2500;

function checarCartao(){
	var checar = cartaoStatus ? `${saldo}` : `Cartao Desabilitado`;
	console.log(checar);
}

function checarSaldo(){
	var verifSaldo = cartaoStatus ? `O saldo e: ${saldo}` : `Seu cartao esta desabilitado`;
	var saldoValor = saldo > 3000 ? `O valor precisa ser acima de 3000` : `Saldo aceitavel`;
	console.log(saldoValor);
}

checarSaldo();

//Funções com parametros
function somar(n1, n2){
	let soma = n1 + n2;
	console.log("Resultado: " + soma);
}

somar(100, 50);

function nomeCompleto(nome, sobrenome){
	console.log(`${nome}  ${sobrenome}`);
}

nomeCompleto("Pedro Henrique", "carneiro gomes da silva");

var dadoAntigo = 0.70;

function inserirNovoSaldo(saldoInserido){
	var novoSaldo = dadoAntigo + saldoInserido;

	console.log("Saldo anterior: " + dadoAntigo);
	console.log("Novo Saldo: " + novoSaldo);
}

inserirNovoSaldo(200);

//funções com retorno

function numeros(num){
	return `${num}`;
}

var number = console.log(numeros(1));

function carregar(dado1, dado2, dado3){
	var elementos = dado1 + dado2 + dado3;
	return `${elementos}`;
}

var exibir = console.log(carregar(40, 50, 60));

//funções com retorno de condicional 


function carregar2(dado1, dado2, dado3){
	var elementos = dado1 + dado2 + dado3;
	
	if(elementos >= 300){
		return `${elementos} . Elemento acima de 300`;
	}
	else{
		return `${elementos} . Elemento abaixo de 300`;
	}
}

var exibirElemento = carregar2(400, 50, 150);

console.log(exibirElemento);

function calcPrc(n1, n2){
	return (n1 / n2) * 100;
}

let x = 80;
let y = 10;
let porcentagem = calcPrc(x, y);

console.log(porcentagem)

function calcularImovel(metragem, quartos){
	let m2 = 3.000;
	let preco = 0;

	switch(quartos){
		case 1:
		default:
		preco = metragem * m2;
		break;

		case 2:
		preco = metragem * (m2 * 1.2);
		break;

		case 3:
		preco = metragem * (m2 * 1.5);
		break;
	}

	return preco;
}

let preco = calcularImovel(123, 2);
console.log(preco);