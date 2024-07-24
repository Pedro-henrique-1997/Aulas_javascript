for(let n = 0; n <= 10; n++){
    console.log("Frase Qualquer " + n);
}

for(let num = 10; num >= 0; num--){
   console.log(num);
}


//************Foreach************

var vetor =  ['blue', 'green', 'red'];
/*
for(var vet = 0; vet < vetor.length; vet++){
    console.log(vetor[vet]);
}
*/

for(let vet of vetor){
   console.log(vet)
}

var cores = ['amarelo', 'azul', 'vermelho', 'verde'];

for(let cor in cores){
	console.log(cores[cor]);
}

