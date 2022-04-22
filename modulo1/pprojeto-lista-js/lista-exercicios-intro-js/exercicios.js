// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  calculaAreaRetangulo(3,5)
  calculaAreaRetangulo(2,6)
  return altura * largura
  }  

// EXERCÍCIO 02
function imprimeIdade(idadeAtual , idadeNascimento) {
  // implemente sua lógica aqui
imprimeIdade(2020,1990)
imprimeIdade(2021,1967)
return idadeAtual - idadeNascimento
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
calculaIMC(85,1.8)
calculaIMC(70,1.65)
return peso / altura
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
nome = "Alice"
idade = 28
email= "alice@gmail.com"
nome="João"
idade=25
email="joao@gmail.com"
imprimeInformacoesUsuario("Meu nome é",nome,"tenho",idade,"anos, e o meu email é:",email)
return imprimeInformacoesUsuario
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(array1,array2) {
  // implemente sua lógica aqui
array1 =["Azul,Amarelo,Vermelho"]
array2 =["Laranja,Roxo,Preto"]
return imprimeTresCoresFavoritas
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
string="Oi"
string="bAnAnA"
return retornaPrimeiroElemento(toUppperCase(string))
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
calculaIngressosEspetaculo(3000,100)
calculaIngressosEspetaculo(5500,50)
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
checaStringsMesmoTamanho("ola","abc")
checaStringsMesmoTamanho("teste","porta")
checaStringsMesmoTamanho("abc","abcd")
return 
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
retornaPrimeiroElemento([1,2,3])
retornaPrimeiroElemento(["Laranja","Banana","Maçã"])
return array.find[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
retornaUltimoElemento([1,2,3,4,5])
retornaUltimoElemento(["Laranja","Banana","Maçã"])
return array.find[-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
trocaPrimeiroEUltimo([1,2,3,4,5])
trocaPrimeiroEUltimo(["Laranja","Banana","Maçã"])
return array.push(array.splice(0,-1))
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
checaIgualdadeDesconsiderandoCase("Ola","olA")
checaIgualdadeDesconsiderandoCase("bananinha","BANANNINHA")
checaIgualdadeDesconsiderandoCase("banana","BANANINHA")
return 
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}