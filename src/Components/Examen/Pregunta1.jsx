import React, { useState, useEffect } from 'react'
import { updateResExam } from '../../utils/DataBase';

import Radio from '@material-ui/core/Radio';



const Pregunta1 = ({ dtajs, dataAlumno, posision }) => {
    let conver = parseInt(posision);
    let valorActive = dataAlumno[conver] ? dataAlumno[conver] : '';
    const [tempResp, setTempResp] = useState({});
    const [selectValue, setSelectValue] = useState(valorActive.respuesta)
    useEffect(() => {
        setSelectValue(valorActive.respuesta)
    }, [valorActive.respuesta])
    const handlerElegirRespuesta = (e) => {
        setTempResp({
            pregunta: dtajs._id,
            respuesta: e.target.value
        })
        setSelectValue(e.target.value);
    }


    const handlerSubmit = e => {
        e.preventDefault();

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
            <form onSubmit={handlerSubmit}>

                <label>
                    <Radio
                        checked={selectValue === dtajs.respuesta1}
                        onChange={handlerElegirRespuesta}
                        value={dtajs.respuesta1}
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <span>{dtajs.respuesta1}</span>
                </label>
                <label>
                    <Radio
                        checked={selectValue === dtajs.respuesta2}
                        onChange={handlerElegirRespuesta}
                        value={dtajs.respuesta2}
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <span>{dtajs.respuesta2}</span>
                </label>
                <label>
                    <Radio
                        checked={selectValue === dtajs.respuesta3}
                        onChange={handlerElegirRespuesta}
                        value={dtajs.respuesta3}
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <span>{dtajs.respuesta3}</span>
                </label>
                <label>
                    <Radio
                        checked={selectValue === dtajs.respuesta4}
                        onChange={handlerElegirRespuesta}
                        value={dtajs.respuesta4}
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <span>{dtajs.respuesta4}</span>
                </label>
                <button type="submit">Guardar</button>
            </form>

        </div>
    )
}

export default Pregunta1
