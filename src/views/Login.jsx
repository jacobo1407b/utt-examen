import React, { useState } from 'react'
import firebase from '../utils/firebase';
import 'firebase/auth';
import { addStorage } from '../utils/DataBase';
const Login = () => {
    const [formDta, setFormDta] = useState({ password: "", email: "" });
    const [us, setus] = useState({ user: null })
    const handlerChange = e => {
        const { value, name } = e.target;
        setFormDta({
            ...formDta,
            [name]: value
        });
    }

    const handlerSubmit = (e) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(formDta.email, formDta.password)
            .then(res => {
                addStorage(res.user.uid)
                setus({
                    user: res.user,
                });
            })
            .catch(err => {
                console.log(err);
                handleErrors(err.code);
            })
        e.preventDefault();
    }
    return (
        <div>
            Ingreso a examen XD
            <form onChange={handlerChange} onSubmit={handlerSubmit} us={us}>
                <input type="email" placeholder="email" name="email" />
                <input type="text" placeholder="Contraseña" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
const handleErrors = code => {
    switch (code) {
        case "auth/wrong-password":
            alert("El usuario o contraseña son incorrectos")
            break;
        case "auth/too-many-requests":
            alert("Has enviado demasiadas solicitudes de envio")
            break;
        case "auth/user-not-found":
            alert("usuario no encontrado")
            break;
        default:
            break;
    }
};
export default Login
