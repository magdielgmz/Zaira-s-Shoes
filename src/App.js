import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About'
import Catalouge from './pages/Catalouge'
import Contact from './pages/Contact'
import Home from './pages/Home'
import UserRegister from './pages/UserRegister'


function App() {
  return (
    <Router>
      <Navbar />
        <section className="seccion1">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/catalouge">
            <Catalouge />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/user">
            <UserRegister />
          </Route>
        </Switch>

         
          
        </section>
    </Router>
  );
}

export default App;
