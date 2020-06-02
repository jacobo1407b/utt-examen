import React from 'react'
import { withRouter } from 'react-router-dom'
const Home = ({ dataAlumno, history }) => {


    const handlerExam1 = () => {
        if (!dataAlumno.activeExam1) {
            console.log('No c puede hacer el examen');
            alert('Este examen esta desactivado')
            return false
        }
        document.documentElement.requestFullscreen()
        history.push('/exam1')

    }
    const handlerExam2 = () => {
        if (!dataAlumno.activeExam2) {
            console.log('No c puede hacer el examen');
            alert('Este examen esta desactivado')
            return false
        }
        document.documentElement.requestFullscreen()
        history.push('/exam2')
    }

    const handlerExam3 = () => {
        if (!dataAlumno.activeExam3) {
            console.log('No c puede hacer el examen');
            alert('Este examen esta desactivado')
            return false
        }
        document.documentElement.requestFullscreen()
        history.push('/exam3')
    }
    return (
        <div>
            <button onClick={handlerExam1}>Examen 1</button>
            <button onClick={handlerExam2}>Examen 2</button>
            <button onClick={handlerExam3}>Examen 3</button>
        </div>
    )
}

export default withRouter(Home)
