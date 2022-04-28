//Exercícios de interpretação de código
/* 1)
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

a) Matheus Nachtergaele
Virginia Cavendish
"Globo"horario: "14h"

2)
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a) vai imprimir juca a idade e a raca, juba, idade e raca, e jubo idade e raca.
b) O resultado que você obterá será o conteúdo, mas sem as chaves ao redor.

 3) 

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) vai ser impresso ''false''
b) Suponho que o resultado deu esse por que verificou a propriedade do beckender e false.*/

// Exercícios de escrita de código

// 1-a)

function pessoa1(pessoa){}
const pessoa = {
	nome: "Antônio", 
	apelidos: ["Tonny", "Tom", "Panda"]
 }
 console.log("Eu sou Antônio, mas pode me chamar de: Tonny, Tom ou Panda")

// b)
function pessoa2(pessoa1){
let novaPessoa={...pessoa, nome: "Carlos",apelidos: "Carlão","Carlinhos" : "Tartaruga"}
}
