import './App.css';
import HellWorld from './components/HelloWorld';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/list';
import Evento from './components/Eventos';
import Form from './components/form';


function App() {
const nome = 'Maria'

  return (
    <div className="App">
    <h1>Testando Eventos</h1>
    <Evento numero="1"/>
    <Evento numero="2"/>
    <Form />
    </div>
  );
}

export default App;
