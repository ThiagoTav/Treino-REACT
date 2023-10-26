import './App.css';
import HellWorld from './components/HelloWorld';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
const nome = 'Maria'

  return (
    <div className="App">
    <h1>Testando CSS</h1>
  <Frase /> 
  <SayMyName name="Thiago"/>
  <SayMyName name="Matheus"/>
  <SayMyName name={nome}/>
  <HellWorld />
  <Pessoa nome="Thiago" idade="28" profissao="programador"
    foto = "https://via.placeholder.com/150"
  />
    </div>
  );
}

export default App;
