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
            <nav>
                <div className="nav-wrapper green">
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>{cerrar ? (
                            <a href="#!" className="btn-floating btn-large halfway-fab waves-effect waves-light red" onClick={logout} title="cerrar sesión">
                                <i className="material-icons">exit_to_app</i>
                            </a>
                        ) : <Exit exitExam={null} />}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default withRouter(Menu)

/**
 *
 * {cerrar ? (<li><a onClick={logout}>Cerrar</a></li>) : null}
 */
