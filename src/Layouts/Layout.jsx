import React, { useEffect, useState } from "react";
import Routes from "../routes";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "../Components/Menu/Menu";
import { isAlumn } from "../utils/DataBase";
import { useSnackbar } from "notistack";

const Layout = ({ user, setreloadApp }) => {
  const [dataAlumno, setdataAlumno] = useState({ activeExam1: true });
  const [cerrar, setCerrar] = useState(true);
  const [examen, setExamen] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    function getAl() {
      isAlumn(user.uid)
        .then((reqs) => {
          setdataAlumno(reqs);
        })
        .catch((err) => {
          enqueueSnackbar("Error en la conexión", {
            variant: "error",
          });
        });
    }
    getAl();
  }, [user, enqueueSnackbar]);
  return (
    <Router>
      <Menu cerrar={cerrar} examen={examen} />
      <Routes
        setExamen={setExamen}
        dataAlumno={dataAlumno}
        setCerrar={setCerrar}
        user={user}
        setreloadApp={setreloadApp}
      />
    </Router>
  );
};

export default Layout;
