import React from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Feature from "./Feature";
import Review from "./Review";
import Contact from "./Contact";
import"./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';


const App=()=>{

  return (

    <>
    <Navbar/>
    <Switch>
        <Route exact  path="/" component={Home}/>
        <Route exact  path="/Service" component={Service}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Feature" component={Feature}/>
        <Route exact path="/Review" component={Review}/>
        <Route exact path="/Contact" component={Contact}/>


       </Switch>
    
    </>
  );
}
export default App;