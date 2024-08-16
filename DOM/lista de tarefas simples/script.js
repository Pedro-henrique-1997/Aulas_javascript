var campo = document.querySelector("input");
var tabela = document.getElementById("tabela");

campo.addEventListener("keyup", (tecla) => {
if (tecla.code == "Enter") {
	var li = document.createElement("li");
	li.innerHTML = campo.value;
	tabela.appendChild(li);

	campo.value = " ";
   }else{
   	 console.log("Nao e enter")
   }
})