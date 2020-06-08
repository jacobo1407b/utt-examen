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
            {cerrar ? (<button onClick={logout}>Cerrar sesion</button>) : (null)}
        </div>
    )
}

export default withRouter(Menu)
