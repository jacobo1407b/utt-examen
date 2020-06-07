import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Exam1 from './views/Exam1';
import Home from './views/Home';
const routes = ({ dataAlumno, setCerrar, user, setreloadApp }) => {
    return (
        <Switch>
            <Route path="/exam1/:num">
                <Exam1 dataAlumno={dataAlumno} setCerrar={setCerrar} user={user} setreloadApp={setreloadApp} />
            </Route>
            <Route path="/">
                <Home dataAlumno={dataAlumno} />
            </Route>
            <Route path="*" redirect="/" />
        </Switch>
    )
}

export default routes
