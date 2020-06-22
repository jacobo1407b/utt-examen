import React, { useState, useEffect } from 'react'
import { updateResExam } from '../../utils/DataBase';
import Radio from '@material-ui/core/Radio';
import MosZom from 'materialize-css/dist/js/materialize.min.js';


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
    const zoomHandler = () => {
        var elems = document.querySelectorAll('.materialboxed');
        MosZom.Materialbox.init(elems[0])
    }

    const handlerSubmit = e => {
        e.preventDefault();

        if (!tempResp.pregunta || !tempResp.pregunta) {
            alert('Ingresa un valor')
            return false;
        } else {
            dataAlumno[conver] = tempResp;
            updateResExam(localStorage.getItem('document'), dataAlumno);
            setTempResp({})
        }

    }
    return (
        <div className="container">
            {dtajs.pregunta_txt ? (
                <h4>{dtajs.pregunta_txt}</h4>
            ) : null}
            {dtajs.pregunta_url ? (
                <img className="responsive-img materialboxed" src={dtajs.pregunta_url} alt="pregunta" width="850px" onClick={zoomHandler} />
            ) : null}
            <form onSubmit={handlerSubmit}>
                <label>
                    <Radio
                        checked={selectValue === "A"}
                        onChange={handlerElegirRespuesta}
                        value="A"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <span>{dtajs.respuesta1}</span>
                </label>
                <label>
                    <Radio
                        checked={selectValue === "B"}
                        onChange={handlerElegirRespuesta}
                        value="B"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <span>{dtajs.respuesta2}</span>
                </label>
                <label>
                    <Radio
                        checked={selectValue === "C"}
                        onChange={handlerElegirRespuesta}
                        value="C"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <span>{dtajs.respuesta3}</span>
                </label>
                <label>
                    <Radio
                        checked={selectValue === "D"}
                        onChange={handlerElegirRespuesta}
                        value="D"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <span>{dtajs.respuesta4}</span>
                </label>
                <br></br>
                <button className="waves-effect waves-light btn-small #e64a19 deep-orange darken-2" type="submit">Guardar Respuesta</button>
            </form>
        </div>
    )
}

export default Pregunta1
