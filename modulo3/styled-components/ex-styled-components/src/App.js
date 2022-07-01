import styled from "styled-components";
import {Cabecalho,Rodape,Principal} from "./styled"

function App() {
  
  return (
<div className="App">
  <Cabecalho>
    <p>LabeZap</p>
  </Cabecalho>
<Principal>
<form>
   <label>
   <input type ="text"
   name="name" />
   </label>
   <input type="subimit"
   value="Enviar"/>

   </form>
   </Principal>

<Rodape>
  <p>Antonio Junior Copryghts 2022 Labenu Coporations</p>
</Rodape>
  


</div>


  )
}

export default App;
