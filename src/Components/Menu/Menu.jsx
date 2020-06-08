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

            <nav>
                <div class="nav-wrapper green darken-3">
                    <a href="#!" class="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                </div>
            </nav>
            <ul class="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>

            {cerrar ? (<button onClick={logout}>Cerrar sesion</button>) : (null)}
        </div>
    )
}

export default withRouter(Menu)
