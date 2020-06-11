import React from 'react'
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
                <div className="nav-wrapper green darken-3">
                    <a href="#!" className="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        {cerrar ? (<li><a onClick={logout}>Cerrar</a></li>) : null}

                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>
        </div>
    )
}

export default withRouter(Menu)
