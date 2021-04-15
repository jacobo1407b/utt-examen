import React, { useEffect } from "react";
import Mat from "../Components/Examen/Mat";
import Pagination from "@material-ui/lab/Pagination";
import data from "../Assets/examen_PensaMatematico.json";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Matematico = ({ dataAlumno, history, setCerrar, match, setExamen }) => {
  useEffect(() => {
    setCerrar(false);
    setExamen("matematico");
    if (!dataAlumno.activeMat) {
      history.push("/");
    }
    return () => {
      setCerrar(true);
    };
  }, [history, dataAlumno.activeMat, setCerrar, setExamen]);
  const classes = useStyles();

  function elegir(numero) {
    if (numero <= 0) {
      history.goBack();
    }
    if (numero > 90) {
      history.goBack();
    }
    return (
      <Mat
        dtajs={data[parseInt(numero)]}
        dataAlumno={dataAlumno.matematico ? dataAlumno.matematico : []}
        todos={dataAlumno}
        posision={numero}
      />
    );
  }
  const handleChange = (event, value) => {
    history.push(`/matematico/${value}`);
  };

  return (
    <Container>
      <Grid.Row>{elegir(match.params.num)}</Grid.Row>
      <Grid.Row>
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
      </Grid.Row>
    </Container>
  );
};

export default withRouter(Matematico);
