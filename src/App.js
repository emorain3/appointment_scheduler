import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimeSlotColumn from './components/TimeSlotColumn'
import styled from 'styled-components';
import { createStore } from "redux";
import { Provider } from "react-redux";




///////// STYLING

let PageContainer = styled.div`
    padding-top: 2vw;
    background-color: #f5f5f5;
    height: 100vh;
`

let ScheduleContainer = styled.div`
    display: flex;
    justify-content: center;
`



//////// REDUX UTILITIES
let timeWindowReducer = () => {
  return {
    time_range_list: ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
  }
}
const store = createStore(timeWindowReducer);



/////////////////////////////////
/////////// COMPONENT DEFINITION
////////////////////////////////

class App extends Component {
  render() {
    return (
      <PageContainer className="App">
        <Provider store={store}>
          <h1 class="subtitle is-2">
            Single-Page Appointment Schdeuling Front-End
          </h1>
            
          <ScheduleContainer>
            <TimeSlotColumn/>  
          </ScheduleContainer>
        </Provider>
          
        
      </PageContainer>
    );
  }
}

export default App;
