import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { updateLengua } from "../../utils/DataBase";
import Radio from "@material-ui/core/Radio";

const Lengua = ({ dtajs, dataAlumno, posision, todos }) => {
  let conver = parseInt(posision);
  let valorActive = dataAlumno[conver] ? dataAlumno[conver] : "";
  const [tempResp, setTempResp] = useState({});
  const [selectValue, setSelectValue] = useState(valorActive.respuesta);
  useEffect(() => {
    setSelectValue(valorActive.respuesta);
  }, [valorActive.respuesta]);

  const handlerElegirRespuesta = (e) => {
    setTempResp({
      pregunta: dtajs._id,
      respuesta: e.target.value,
    });
    setSelectValue(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!tempResp.pregunta || !tempResp.pregunta) {
      return false;
    } else {
      dataAlumno[conver] = tempResp;
      updateLengua(localStorage.getItem("document"), dataAlumno);
      setTempResp({});
    }
  };

  return (
    <div className="container">
      {dtajs.pregunta_txt ? <h1>{dtajs.pregunta_txt}</h1> : null}
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
  );
};

export default Lengua;
