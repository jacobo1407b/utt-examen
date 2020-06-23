import React, { useEffect } from 'react'
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
            <img className="responsive-img center" src="utt.png" alt="utt-img" width="250px" />
            {
                dataAlumno.activeExam1 ?
                    (
                        <TextIng />
                    ) :
                    (
                        <TextNoActive />
                    )
            }
            <div className="container">
                <br></br>
                <button className="waves-effect waves-light btn-large deep-orange darken-2 container" onClick={handlerExam1}>REALIZAR PRUEBA</button>
                <br></br>
            </div>
        </div>
    )
}


const TextIng = () => {
    return (
        <p>
            <h3>Bienvenido, Nombre de usuario</h3>
            <h4>Instrucciones Generales</h4>
                <p className="flow-text">
                    <blockquote> 
                        La evaluación que estas a punto de responder consta de 90 preguntas que se deben de responder en un tiempo de 2 horas el examen  corresponde a las siguientes áreas: 
                    </blockquote>
                    <div className="card-panel">
                        
                        <span className="blue-text text-darken-2">
                            <p>
                                Lógico / matemática
                            </p>
                        </span>
                        <span className="blue-text text-darken-2">
                            <p>
                                Comprensión lectora
                            </p>
                        </span> 
                    </div>
                    <blockquote>
                        Todas las preguntas son de opción Múltiple: Al seleccionar la Respuesta, Usted tendrá que dar click en el botón Guardar respuesta como se muestra en la siguiente Imagen.
                    </blockquote>

                    
                    <div className="card-panel">
                    En caso de que te encuentres en estas situaciones.

                        <span className="red-text text-darken-2">
                            <p>
                                La conexión a internet es mala.
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
                                Se vaya la luz.
                            </p>
                        </span> 
                        <span className="red-text text-darken-2">
                            <p>
                                Se apague tu dispositivo.
                            </p>
                        </span> 
                    </div>
                    <blockquote>
                        El sistema guardara las respuestas y el tiempo también, así que mantén la calma en caso de cualquier duda sobre alguna situación puedes comunicarte al Grupo de <a href="https://t.me/utt_seani_2020" target="_blank">telegram.</a>
                        
                    </blockquote>
                </p>
        </p>
    )
}

const TextNoActive = () => {
    return (
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio soluta reiciendis dicta cum tempore repellendus modi cumque veritatis nemo ex molestias veniam quisquam impedit at, nihil vitae perspiciatis aliquid numquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque soluta et repudiandae ad. Ducimus, id. Saepe deserunt sequi, ducimus deleniti fuga neque vero fugit. Assumenda natus laboriosam quis ducimus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid quisquam illum, aspernatur nihil ut similique voluptatem eligendi aperiam optio. Unde eum officiis repudiandae perspiciatis ut nulla perferendis ad aspernatur.
        </p>
    )
}
export default withRouter(Home)
