var isMember = false;
var cartaoHabilitado = false;
var valor = 250

var saldo = cartaoHabilitado ? valor : "Seu cartao esta desabilitado";
console.log(saldo);

var freteValor = isMember ? 2 : 10;

console.log("Frete: " + freteValor);
console.log(isMember ? "Voce e membro" : "Voce nao e membro");

