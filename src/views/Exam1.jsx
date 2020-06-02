import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';
const Exam1 = ({ dataAlumno, history, setCerrar }) => {
    useEffect(() => {
        if (!dataAlumno.activeExam1) {
            history.push('/')
        }
        setCerrar(false)
        return () => {
            setCerrar(true);
            alert('Cancelar el examen?')
        }
    }, [history, dataAlumno.activeExam1, setCerrar])

    return (
        <div>
            examen 1
        </div>
    )
}

export default withRouter(Exam1)
