function clicou(){
	const teste = document.querySelector("#teste1");
	const ul = document.querySelector("ul");
	//Aula 1
	//ul.innerHTML = "<li>Item Alterado</li>"
	//ul.innerHTML = ul.innerHTML + "<li>Item Alterado</li>"
	//console.log(teste.children);

	//Aula 2
	//ul.children[0].append("alterado");

}

function alterarDiv2(){
	var teste2 = document.querySelector("#teste2");
	var ul2 = document.getElementById("ul2");
	//Aula 1
	//console.log(teste2.innerHTML += " trato feito ");
	//Aula 2
	var li = document.createElement("li");
	li.innerHTML = "Algum item 5";
	ul2.appendChild(li);
}