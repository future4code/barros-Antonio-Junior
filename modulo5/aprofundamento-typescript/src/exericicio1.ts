//ex.1
// a)

const minhaString : string = "valor"

// b)

let meuNumero : string | number = 54 
meuNumero = "54"

// c)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1: Pessoa = {
    nome: "Fulano",
    idade: 24,
    corFavorita: "rosa"
}

const pessoa2: Pessoa = {
    nome: "Fulana",
    idade: 43,
    corFavorita: "verde"
}

const pessoa3: Pessoa = {
    nome: "Fulane",
    idade: 29,
    corFavorita: "vermelho"
}