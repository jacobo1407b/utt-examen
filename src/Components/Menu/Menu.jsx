import React from 'react'
import firebase from '../../utils/firebase';
import 'firebase/auth';
import { withRouter } from 'react-router-dom';
import Exit from '../Modal/ModalBasic';
const Menu = (props) => {
    const { cerrar } = props

    const logout = () => {
        firebase.auth().signOut();
        props.history.push('/')
    }
    return (
        <div>
            <ul id="ListaPreguntas" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
            <nav>

                <div className="nav-wrapper green darken-3">
                    <a href="#!" className="dropdown-trigger brand-logo" data-target="ListaPreguntas">Preguntas<i className="material-icons right">arrow_drop_down</i></a>


                    {cerrar ? (
                        <a href="#!" className="btn-floating btn-large halfway-fab waves-effect waves-light red" onClick={logout} title="cerrar sesión">
                            <i className="material-icons">exit_to_app</i>
                        </a>
                    ) : <Exit exitExam={null} />}

                </div>
            </nav>
            <div>

            </div>
        </div>
    )
}


export default withRouter(Menu)

/**
 *
 * {cerrar ? (<li><a onClick={logout}>Cerrar</a></li>) : null}
 */
