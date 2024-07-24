let personagem = {
	nome: "Pedro Henrique",
    sobrenome: "Carneiro Gomes da Silva",
	idade: 26,
	pais: "Brasil",
	caracteristicas: {
		magia: 40,
	    forca: 60,
	    armas: ['espada', 'machado', 'cajado']
	}
	
}

console.log(personagem);

console.log(personagem.caracteristicas.armas[1]);
console.log(`Dados do personagem ${personagem.caracteristicas}`);

let classe = {
	nome: "mago",
	armas: "cajado",
	equipamentos: ['anel', 'capa', 'livro'],
	magia: 100,
	feiticos: ['fogo', 'gelo', 'curar'],
	status: "ativo",
	dadosAdicionais: {
		forca: 60,
		velocidade: 40,
		defesa: 50,
		resistencia: 40

	},
	aumentoDeForca: function(qtd){
		return this.dadosAdicionais.forca += qtd;
	},
	aprenderFeiticos: function(tst){
		if(this.magia >= 100){
			return this.feiticos.push(tst);
		}else{
			return `${`Quantidade de magia nao suficiente`}`
		}
	}
}
classe.nome = "Paladino";
//classe.dadosAdicionais.forca +=40;
//classe.magia -=70;
classe.feiticos.push("vigor");
//console.log(classe.dadosAdicionais.forca);
console.log(classe.nome);
console.log(classe.magia);
console.log(classe.aumentoDeForca(40));
console.log(classe.aprenderFeiticos("raios"));
console.log(classe.feiticos);

let dono = {
	nome: "Fulano de tal",
	idade: 26,
	carros: [
	   {modelo: "ferrari", cor: "vermelha"},
	   {modelo: "fiat", cor: "azul"}
	]
}

console.log(dono.carros[0].modelo);

console.log("***************Funcao com objetos********");

const pessoa = {
	nome: "Pedro Henrique",
	sobrenome: "Carneiro Gomes da Silva",
	idade: 26,
	nomeCompleto: function(){
		return this.nome + ' ' + this.sobrenome;
	}
}

console.log(pessoa.nomeCompleto());