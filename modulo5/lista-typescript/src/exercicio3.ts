enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
  }
  
  type filme = {
    nome: string;
    anoLancamento: number;
    genero: GENERO;
    pontuacao?: number;
  };
  
  const funcao3 = (nome: string, ano: number, genero: GENERO, nota?: number): filme => {
    if (nota) {
      return {
        nome: nome,
        anoLancamento: ano,
        genero: genero,
        pontuacao: nota
      };
    } else {
      return {
        nome: nome,
        anoLancamento: ano,
        genero: genero
      };
    }
  };
   console.log("ex.3", funcao3("Duna", 2021, GENERO.ACAO, 74));