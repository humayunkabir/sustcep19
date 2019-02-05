import React, { Component } from 'react';
import './App.css';
import Members from './components/members/Members';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Members/>
      </div>
    );
  }
}

export default App;
