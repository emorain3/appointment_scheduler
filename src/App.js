import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimeSlotColumn from './components/TimeSlotColumn'
import styled from 'styled-components';


let PageContainer = styled.div`
    padding-top: 2vw;
    background-color: #f5f5f5;
    height: 100vh;
`

let ScheduleContainer = styled.div`
    display: flex;
    justify-content: center;
`

class App extends Component {
  render() {
    return (
      <PageContainer className="App">
        
        <h1 class="subtitle is-2">
          Single-Page Appointment Schdeuling Front-End
        </h1>
          
        <ScheduleContainer>
          <TimeSlotColumn/>  
        </ScheduleContainer>
          
        
      </PageContainer>
    );
  }
}

export default App;
