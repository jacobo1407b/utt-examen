import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
class Exam2 extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    componentDidMount() {
        if (!this.props.dataAlumno.activeExam2) {
            this.props.history.push('/')
        }

        this.props.setCerrar(false)
    }

    componentWillUnmount() {
        alert('Terminar examen?')
    }
    render() {
        return (
            <div>
                exa,men 2
            </div>
        );
    }
}

export default withRouter(Exam2);