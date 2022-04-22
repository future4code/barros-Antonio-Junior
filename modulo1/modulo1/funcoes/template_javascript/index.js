//Exercicio de interpretação de codigo
//Exercicio 1:
/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
a) 10 ,50 
b) nao aparecia nada, pois precisa do console.log para aparecer o resultado no console.

Exercicio 2:

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
a) verifica se e verdadeiro ou false que o usuraio digitou exatamente com igual ao que ta na funcao
b) true, false, false


Exercícios de escrita de código

Exercicio 1 

a) function mensagem(){

mensagem("Eu sou Lucas, tenho 23 anos, moro em Pernambuco e sou estudante")
console.log(mensagem)
}

b) function mensagem(nome,idade,endereço,profissao){

let frase = ("Eu sou", nome, "tenho", toString(idade), "moro em", endereço, " e sou", profissao)

mensagem("Marcia",22,"Salvador", "Programador")
console.log(frase)

}

//Exercicio 2

a)*/ function soma(num1,num2){
 let resultado  = num1 + num2
 soma(3,5)
 console.log(resultado)

}

/*b)*/ function retornarBoleano(num3,num4){
let comparacao = num3 >= num4
retornarBoleano(8,7)
console.log(comparacao)

}

/*c)*/ function verdadeiroOuFalso(primeiroNumero,segundoNumero){
let par = primeiroNumero % segundoNumero
verdadeiroOuFalso(4,6)
console.log(par)
}

/*d)*/ function mensagem(frase) {
let tamanho= frase.length 
let maiuscula = frase.toupper
console.log(tamanho, maiuscula)
mensagem("Olá Mundo")
}

// Exercicio 3

function calculos(soma, diferença, multiplicacao, divisao) {
let numerosUsuarios = [30,3]
let resultadoSoma = numerosUsuarios + soma
let resultadoDiferenca =  numerosUsuarios - diferença
let resultadoMultiplicacao = numerosUsuarios * multiplicacao
let resultadoDivisao = numerosUsuarios / divisao
console.log(resultadoSoma, resultadoDiferenca, resultadoMultiplicacao, resultado,resultadoDivisao)
calculos(33,27,90,10)
}





