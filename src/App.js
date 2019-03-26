import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Alumnis from './components/alumnis/Alumnis';
import AlumniDetails from './components/alumnis/AlumniDetails';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/alumnis" component={Alumnis} />
            <Route exact path="/alumnis/:id" component={AlumniDetails} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
