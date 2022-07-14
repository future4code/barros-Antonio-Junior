import './App.css';

function Etapa3() {
  return (
    <div className="Etapa3">

     <h1>INFORMAÇÕES GERAIS DE ENSINO</h1>

     <form name='f_cadastro' action='#' method='get'></form>
     <br></br>
     <h3>Por que você não terminou um curso de graduação?</h3>
     <form name='f_cadastro' action='#' method='get'></form>
     <br></br>
     <br></br>
     <h3>Você fez algum curso complmentar?</h3>
     <select name='f_curso'>
     <option>Sim</option>
     <option>Não</option>
     </select>
     <input class='espaco_t quebra' type='subimit' name='f_enviar' value='Enviar'></input>
    </div>
  );
}

export default Etapa3;