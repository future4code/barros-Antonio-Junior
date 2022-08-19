import React from 'react'

function Form() {
    return (
      <div className="Form">
    <form>
  <label>
    E-mail
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Enviar" />
</form>
<br></br>
<br></br>
<form>
    <label>
    Senha
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Enviar" />
</form>
      </div>
    );
  }
  
  export default Form;