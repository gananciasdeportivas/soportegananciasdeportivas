import logo from './logo.svg';
import './App.css';
import './components/steps'
import Steps from './components/steps';
import ganancias from './assets/ganancias.png';

function App() {
  return (
    <div className="App">
      <img src={ganancias} alt="My logo" />
      <header className="App-header">
        <Steps/>
      </header>
    </div>
  );
}

export default App;
