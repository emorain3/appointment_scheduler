import React, { Component } from 'react';
import ModalAppointment from './ModalAppointment';
import styled from 'styled-components';


let ClickableTile = styled.div`
    cursor: pointer;
`



class TimeSlot extends Component {

    state = {
        modal_visibility: "modal"
    }


    make_modal_invisible = () => {
        this.setState({modal_visibility: "modal"})
    }
    
    make_modal_visible = () => {
        this.setState({modal_visibility: "modal is-active"})
    }


    render() {
        return (
            <div>

                <ClickableTile>
                    <div onClick={this.make_modal_visible} class="tile is-child box">
                        <p class="title"> 9am {this.props.time} </p>
                    </div>
                </ClickableTile>
                
                <ModalAppointment
                    modal_visibility={this.state.modal_visibility}
                    make_modal_invisible={this.make_modal_invisible}
                    make_modal_visible={this.make_modal_visible}
                />
            </div>
        );
    }
}





export default TimeSlot;