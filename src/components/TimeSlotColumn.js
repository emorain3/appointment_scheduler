import React, { Component } from 'react';
import styled from 'styled-components';
import TimeSlot from './TimeSlot'



let ColumnShape = styled.div`
    padding-top: 2vw;
    width: 20vw;
`



class TimeSlotColumn extends Component {

    state = {
        time_range_list: ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
    }
    render() {
        return (
            <ColumnShape>
                {this.state.time_range_list.map( time => {
                    return <TimeSlot time = {time} />
                })}
            </ColumnShape>
        );
    }
}

export default TimeSlotColumn;