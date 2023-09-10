import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'

function App(){
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/company">Company</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {/* it was necessary update the routing configuration in the App.js or another relevant file. Replace the Switch component that Matheys Battisti talked about with the Routes component, like I made below */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App





// import { useState } from 'react';
// import './App.css';
// import YourName from './components/YourName';
// import Greatings from './components/Greatings';
// // import Condicional from './components/Condicional';
// // import Events from './components/Event';
// // import Form from './components/Form';
// // import OutraLista from './components/OtherList'

//to run the Router dom its necessary install for the terminal -> npm install react-router-dom

// function App() {

//     const [name, setName] = useState()
  
//   // const myItems = ['React', 'Vue', 'Angular']


//   return (
//     <div className="App">
//       <h1>State Lift</h1>
//       <YourName setName={setName}/>
//       <Greatings name={name}/>
//       {/* <h1>Renderizacao de Listas</h1>
//       <OutraLista items={myItems}/>
//       <OutraLista items={[]}/> */}
//       {/* <h1>Renderizacao Condicional</h1>
//       <Condicional/> */}
//       {/* <h1>Testando Eventos</h1> */}
//       {/* <Events />
//       <Events/> */}
//       {/* <Events number="1"/> */}
//       {/* <Events number="2"/> */}
//       {/* <Form /> */}
//     </div>
//   );
// }

// export default App;
