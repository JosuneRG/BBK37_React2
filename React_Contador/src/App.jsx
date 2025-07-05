import Counter from './components/Counter';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
      <div>
          <div> 
              <Greeting name="Euralio" />
          </div>
          <div>
              <h1>Contador</h1>
              {/* Inicia en 10 y cambia de 2 en 2 */}
              <h2>Inicia en 10 y cambia de 2 en 2</h2>
              <Counter initialValue={10} step={2} />
              <h2>Otro contador que inicia en 0 y cambia de 1 en 1</h2>
              {/* Otro contador que inicia en 0 y cambia de 1 en 1 */}
              <Counter />
          </div>
      </div>
  );
}

export default App