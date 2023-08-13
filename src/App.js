import './App.css';
import Events from './components/Event';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      {/* <Events /> */}
      <Events number="1"/>
      <Events number="2"/>
      <Form />
    </div>
  );
}

export default App;
