import React, { useEffect } from 'react'
import "../Assets/preguntas.css"
import { withRouter } from 'react-router-dom';
import data from '../Assets/exam.json'
import Pregunta1 from '../Components/Examen/Pregunta1';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

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
    const classes = useStyles();
    function elegir(numero) {
        if (numero <= 0) {
            history.goBack();
        }
        if (numero > 90) {
            history.goBack();
        }
        return <Pregunta1
            dtajs={data[parseInt(numero)]}
            dataAlumno={dataAlumno.alumnExam ? dataAlumno.alumnExam.test : []}
            posision={numero}
        />
    }
    const handleChange = (event, value) => {
        history.push(`/exam1/${value}`)
    };

    return (
        <div>
            {elegir(match.params.num)}
            <div className={classes.root}>
                <Pagination className=" transparent center-align"
                    count={90}
                    defaultPage={1}
                    page={parseInt(match.params.num)}
                    color="primary"
                    onChange={handleChange} />
            </div>
        </div>
    )
}


export default withRouter(Exam1)
