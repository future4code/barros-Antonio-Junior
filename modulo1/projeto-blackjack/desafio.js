/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    if(confirm("Quer iniciar uma rodada, sim ou não?")) {
      let respostaUsuario = "sim"
      console.log(respostaUsuario === "Vamos la")
      Array= Number("A","2","3","4","5","6","7","8","9","10","J","Q","K")
      const player1 = respostaUsuario
   
     } else {
        respostaUsuario = "não"
        console.log(respostaUsuario === "O jogo acabou!")
     }
     function comprarCarta() {
     
        Array= Number("A","2","3","4","5","6","7","8","9","10","J","Q","K")
      
        
        const naipes = ["♦️", "♥️", "♣️", "♠️"]
      
        
        const numero = cartas[Math.floor(Math.random() * 13)]
      
        
        const naipe = naipes[Math.floor(Math.random() * 4)]
      
        let valor
      
        
        if (numero === "A") {
          valor = 1
        } else if (numero === "J" || numero === "Q" || numero === "K") {
          valor = 10
        } else { 
          valor = Number(numero)
        }
      
     
        const carta = {
          texto: numero + naipe,
          valor: valor
        }
      
       console.log(carta)
      }