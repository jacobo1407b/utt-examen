import React from 'react'
import { withRouter } from 'react-router-dom'
const Home = ({ dataAlumno, history }) => {


    const handlerExam1 = () => {
        if (!dataAlumno.activeExam1) {
            alert('Este examen esta desactivado')
            return false
        }
        document.documentElement.requestFullscreen()
        history.push('/exam1/1')
    }

    return (
        <div>
            <button onClick={handlerExam1}>Examen 1</button>
        </div>
    )
}

export default withRouter(Home)
