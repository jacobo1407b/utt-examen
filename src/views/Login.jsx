import React, { useState,useEffect} from 'react'
import '../Assets/login.css';
import firebase from '../utils/firebase';
import 'firebase/auth';
import { addStorage } from '../utils/DataBase';
import M from 'materialize-css';

const Login = () => {

    useEffect(()=>{
        document.body.style.background="radial-gradient(rgb(255, 255, 255),rgb(87, 87, 87))";
        return ()=>{
            document.body.style.background="#ffffff";
        }
    },[])
    const [formDta, setFormDta] = useState({ password: "", email: "" });
    const [us, setus] = useState({ user: null })
    const [isloadin, setIsloadin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
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
                setIsloadin(false);
            })
            .catch(err => {
                setIsloadin(false);
                handleErrors(err.code);
            })
        e.preventDefault();
    }
    const Load =
        (<div className="preloader-wrapper small active sumitas">
            <div className="spinner-layer spinner-green-only">
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
                <br></br>
                <img className="responsive-img center" src="utt.png" alt="utt-img" width="380px" />
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="card-panel hoverable grey lighten-5 col s12" height="120" width="150">
                        <div className="input-field ">
                            <i className="material-icons prefix green-text">account_circle</i>
                            <input className="container validate" type="email" placeholder="Email" name="email" required />

                        </div>
                    </div>
                    <div className="card-panel hoverable grey lighten-5 col s12">
                        <div className="input-field ">
                            <i className="material-icons prefix green-text" onClick={() => setShowPassword(prev => !prev)}>enhanced_encryption</i>
                            <input className="container validate" type={showPassword ? "text" : "password"} placeholder="Contraseña" name="password" required />
                        </div>
                    </div>
                    {!isloadin ? (
                        <button className="btn-large center deep-orange hoverable" type="submit"
                        style={{	backgroundSize: '200%'
                        }}
                        >Login</button>
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
            M.toast({ html: 'El usuario o contraseña son incorrectos' })
            break;
        case "auth/too-many-requests":
            M.toast({ html: 'Has enviado demasiadas solicitudes de envio' })
            break;
        case "auth/user-not-found":
            M.toast({ html: 'usuario no encontrado' })
            break;
        default:
            break;
    }
};
export default Login
/*75
78
52
88*/