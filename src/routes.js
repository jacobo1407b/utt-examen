import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Exam1 from './views/Exam1';
import Home from './views/Home';
const routes = ({ dataAlumno, setCerrar, user, setreloadApp }) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/exam1/:num">
                    <Exam1 dataAlumno={dataAlumno} setCerrar={setCerrar} user={user} setreloadApp={setreloadApp} />
                </Route>
                <Route path="/">
                    <Home dataAlumno={dataAlumno} />
                </Route>
                <Route path="*" redirect="/" />

            </Switch>
        </BrowserRouter>
    )
}

export default routes
