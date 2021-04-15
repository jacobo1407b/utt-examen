import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Exam1 from "./views/Exam1";
import Home from "./views/Home";
import Logico from "./views/Logico";
import Matematico from "./views/Matematico";
import Lengua from "./views/Lengua";

const routes = ({ dataAlumno, setCerrar, user, setreloadApp, setExamen }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/exam1/:num">
          <Exam1
            dataAlumno={dataAlumno}
            setCerrar={setCerrar}
            user={user}
            setreloadApp={setreloadApp}
            setExamen={setExamen}
          />
        </Route>
        <Route exact path="/">
          <Home dataAlumno={dataAlumno} setExamen={setExamen} />
        </Route>
        <Route exact path="/lengua/:num">
          <Lengua
            setExamen={setExamen}
            dataAlumno={dataAlumno}
            setCerrar={setCerrar}
            user={user}
            setreloadApp={setreloadApp}
          />
        </Route>
        <Route exact path="/logico/:num">
          <Logico
            setExamen={setExamen}
            dataAlumno={dataAlumno}
            setCerrar={setCerrar}
            user={user}
            setreloadApp={setreloadApp}
          />
        </Route>
        <Route exact path="/matematico/:num">
          <Matematico
            setExamen={setExamen}
            dataAlumno={dataAlumno}
            setCerrar={setCerrar}
            user={user}
            setreloadApp={setreloadApp}
          />
        </Route>
        <Route path="*" redirect="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
