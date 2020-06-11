import React, { useEffect } from 'react'
import firebase from '../../utils/firebase';
import 'firebase/auth';
import { withRouter } from 'react-router-dom';
const Menu = (props) => {
    const { cerrar } = props

    const logout = () => {
        if (localStorage.getItem('time') > 1) {
            alert('El examen sigue vigente')
        }
        firebase.auth().signOut();
        props.history.push('/')
    }
    return (
        <div>
            <ul id="ListPreguntas" class="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider"></li>
                <li><a href="#!">three</a></li>
                </ul>
            <nav>
                
                <div class="nav-wrapper green darken-3">
                    <a class="dropdown-trigger brand-logo" href="#!" data-target="ListPreguntas">Preguntas<i class="material-icons right">arrow_drop_down</i></a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <a class="btn-floating btn-large halfway-fab waves-effect waves-light red" onClick={logout}  title="cerrar sesión">
                    <i class="material-icons">exit_to_app</i>
                    </a>
                </div>
            </nav>
            <div>
                
            </div>

        </div>
    )
}

export default withRouter(Menu)
