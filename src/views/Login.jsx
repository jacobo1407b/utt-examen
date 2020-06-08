import React, { useState } from 'react'
import firebase from '../utils/firebase';
import 'firebase/auth';
import 'materialize-css/dist/css/materialize.css'
import M from 'materialize-css'

import { addStorage } from '../utils/DataBase';

const Login = () => {
    const [formDta, setFormDta] = useState({ password: "", email: "" });
    const [us, setus] = useState({ user: null })
    const [isloadin, setIsloadin] = useState(false);
    const handlerChange = e => {
        const { value, name } = e.target;
        setFormDta({
            ...formDta,
            [name]: value
        });
    }

    const handlerSubmit = (e) => {
        setIsloadin(true);
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
                setIsloadin(false);
                handleErrors(err.code);
            })
        e.preventDefault();
    }
    const Load =
        (<div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div>
        </div>)
    return (

        <div className="container center " border-radius="55px">
            <form className="container" onChange={handlerChange} onSubmit={handlerSubmit} us={us}>
                <img className="responsive-img center" src="utt.png" alt="utt-img" width="380px" />
                <br />
                <br />
                <br />
                <div className="container">
                        <div className="card-panel hoverable grey lighten-5" height="120" width="150">
                            <div class="input-field">
                                <i className="material-icons prefix orange-text">email</i>
                                <input className="container validate" type="email"  placeholder="Email"name="email" required />

                            </div>
                        </div>
                        <div className="card-panel hoverable grey lighten-5">
                            <div class="input-field col s6">
                                <i className="material-icons prefix orange-text">enhanced_encryption</i>
                            <input className="container validate" type="text" placeholder="Contraseña" name="password" required />
                            </div>
                        </div>
                    {!isloadin ? (
                        <button className="waves-effect waves-light btn center deep-orange hoverable" type="submit">Login</button>
                    ) : (
                            Load
                        )}

                </div>
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
