import React, { useEffect } from 'react'
import firebase from '../../utils/firebase';
import 'firebase/auth';
import { withRouter } from 'react-router-dom';
const Menu = (props) => {
    const { cerrar } = props
    useEffect(() => {
        return () => {
            props.history.push('/')
        }
    }, [props.history])
    const logout = () => {
        firebase.auth().signOut();
    }
    return (
        <div>
            Menu
            {cerrar ? (<button onClick={logout}>Cerrar sesion</button>) : (null)}
        </div>
    )
}

export default withRouter(Menu)
