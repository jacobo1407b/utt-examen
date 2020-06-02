import React, { useEffect, useState } from 'react'
import Routes from '../routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from '../Components/Menu/Menu';
import { isAlumn } from '../utils/DataBase';

const Layout = ({ user }) => {
    const [dataAlumno, setdataAlumno] = useState({})
    const [cerrar, setCerrar] = useState(true);
    useEffect(() => {
        async function getAl() {
            let response = await isAlumn(user.uid);
            setdataAlumno(response)
        }
        getAl();
    }, [user])
    return (
        <Router>
            <Menu cerrar={cerrar} />
            <Routes dataAlumno={dataAlumno} setCerrar={setCerrar} />
        </Router>
    )
}

export default Layout
