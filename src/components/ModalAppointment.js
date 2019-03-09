import React, { Component } from 'react';
import styled from 'styled-components';


let Padding = styled.div`
    padding-bottom: 2vw;
`




class ModalAppointment extends Component {


    render() {
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
                                    <input class="input" type="text" placeholder="e.g Alex Smith"/>
                                </div>
                            </div>

                            <Padding> </Padding>

                            <div class="field">
                                <label class="label"> Phone Number </label>
                                <div class="control">
                                    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
                                </div>
                            </div>
                        </section>

                        <footer class="modal-card-foot">
                        <button class="button is-success">Save changes</button>
                        <button class="button">Cancel</button>
                        </footer>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ModalAppointment;