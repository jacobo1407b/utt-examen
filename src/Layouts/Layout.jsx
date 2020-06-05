import React, { useEffect, useState } from 'react'
import Routes from '../routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from '../Components/Menu/Menu';
import { isAlumn } from '../utils/DataBase';

const Layout = ({ user, setreloadApp }) => {
    const [dataAlumno, setdataAlumno] = useState({ activeExam1: true })
    const [cerrar, setCerrar] = useState(true);
    useEffect(() => {
        function getAl() {
            isAlumn(user.uid)
                .then(reqs => {
                    setdataAlumno(reqs)
                })
                .catch(err => {
                    alert('Error de conexion')
                })

        }
        getAl();
    }, [user])
    return (
        <Router>
            <Menu cerrar={cerrar} />
            <Routes dataAlumno={dataAlumno} setCerrar={setCerrar} user={user} setreloadApp={setreloadApp} />
        </Router>
    )
}

export default Layout
