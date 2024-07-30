function clicou(){
	const teste = document.querySelector("#teste1");
	const ul = document.querySelector("ul");
	//ul.innerHTML = "<li>Item Alterado</li>"
	ul.innerHTML = ul.innerHTML + "<li>Item Alterado</li>"
	//console.log(teste.children);
}

function alterarDiv2(){
	var teste2 = document.querySelector("#teste2");
	console.log(teste2.innerHTML += " trato feito ");
}