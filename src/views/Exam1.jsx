import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import data from '../Assets/exam.json'
import Pregunta1 from '../Components/Examen/Pregunta1';
import Reloj from '../Components/Reloj/RelojLimit';
import { updateActiveExamen } from '../utils/DataBase';
const Exam1 = ({ dataAlumno, history, setCerrar, match, user, setreloadApp }) => {

    const [dataJson, setdataJson] = useState(data);
    useEffect(() => {
        setCerrar(false)
        if (!dataAlumno.activeExam1) {
            history.push('/')
        }
        return () => {
            setCerrar(true)
        }
    }, [history, dataAlumno.activeExam1, setCerrar])


    /*window.onbeforeunload = function (e) {
        return 'Texto de aviso';
    };*/
    function elegir(numero) {
        if (numero < 0) {
            history.goBack();
        }
        return <Pregunta1 dtajs={dataJson[parseInt(numero)]} />
    }
    const handlerMatch = (num) => {
        if (num === 6) {
            return false
        }
        let newNum = parseInt(num) + 1;
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
            {elegir(match.params.num)}
            <button onClick={() => handlerMatch(match.params.num)}>Next.js</button>
            <h1>aqui las bolitas con el item activo {match.params.num}/6</h1>
            <Reloj user={user} setreloadApp={setreloadApp} />
            <button onClick={exitExam}>Salir</button>
        </div>
    )
}


export default withRouter(Exam1)
