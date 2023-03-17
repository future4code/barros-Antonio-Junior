function tabuada(){
    const num = parseInt(document.getElementById("num").value);
    const resposta = document.getElementById('resposta');
    const tabuada='';
  
    for(var count=1; count<=10 ; count++)
     tabuada += num+" x "+count+" = "+
                 num*count+"<br />";
    
    resposta.innerHTML = tabuada;
  }


console.log("exercício 2");
