import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App(){
  return (
    <Router>
      <NavBar/>
      {/* it was necessary update the routing configuration in the App.js or another relevant file. Replace the Switch component that Matheys Battisti talked about with the Routes component, like I made below */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App


//install icons in react: npm install react-icons 



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
