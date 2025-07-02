import './App.css'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import Header from './components_restaurante/Header'
import Home from './components_restaurante/Home'

function App() {
  
  const dishes = [
  {
    id: 1,
    name: 'plato 1',
    description: 'Este es el plato 1',
    price: 10,
  },
  {
    id: 2,
    name: 'plato 2',
    description: 'Este es el plato 2',
    price: 20,
  },
  {
    id: 3,
    name: 'plato 3',
    description: 'Este es el plato 3',
    price: 15,
  },
];

  return (

  <div>

    <div>
      <p>Contador:</p>
      <Counter initial={10} step={1} />
    </div>

    <div>
      <h1>Saludos personalizados:</h1>
      <Greeting name="Euralio" />
    </div>

    <div>
      <Header />
      <Home dishes={dishes} />
    </div>
  </div>


);
}

export default App
