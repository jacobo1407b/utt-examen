import React, { Component } from 'react'
import M from 'materialize-css';
import Swal from 'sweetalert2';
import { updateActiveExamen } from '../../utils/DataBase';
import { withRouter } from 'react-router-dom'


class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            terminar: props.exitExam
        }
    }
    componentDidMount() {
        const options = {
            onOpenStart: () => {
                console.log("Open Start");
            },
            onOpenEnd: () => {
                console.log("Open End");
            },
            onCloseStart: () => {
                console.log("Close Start");
            },
            onCloseEnd: () => {
                console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);
    }

    preguntar() {
        if (localStorage.getItem('time') > 0) {
            Swal.fire({
                title: '¿Estas seguro?',
                text: "Tienes tiempo para revisar tu examen",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
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

    }
    render() {
        return (
            <div>
                <button
                    className="waves-effect waves-light btn modal-trigger"
                    data-target="modal1"
                >
                    Terminar Examen
                 </button>

                <div
                    ref={Modal => {
                        this.Modal = Modal;
                    }}
                    id="modal1"
                    className="modal"
                >
                    <div className="modal-content">
                        <h4>¿Finalizar examen?</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <button className="modal-close waves-effect waves-red btn-flat" onClick={this.preguntar}>
                            Aceptar
                         </button>
                        <button className="modal-close waves-effect waves-green btn-flat">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}


export default withRouter(Modal);


/***
 *
 *
 *
 */