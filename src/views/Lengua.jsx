import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import data from "../Assets/exam_EstrucLengua.json";
import Languaje from "../Components/Examen/Lengua";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Lengua = (props) => {
  const { dataAlumno, history, setCerrar, match, setExamen } = props;
  useEffect(() => {
    setExamen("lengua");
    setCerrar(false);
    if (!dataAlumno.activeLengua) {
      history.push("/");
    }
    return () => {
      setCerrar(true);
    };
  }, [history, dataAlumno.activeLengua, setCerrar, setExamen]);

  const classes = useStyles();
  function elegir(numero) {
    if (numero <= 0) {
      history.goBack();
    }
    if (numero > 90) {
      history.goBack();
    }
    return (
      <Languaje
        dtajs={data[parseInt(numero)]}
        dataAlumno={dataAlumno.lengua ? dataAlumno.lengua : []}
        todos={dataAlumno}
        posision={numero}
      />
    );
  }

  const handleChange = (event, value) => {
    history.push(`/lengua/${value}`);
  };

  return (
    <Container>
      {elegir(match.params.num)}
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

export default withRouter(Lengua);
