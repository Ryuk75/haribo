import NavBar from './components/NavBar'
import Footer from './components/Footer'
//import Principal from './components/Principal'
import TablaUsuarios from './components/TablaUsuarios';
import { Fragment, useState } from 'react';
//import './App.css';

function App() {

  const [listaUsuarios, setListaUsuarios] = useState([
    {cedula:725877638, nombre:"Niki", apellido:"Doyley", email:"ndoyley0@accuweather.com", genero:"Male", ciudad:"Cilongkrang", telefono:3005293623, password:"WWvX3I", status:false, nacimiento:"16/05/1969"},
    {cedula:499003072, nombre:"Rosalind", apellido:"Siene", email:"rsiene1@answers.com", genero:"Female", ciudad:"San José", telefono:3005294131, password:"tqODSE", status:false, nacimiento:"04/04/1988"},
    {cedula:1829470650, nombre:"Ervin", apellido:"Spira", email:"espira2@canalblog.com", genero:"Male", ciudad:"Dogondoutchi", telefono:3005292961, password:"ywe6jggqPJ", status:false, nacimiento:"07/12/1984"},
    {cedula:1573831980, nombre:"Myrtia", apellido:"Padberry", email:"mpadberry3@cnbc.com", genero:"Female", ciudad:"Takedamachi", telefono:3005296949, password:"zkfkvV", status:true, nacimiento:"25/04/1952"},
    {cedula:1757960987, nombre:"Farrel", apellido:"Kleuer", email:"fkleuer4@unblog.fr", genero:"Male", ciudad:"Caoping", telefono:3005293007, password:"sIeje0", status:true, nacimiento:"06/07/1962"},
    {cedula:723475173, nombre:"Sawyere", apellido:"Turbern", email:"sturbern5@paypal.com", genero:"Male", ciudad:"Yuzhou", telefono:3005290783, password:"PAi1ZnGt", status:true, nacimiento:"07/12/1965"},
    {cedula:1585194053, nombre:"Layla", apellido:"Lewis", email:"llewis6@myspace.com", genero:"Female", ciudad:"Yurkivka", telefono:3005293563, password:"qr4Af93X", status:true, nacimiento:"10/07/1964"},
    {cedula:503857080, nombre:"Kiele", apellido:"Robins", email:"krobins7@umich.edu", genero:"Female", ciudad:"Skövde", telefono:3005291915, password:"RXOgPMq", status:false, nacimiento:"02/06/1976"},
    {cedula:477865120, nombre:"Maryrose", apellido:"Paolone", email:"mpaolone8@dailymail.co.uk", genero:"Male", ciudad:"Tanjungpati", telefono:3005295985, password:"4xkRLcOK", status:false, nacimiento:"23/12/1982"},
    {cedula:978732900, nombre:"Gerladina", apellido:"De la Harpe", email:"gdelaharpe9@blog.com", genero:"Female", ciudad:"Aourir", telefono:3005297849, password:"HLu9Ppsm", status:false, nacimiento:"05/02/1977"},
    {cedula:833685345, nombre:"Lucias", apellido:"Bengoechea", email:"lbengoecheaa@w3.org", genero:"Female", ciudad:"Looc", telefono:3005297566, password:"l4D5A0DsxTO", status:true, nacimiento:"19/03/1981"},
    {cedula:755165514, nombre:"Lexine", apellido:"McMurdo", email:"lmcmurdob@cmu.edu", genero:"Male", ciudad:"Jasienica Rosielna", telefono:3005294390, password:"vFDnmyL", status:true, nacimiento:"27/04/1990"},
    {cedula:135900243, nombre:"Eloisa", apellido:"Zoppie", email:"ezoppiec@japanpost.jp", genero:"Female", ciudad:"Cangqian", telefono:3005299137, password:"gtc0h492xttY", status:true, nacimiento:"20/05/1988"},
    {cedula:363321831, nombre:"Law", apellido:"Glancy", email:"lglancyd@printfriendly.com", genero:"Male", ciudad:"Plato", telefono:3005297128, password:"igdCvNP", status:false, nacimiento:"07/07/1973"},
    {cedula:1746884508, nombre:"Blithe", apellido:"Demer", email:"bdemere@cam.ac.uk", genero:"Female", ciudad:"Teryayevo", telefono:3005299660, password:"gX8wBd", status:false, nacimiento:"11/06/1972"}
  ]);

  const informacion = {
    ubicacion: "2021 Haribo Gummies. Miami, Fl"
  };

  const modificarStatus = (cedula) => {
    let copiaUsuarios = [ ...listaUsuarios ];
    let usuario = copiaUsuarios.find( (parametro) => parametro.cedula === cedula);
    usuario.status = !usuario.status;
    setListaUsuarios(copiaUsuarios);
  }

  const eliminarUsuario = (cedula) => {
    let copiaUsuarios = listaUsuarios.find( (parametro) => parametro.cedula !== cedula);;
    setListaUsuarios(copiaUsuarios);
  }

  return (
    <Fragment>
      <div className='container'>
        <NavBar />
        <TablaUsuarios usuarios = { listaUsuarios } modificarStatus = { modificarStatus }
                       eliminarUsuario = { eliminarUsuario } />
        <Footer { ...informacion }/>
      </div>
    </Fragment>
  );
}

export default App;
