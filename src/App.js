import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimeSlot from './components/TimeSlot'




class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div class="content is-medium" >
          Single-Page Appointment Schdeuling Front-End
        </div>
          
        <TimeSlot/>  
          
        
      </div>
    );
  }
}

export default App;
