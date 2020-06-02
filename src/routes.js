import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Exam1 from './views/Exam1';
import Home from './views/Home';
import Exam2 from './views/Exam2';
import Exam3 from './views/Exam3';
const routes = ({ dataAlumno, setCerrar }) => {
    return (
        <Switch>
            <Route path="/exam1">
                <Exam1 dataAlumno={dataAlumno} setCerrar={setCerrar} />
            </Route>
            <Route path="/exam2">
                <Exam2 dataAlumno={dataAlumno} setCerrar={setCerrar} />
            </Route>
            <Route path="/exam3">
                <Exam3 dataAlumno={dataAlumno} setCerrar={setCerrar} />
            </Route>
            <Route path="/">
                <Home dataAlumno={dataAlumno} />
            </Route>
            <Route path="*" redirect="/" />
        </Switch>
    )
}

export default routes
