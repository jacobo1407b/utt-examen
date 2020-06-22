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
                <div className="nav-wrapper  green darken-3">
                        <a href="#!" className="brand-logo">SEANI</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li>{cerrar ? (
                                <a href="#!" className="btn-floating btn-large halfway-fab waves-effect waves-light red" onClick={logout} title="cerrar sesión">
                                    <i className="material-icons">exit_to_app</i>
                                </a>
                                ) : <Exit exitExam={null} />}
                            </li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li>{cerrar ? (
                                <a href="#!" className="btn-floating btn-large halfway-fab waves-effect waves-light red" onClick={logout} title="cerrar sesión">
                                    <i className="material-icons">exit_to_app</i>
                                </a>
                                ) : <Exit exitExam={null} />}
                            </li>
                </ul>
        </div>
    )
}


export default withRouter(Menu)

/**
 *
 * {cerrar ? (<li><a onClick={logout}>Cerrar</a></li>) : null}
 */
