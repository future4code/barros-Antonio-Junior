// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
tamanhoDaArray= array.length
return retornaTamanhoArray

}
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let inversaoDeArray = array.reverse
  return retornaArrayInvertido
}


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
let arrayOrdenado = array.sort
return retornaArrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  if (array % 2 === 0){}
  let pares = array.filter(retornaNumerosPares)
  return pares
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    if (array % 2 === 0){}
    if (array * 2){}
        let pares = array.filter(retornaNumerosParesElevadosADois)
        return pares}

// EXERCÍCIO 06
let arrayTamanho = array.length
let arrayCrescente = array.sort((a,b) => a-b);
function retornaMaiorNumero(array) {
return arrayCrescente[4]
    }

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maiorNumero
let menorNumero
if(num1<num2){
maiorNumero = num2
} if(num1 > num2){
    maiorNumero = num1
} if(num1 > num2){
    menorNumero = num1
} if (num1 < num2){
    menorNumero = num2
}
let divisivel = menorNumero % maiorNumero === 0
let diferente = maiorNumero - menorNumero
return retornarobjeto = {
    maiorNumero: maiorNumero , 
    maiorDivisivelporMenor:divisivel,
    diferenca: diferente
}
}

// EXERCÍCIO 08
function retornaNNumerosPares(n) {

    function retornaNNumerosPares(n) {
        let numerosPares = [];
        for (let i = 0; numerosPares.length < n; i++) {
            if (i % 2 == 0) {
                numerosPares.push(i);
            }
        }
        return numerosPares;
    }
    
}



// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    
    
        if(a + b > c && a + c > b && b + c > a){
            return ("Os 3 lados formam um triangulo!");
            if(a == b && a == c)
                return ("Equilatero")
            else
                if(a == b || a == c || b == c)
                return ("Isosceles");
                else
                    return ("Escaleno")
        }
        else
            return classificaTriangulo
    }

// EXERCÍCIO 10
let tamanhoDaArray = array.length
let CrescenteArray = array.sort((a,b) => a-b);
function retornaSegundoMaiorESegundoMenor(array) {
        return CrescenteArray[5,1]
}

// EXERCÍCIO 11

function retornaChamadaDeFilme(filme) {
    
    }
    

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}