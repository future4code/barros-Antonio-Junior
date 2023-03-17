// letra "a"
// utilizando o process.argv a partir do índice 2

// letra "b"
// function falaOi() {
//   const nome = process.argv[2]
//   const idade = process.argv[3]
//   console.log(`Olá, ${nome}! Você tem ${idade} anos!`)
// }

// letra "c"
function falaOi() {
  const nome = process.argv[2]
  const idade = Number(process.argv[3])
  console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}.`)
}

falaOi()