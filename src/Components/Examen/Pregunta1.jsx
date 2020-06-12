import React, { useState } from 'react'
import { updateResExam } from '../../utils/DataBase';
const Pregunta1 = ({ dtajs, dataAlumno, posision }) => {

    const [tempResp, setTempResp] = useState({});
    const handlerElegirRespuesta = (e) => {
        setTempResp({
            pregunta: dtajs._id,
            respuesta: e.target.value
        })
    }
    const handlerSubmit = e => {
        e.preventDefault();
        let conver = parseInt(posision);
        if (!tempResp.pregunta || !tempResp.pregunta) {
            alert('Selecciona una opcion');
            return false;
        } else {
            dataAlumno[conver] = tempResp;
            updateResExam(localStorage.getItem('document'), dataAlumno);
            setTempResp({})
        }

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
