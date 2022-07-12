import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {



  return (
    <div className="App">
    
      <SayMyName nome="Alex" />
      <SayMyName nome="Felicio" />
      <Pessoa nome="Alex" idade="22" profissao="engenheiro" foto="https://via.placeholder.com/150" />
    </div>

  );
}

export default App;
