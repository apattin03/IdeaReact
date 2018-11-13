import React, { Component } from 'react';
import './App.css';
import IdeasContainer from './components/IdeasContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (

      <div className="App">
      <div className="App-header container">
      <h1>Idea Notes!</h1>
      </div>
      <IdeasContainer/>
      </div>
   
    );
  }
}

export default App;
