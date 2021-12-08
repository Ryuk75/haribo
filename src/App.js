import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from './pages/Main';
import FormEditUser from './pages/FormEditUser';
import VistModProduccion from './pages/VistModProduccion';
import CrearOrdenProd from './pages/CrearOrdenProd';
//import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path="/FormEditUser" element={<FormEditUser/>}/>
      <Route exact path="/VistModProduccion" element={<VistModProduccion/>}/>
      <Route exact path="/CrearOrdenProd" element={<CrearOrdenProd/>}/>
    </Routes>
    </Router>
  );
}


export default App;
