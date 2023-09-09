import { useState } from 'react';
import './App.css';
import YourName from './components/YourName';
import Greatings from './components/Greatings';
// import Condicional from './components/Condicional';
// import Events from './components/Event';
// import Form from './components/Form';
// import OutraLista from './components/OtherList'

function App() {

    const [name, setName] = useState()
  
  // const myItems = ['React', 'Vue', 'Angular']


  return (
    <div className="App">
      <h1>State Lift</h1>
      <YourName setName={setName}/>
      <Greatings name={name}/>
      {/* <h1>Renderizacao de Listas</h1>
      <OutraLista items={myItems}/>
      <OutraLista items={[]}/> */}
      {/* <h1>Renderizacao Condicional</h1>
      <Condicional/> */}
      {/* <h1>Testando Eventos</h1> */}
      {/* <Events />
      <Events/> */}
      {/* <Events number="1"/> */}
      {/* <Events number="2"/> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
