/*
function apertou(){

  console.log("apertou")
}

function segurou(){
	console.log("Segurou")
}

function soltou(){
	console.log("Soltou")
}
*/ 

//Eventos de Teclado 2

function soltou(e){

  console.log(e.key)
}

const input = document.querySelector("input");
input.addEventListener("keyup", soltou)

//para praticar

function ver(e){
	console.log(e.code)
}

const pratica = document.querySelector("#campo");
pratica.addEventListener("keydown", ver)