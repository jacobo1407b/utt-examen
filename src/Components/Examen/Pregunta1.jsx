import React, { useState } from 'react'

const Pregunta1 = ({ dtajs, dataAlumno }) => {

    const [respuestasAlumno, setRespuestasAlumno] = useState(dataAlumno || [])
    const handlerElegirRespuesta = (e) => {
        setRespuestasAlumno([
            ...respuestasAlumno,
            {
                pregunta: dtajs._id,
                respuesta: e.target.value
            }
        ])
        console.log(e.target.value)
    }
    const handlerSubmit = e => {
        console.log(respuestasAlumno)
        e.preventDefault();
    }
    return (
        <div>
            {dtajs.pregunta_txt ? (
                <h1>{dtajs.pregunta_txt}</h1>
            ) : null}
            {dtajs.pregunta_url ? (
                <img src={dtajs.pregunta_url} alt="pregunta" />
            ) : null}
            <form onChange={handlerElegirRespuesta} onSubmit={handlerSubmit}>
                <p>
                    <label>
                        <input name="group1" type="radio" value={dtajs.respuesta1} />
                        <span>{dtajs.respuesta1}</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" type="radio" value={dtajs.respuesta2} />
                        <span>{dtajs.respuesta2}</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input className="with-gap" name="group1" type="radio" value={dtajs.respuesta3} />
                        <span>{dtajs.respuesta3}</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" type="radio" value={dtajs.respuesta4} />
                        <span>{dtajs.respuesta4}</span>
                    </label>
                </p>
                <button type="submit">Guardar</button>
            </form>

        </div>
    )
}

export default Pregunta1
