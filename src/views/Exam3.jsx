import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';
const Exam3 = ({ dataAlumno, history, setCerrar }) => {

    useEffect(() => {
        console.log('ya entro XD')
        if (!dataAlumno.activeExam3) {
            history.push('/')
        }
        setCerrar(false);
        return () => {
            setCerrar(true)
            alert('Salir del examen')
        }
    }, [dataAlumno.activeExam3, history, setCerrar])
    return (
        <div>
            examen 3
        </div>
    )
}

export default withRouter(Exam3);