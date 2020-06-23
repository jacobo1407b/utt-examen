import React, { Component } from 'react'
import Swal from 'sweetalert2';
import { updateActiveExamen } from '../../utils/DataBase';
import { withRouter } from 'react-router-dom'


class NoResponsive extends Component {
    constructor(props) {
        super(props)
        this.state = {
            terminar: props.exitExam
        }
    }


    primer() {
        if (localStorage.getItem('time') > 0) {
            Swal.fire({
                title: '¿Terminar examen?',
                text: "No podras revertir esto",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si'
            }).then((result) => {
                if (result.value) {
                    Swal.fire({
                        title: '¿Estas seguro?',
                        text: "Tienes tiempo para revisar tu examen",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si estoy totalmente seguro!'
                    }).then((result) => {
                        if (result.value) {
                            // localStorage.setItem('time', 0)
                            updateActiveExamen(localStorage.getItem('document'), rec)
                            function rec() {
                                window.location.reload();
                                window.location = '/'
                            }
                        }
                    })
                }
            })
        }
    }
    render() {
        return (
            <div >
                <a href="#!" onClick={this.primer}>Terminar Examen</a>
            </div>
        );
    }
}

export default withRouter(NoResponsive);
/***
 *
 *
 */