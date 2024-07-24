
//Aula 1
/*
function clicou(){
	const teste = document.querySelector("#teste1");
	const ul = document.querySelector("ul");
	ul.innerHTML = "<li>Item Alterado</li>";
	ul.innerHTML = ul.innerHTML + "<li>Item Alterado</li>";
	//console.log(teste.children);
	//console.log(teste.children[0].children);
}

function alterarDiv2(){
	const div2 = document.querySelector("#teste2");
	const elemento2 = document.querySelector("#ul2");
	elemento2.innerHTML = elemento2.innerHTML + "<li>Alguma coisa 6</li>";

	console.log(div2.children);
	console.log(elemento2.children[0]);


}

*/
//Manipulando elementos 2

function clicou(){
	const teste = document.querySelector("#teste1");
	const ul = document.querySelector("ul");
	
	ul.children[0].append(" Alterado");

	let newElement = document.createElement("li");
	newElement.innerText = "Algum item ";

	ul.appendChild(newElement);
}
