function executar(){
	alert("Funcao executada");
}

//executar();

function executarParametro(param){
	var variavel = `Retorno: ${param}`;

	return variavel;
}

console.log(executarParametro("teste"));

function somar(x, y){
	var a = x;
	var b = y;

	return a + b;
}

console.log(somar(1, 2));

var saldoAnterior = 11.29;
var cartaoStatus = false;

function checarStatusCartao(cartao){
	if(cartao = true){
		return "Cartao habilitado! Pode fazer recarga";
	}else{
		return "Cartao desabilitado! Desabilite-o para carregar";
	}
}

console.log(checarStatusCartao(cartaoStatus));

function carregarCartao(valor){
	var cartao_status = checarStatusCartao(cartaoStatus);

	if(cartao_status){
		var valor_inserido = valor;
		var valorTotal = valor_inserido + saldoAnterior;

		return "Valor Atual: " + valorTotal;
	}else{
		return "Cartão desabilitado";
	}
}

console.log(carregarCartao(11.91));

console.log("******************Array****************");

var vetor = ['teste 1', 'teste 2', 'teste 3', 'teste 4', 'teste 5'];

console.log(vetor);

for(let vet of vetor){
	console.log(vet);
}



var nomes = ["João","Maria", "Paulo", "Pedro"];
console.log(Array.isArray(nomes));
// saída: true
var nomesString = "João, Maria, Paulo, Pedro";
console.log(Array.isArray(nomesString));
// saída: false

var contador = 0;

while(contador < 15){
	contador++;
	console.log("Contando ate: " + contador);
}

for(let numero = 0; numero<= 10; numero++){
	console.log(numero);
}

var contador2 = 0;
var vazio = [];
var teste = "teste";

while(contador2 <= 5){
     contador2++;
     var conteudo = teste + contador2;
     vazio.push(conteudo);
     console.log(vazio);
}

for(let vzo of vazio){
	console.log(vzo);
}

function gerarArray(limite, contexto){
	var contagem = 0;
	var vetorGerado = [];

	while(contagem <= limite){
		contagem++;        
        vetorGerado.push(contexto + contagem);
       
	}

	return vetorGerado;
}

console.log(gerarArray(10, "numero"));

var elementos = ['teste', 'sikera', 'ana', 'snes'];
var resultado = gerarArray(5, "texto");
console.log(resultado.join('-'));
console.log(elementos.join('||'));
var arrayTeste = gerarArray(5, 'elemento');
console.log(arrayTeste.sort());
console.log(arrayTeste.reverse());

var generico = elementos.filter((item) => {
	return item.length > 3;
});

console.log(generico);

var contadorArray = elementos.every((item) =>{
	return elementos.length >= 3;
});

console.log(contadorArray);

var contadorArray2 = elementos.some((item) =>{
	return elementos.length < 3;
});

console.log(contadorArray2);

const verificar = elementos.includes("sikera");

if(verificar){
	console.log("Sikera existe");
}else{
	console.log("Sikera nao existe");
}

console.log("-----------Objetos-----------");

const monstro = {
	nome: "Green Dragao",
	classe: "dragon",
	habitat: "castelos",
	habilidades: ['firebreath', 'tail atack', 'bite'],
	vantagem: "terra",
	desvantage: "agua",
	PontosDeHabilidades: {
		forca: 60,
		defesa: 50,
		agilidade: 70,
		movimento: 40
	},

	aprenderPoderes: function(txt){
		var novo_poder = this.habilidades.push(txt);

		return this.habilidades;
	},


}

console.log(monstro);
console.log(monstro.habilidades[0]);
console.log(monstro.PontosDeHabilidades.forca += 40);
console.log(monstro.aprenderPoderes("Choque eletrico"));

