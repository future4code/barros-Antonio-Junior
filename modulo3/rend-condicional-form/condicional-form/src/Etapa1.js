import './App.css';

function Etapa1() {
  return (
    <div className="Etapa1">
      
      <h1>DADOS GERAIS</h1>

     <form name='f_cadastro' action='#' method='get'></form>
     <br></br>
     <h3>Qual o seu nome?</h3>
     <form name='f_cadastro' action='#' method='get'></form>
     <br></br>
     <br></br>
     <h3>Qual sua idade?</h3>
     <form name='f_cadastro' action='#' method='get'></form>
     <br></br>
     <br></br>
     <h3>Qual seu email?</h3>
     <form name='f_cadastro' action='#' method='get'></form>
     <br></br>
     <br></br>
     <h3>Qual a sua escolaridade?</h3>
     <form name='f_cadastro' action='#' method='get'>
     <select name='f_escolaridade'>
     <option>Ensino fundamental incompleto</option>
     <option>Ensino fundamental completo</option>
     <option>Ensino medio incompleto</option>
     <option>Ensino medio completo</option>
     <option>Ensino superior incompleto</option>
     <option>Ensino superior completo</option>
     </select>
     <input class='espaco_t quebra' type='subimit' name='f_enviar' value='Enviar'></input>
     </form>
    </div>
  );
}

export default Etapa1;