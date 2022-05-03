//Exercícios de interpretação de código
/* 1-
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
//R= 
//a) Ele vericica se o numero que o usuario digito e igual que ele quer passe no teste.
//b) de 0 a 2
  c) se for maior que 2

2 = 
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Verifica os preços das frutas que o usuario digitar.
//b) O preço da fruta Maçâ é 2.25
//c) Ele imprime o preço 5 que e o de baixo.

// 3=

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//a) Ta transformando a pergunta do usuario que é uma string em number.
//b) Digitando 10, vai dizer que passou no teste, e digintando -10 vai dizer que nao passou no tete.
//c) Deu erro. Suponho que não ta considerando numeros negativos.

 Exercícios de escrita de código*/

/*
const respostaDoUsuarioIdade = prompt("Qual a sua idade?")
const numero = Number(respostaDoUsuarioIdade)

if (numero >= 18) {
  console.log("Você pode dirigir.")
} else {
  console.log("Você não pode dirigir.")
}*/

/* 2-
const turnoDoUsuario = prompt("Escreva qual turno voce estuda. V para Vespertino, M para matutino e N para noturno!")
const maturnino = "M"
const Vespertino = "V"
const noturno = "N"
if (maturnino) {
  console.log("Bom Dia!")}
if (Vespertino){
  console.log("Boa Tarde!")}
 if (noturno){
  console.log("Boa Noite!")}
 else {
  console.log("Algo deu Errado, digite apenas V para verpertino, M para matutino e N para noturno")
}*/

/*3-
const respostaDoUsuario = prompt("Escreva qual turno voce estuda. V para Vespertino, M para matutino e N para noturno!")
function turnoDoUsuario(respostaDoUsuario){

if (respostaDoUsuario === "M") {
  console.log("Bom Dia!")}
else if (respostaDoUsuario === "V"){
  console.log("Boa Tarde!")}
else if (respostaDoUsuario === "N"){
  console.log("Boa Noite!")}
}*/

// 4- 
