function clicou(){
	console.log("teste");
}

function abrirPopUp(){
	window.open("index2.html", "meuPopUp", "width=1000, height=1000");
}

let botao = document.querySelector('.botao');

var checkbox = document.querySelectorAll("#flexCheckDefault");
var botaoMarcador = document.querySelector("#btnCheck");

botao.addEventListener('click', function(){
	clicou();
});

botaoMarcador.addEventListener("click", function(){
	
	for(let marcado of checkbox){
       marcado.checked = !marcado.checked;
	}
})
