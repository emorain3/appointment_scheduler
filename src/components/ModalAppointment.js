import React, { Component } from 'react';
import styled from 'styled-components';


let Padding = styled.div`
    padding-bottom: 2vw;
`




class ModalAppointment extends Component {

    state = {
        name: '',
        number: '',
      }

    storeValue = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    render() {
        const {name, number} = this.state;
        return (
            <div>
                <div class= {this.props.modal_visibility}>
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                        <p class="modal-card-title">Make Appointment </p>
                        <button onClick={this.props.make_modal_invisible} class="delete" aria-label="close"></button>
                        </header>

                        <section class="modal-card-body">
                            <div class="field">
                                <label class="label"> Name </label>
                                <div class="control">
                                    <input onChange={this.storeValue} class="input" type="text" name="name" value={name} placeholder="e.g Alex Smith"/>
                                </div>
                            </div>

                            <Padding> </Padding>

                            <div class="field">
                                <label class="label"> Phone Number </label>
                                <div class="control">
                                    <input onChange={this.storeValue} class="input" type="tel" name="number" value={number} placeholder="e.g. 999-999-999"/>
                                </div>
                            </div>
                        </section>

                        <footer class="modal-card-foot">
                        <button onClick={this.props.on_tile_select} class="button is-success">Save changes</button>
                        <button onClick={this.props.make_modal_invisible} class="button">Cancel</button>
                        </footer>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ModalAppointment;