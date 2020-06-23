import React, { useState, useEffect } from 'react'
import { updateResExam } from '../../utils/DataBase';
import Radio from '@material-ui/core/Radio';
//import MosZom from 'materialize-css/dist/js/materialize.min.js';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Swal from 'sweetalert2';



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
        });
        setSelectValue(e.target.value);
    }
    /*const zoomHandler = () => {
        var elems = document.querySelectorAll('.materialboxed');
        MosZom.Materialbox.init(elems[0])
    }*/

    const handlerSubmit = e => {
        e.preventDefault();

        if (!tempResp.pregunta || !tempResp.pregunta) {
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
                <img
                    className="responsive-img materialboxed"
                    src={dtajs.pregunta_url}
                    alt="pregunta"
                    width="900px"
                    height="550px"
                // onClick={zoomHandler}
                />
            ) : null}
            <form onSubmit={handlerSubmit}>
                <FormControl component="fieldset">
                    <RadioGroup
                        //defaultValue={selectValue}
                        aria-label="gender"
                        name="customized-radios"
                    >
                        <FormControlLabel
                            value="A"
                            control={<Radio />}
                            label={dtajs.respuesta1}
                            onChange={handlerElegirRespuesta}
                            checked={selectValue === "A"}
                        />
                        <FormControlLabel
                            value="B"
                            control={<Radio />}
                            label={dtajs.respuesta2}
                            onChange={handlerElegirRespuesta}
                            checked={selectValue === "B"}
                        />
                        <FormControlLabel
                            value="C"
                            control={<Radio />}
                            label={dtajs.respuesta3}
                            onChange={handlerElegirRespuesta}
                            checked={selectValue === "C"}
                        />
                        <FormControlLabel
                            value="D"
                            control={<Radio />}
                            label={dtajs.respuesta4}
                            onChange={handlerElegirRespuesta}
                            checked={selectValue === "D"}
                        />
                    </RadioGroup>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<SaveIcon />}
                    >
                        Guardar Respuesta
                </Button>
                </FormControl>
            </form>
        </div>
    )
}

export default Pregunta1
/**
 *
 *
 * <Radio
                        checked={selectValue === "A"}
                        onChange={handlerElegirRespuesta}
                        value="A"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <h3>{dtajs.respuesta1}</h3>

                    <Radio
                        checked={selectValue === "B"}
                        onChange={handlerElegirRespuesta}
                        value="B"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <span>{dtajs.respuesta2}</span>
                    <Radio
                        checked={selectValue === "C"}
                        onChange={handlerElegirRespuesta}
                        value="C"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <span>{dtajs.respuesta3}</span>

                    <Radio
                        checked={selectValue === "D"}
                        onChange={handlerElegirRespuesta}
                        value="D"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <span>{dtajs.respuesta4}</span>
 */