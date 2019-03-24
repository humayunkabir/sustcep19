import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Alumnis from './components/alumnis/Alumnis';
import AlumniDetails from './components/alumnis/AlumniDetails';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => 'Home'} />
            <Route exact path="/alumnis" component={Alumnis} />
            <Route exact path="/alumnis/:id" component={AlumniDetails} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
