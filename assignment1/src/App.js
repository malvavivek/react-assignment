import React, { Component } from 'react';
import Userinput from './components/Userinput';
import Useroutput from './components/Useroutput';
import './App.css';

class App extends Component {

  state = {
    user:[
      {
        name:"Vivek"
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Useroutput name="REACT"/>
        <Userinput />
      </div>
    );
  }
}

export default App;
