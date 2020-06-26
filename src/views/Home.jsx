import React, { useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { toast } from 'materialize-css';
const Home = ({ dataAlumno, history }) => {

    const handlerExam1 = () => {
        if (!dataAlumno.activeExam1) {
            toast({ html: 'Este examen esta desactivado' })
            return false
        }
        //document.documentElement.requestFullscreen()
        history.push('/exam1/1')
    }

    useEffect(() => {
        
        navigator.getUserMedia = (navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);
        navigator.getUserMedia(
            {
                video: true,
                audio: true
            },
            function (localMediaStream) {
                // var video = document.querySelector(video);
                //video.src = window.URL.createObjectURL(localMediaStream);
                console.log('Chido XD')
            },
            function (err) {
                console.log("Ocurrió el siguiente error: " + err);
            }
        );
    }, [])
    return (
        <div className="container center">
            <br></br>
            {
                dataAlumno.activeExam1 ?
                    ( <Fragment>
                        <img className="responsive-img center" src="utt.png" alt="utt-img" width="250px" />

                        <TextIng dataAlumno = {dataAlumno}/>
                        <div className="container">
                        <br></br><br></br><br></br><br></br>
                        <button className="waves-effect waves-light btn-large deep-orange darken-2 container" onClick={handlerExam1}>REALIZAR PRUEBA</button>
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                    </div>
                    </Fragment>
                    ) :
                    (
                        <TextNoActive dataAlumno = {dataAlumno}/>
                    )
            }
 
        </div>
    )
}


const TextIng = (props) => {
    const {dataAlumno}=props
    return (
        <p>
            <h3>BIENVENIDO {"(A)"}, {dataAlumno.username}</h3>
            <h4>Instrucciones Generales</h4>
                <p className="flow-text">
                    <blockquote> 
                    La evaluación, que estas a punto de iniciar, consta de 90 preguntas que deberás responder en un tiempo máximo de 2 horas, mismas que corresponden a las siguientes áreas: 
                    </blockquote>
                    <div className="card-panel">
                        
                        <span className="blue-text text-darken-2">
                            <p>
                                Lógico / Matemáticas
                            </p>
                        </span>
                        <span className="blue-text text-darken-2">
                            <p>
                                Comprensión lectora
                            </p>
                        </span> 
                    </div>
                    <blockquote>
                    Por favor, habilita los permisos necesarios en tu navegador como se muestra a continuación:
                    <div className="card-panel">
                        <video className="responsive-video" controls={false} autoPlay loop preload="auto">
                            <source src="/camara-micro.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    </blockquote>
                    
                    <blockquote>
                    Todas las preguntas son de opción múltiple, no olvides que, al seleccionar la respuesta, tendrás que dar clic en el botón "Guardar respuesta", como se muestra a continuación.
                        <div className="card-panel">
                            <video className="responsive-video" controls={false} autoPlay loop preload="auto">
                            <source src="/qwerty.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    </blockquote>
                   
                    <div className="card-panel">
                    En caso de que te encuentres en estas situaciones:

                        <span className="red-text text-darken-2">
                            <p>
                                Conexión a internet muy inestable.
                            </p>
                        </span>
                        <span className="red-text text-darken-2">
                            <p>
                                Cerrar la pestaña por error.
                            </p>
                        </span> 
                        <span className="red-text text-darken-2">
                            <p>
                                Se termine la batería a tu celular.
                            </p>
                        </span> 
                        <span className="red-text text-darken-2">
                            <p>
                                Se interrumpa la energía eléctrica.
                            </p>
                        </span> 
                        <span className="red-text text-darken-2">
                            <p>
                                Se apague tu dispositivo.
                            </p>
                        </span> 
                    </div>
                    <blockquote>
                    El sistema guardará las respuestas y el tiempo también, así que mantén la calma, en caso de cualquier duda sobre alguna situación puedes comunicarte al Grupo de <a href="https://t.me/utt_seani_2020" target="_blank">Telegram.</a>
                        
                    </blockquote>
                </p>
        </p>
    )
}

const TextNoActive = (props) => {
    const {dataAlumno}=props

    return (
        <p>
            <h1>​ ¡Felicidades!</h1>
            <h4>{dataAlumno.username}</h4>
            <img src="/guerrero.png" alt="lucas alias la botarga"/>
            <br></br><br></br><br></br><br></br><br></br>
            <blockquote>
            <div className="card-panel">
                <span className="flow-text">Haz concluido tu examen de admisión. 
                    Espera resultados en la pagina oficial de la Universidad Tecnológica de Tlaxcala.
                </span>
            </div>
            </blockquote>
            

            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </p>
    )
}
export default withRouter(Home)
