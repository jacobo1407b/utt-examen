import React, { useState } from 'react'
import firebase from '../utils/firebase';
import 'firebase/auth';
import 'materialize-css/dist/css/materialize.min.css'
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
        
        <div class ="section container center " border-radius="55px">
            <form class="" onChange={handlerChange} onSubmit={handlerSubmit} us={us}>
                <img class="responsive-img center" src="utt.png" width="380px"></img>
                <br/>
                <br/>
                <br/>
                <div class="card" border-radius="15px">
                    <div class="card-panel" height="120" width="150">
                        <input class="container validate" type="email" placeholder="email" name="email" required />
                    </div>
                
                    <div class="card-panel">
                        <input class="container validate" type="text" placeholder="Contraseña" name="password" required />
                    </div>
                
                    <button class="btn waves-effect waves-light center deep-orange darken-3 container" type="submit">Login</button>
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
