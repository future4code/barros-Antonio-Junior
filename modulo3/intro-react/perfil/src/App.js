import imagem from './Imagem-Perfil.jpg';
import './App.css';

function App() {
  const boasVindas = "Seja Bem Vindo Antônio"
  function mensagem(){
    alert("Boa Noite !")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>{boasVindas}</h2>


        <img src={imagem} className= "Perfil" alt="Imagem Perfil"/>
        <p>
          Olá, me chamo Antônio. Tenho 26 anos e sou aluno da Labenu!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <button onClick={mensagem}>Clique Aqui</button>
      </header>
    </div>
  );
}

export default App;
