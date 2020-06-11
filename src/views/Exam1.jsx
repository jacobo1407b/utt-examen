import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import data from '../Assets/exam.json'
import Pregunta1 from '../Components/Examen/Pregunta1';
import Reloj from '../Components/Reloj/RelojLimit';
import { updateActiveExamen } from '../utils/DataBase';
const Exam1 = ({ dataAlumno, history, setCerrar, match, user, setreloadApp }) => {

    useEffect(() => {
        setCerrar(false)
        if (!dataAlumno.activeExam1) {
            history.push('/')
        }
        return () => {
            setCerrar(true)
        }
    }, [history, dataAlumno.activeExam1, setCerrar])

    function elegir(numero) {
        if (numero < 0) {
            history.goBack();
        }
        if (numero >= 7) {
            history.goBack();
        }
        return <Pregunta1 dtajs={data[parseInt(numero)]} dataAlumno={dataAlumno.alumnExam.test} />
    }
    const handlerMatch = (num) => {
        if (num === "6") {
            return false
        }
        let newNum = parseInt(num) + 1;
        history.push(`/exam1/${newNum}`)
    }
    const handlerMenos = (num) => {
        if (num === "0") {
            return false
        }
        let newNum = parseInt(num) - 1;
        history.push(`/exam1/${newNum}`)
    }
    const exitExam = () => {
        if (localStorage.getItem('time') > 0) {
            alert('tienes tiempo, puedes revisar tus preguntas');
            updateActiveExamen(localStorage.getItem('document'))
            history.push('/')
        }
        else {
            alert('tu examen sera revisado')
            updateActiveExamen(localStorage.getItem('document'))
            history.push('/')
        }
    }
    return (
        <div>
            <Reloj user={user} setreloadApp={setreloadApp} />
            {elegir(match.params.num)}
            <h1>aqui las bolitas con el item activo {match.params.num}/6</h1>
            {match.params.num === "0" ? null : (
                <button className="btn-large" onClick={() => handlerMenos(match.params.num)}>Anterior</button>
            )}
            <button className="btn-large" onClick={() => handlerMatch(match.params.num)}>Siguiente</button>
            <button className="btn-large" onClick={exitExam}>Salir</button>
        </div>
    )
}


export default withRouter(Exam1)
