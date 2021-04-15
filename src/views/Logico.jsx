import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import data from "../Assets/exam_PensaLogic.json";
import Pagination from "@material-ui/lab/Pagination";
import Logic from "../Components/Examen/Logic";
import { withRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Logico = ({
  dataAlumno,
  history,
  setCerrar,
  match,
  user,
  setreloadApp,
  setExamen,
}) => {
  useEffect(() => {
    setCerrar(false);
    setExamen("logico");
    if (!dataAlumno.activeLogic) {
      history.push("/");
    }
    return () => {
      setCerrar(true);
    };
  }, [history, dataAlumno.activeLogic, setCerrar, setExamen]);
  console.log(dataAlumno);
  const classes = useStyles();
  const handleChange = (event, value) => {
    history.push(`/logico/${value}`);
  };
  function elegir(numero) {
    if (numero <= 0) {
      history.goBack();
    }
    if (numero > 90) {
      history.goBack();
    }
    return (
      <Logic
        dtajs={data[parseInt(numero)]}
        dataAlumno={dataAlumno.logico ? dataAlumno.logico : []}
        todos={dataAlumno}
        posision={numero}
      />
    );
  }

  return (
    <Container>
      >{elegir(match.params.num)}
      <div className={classes.root}>
        <Pagination
          className=" transparent center-align"
          count={data.length - 1}
          defaultPage={1}
          page={parseInt(match.params.num)}
          color="primary"
          onChange={handleChange}
        />
      </div>
    </Container>
  );
};

export default withRouter(Logico);
