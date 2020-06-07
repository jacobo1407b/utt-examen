import React from 'react'

const Pregunta1 = ({ dtajs }) => {
    return (
        <div>
            {dtajs.pregunta_txt ? (
                <h1>{dtajs.pregunta_txt}</h1>
            ) : null}
            {dtajs.pregunta_url ? (
                <img src={dtajs.pregunta_url} />
            ) : null}
            r1:{dtajs.respuesta1}
            r2:{dtajs.respuesta2}
            r3:{dtajs.respuesta3}
            r4:{dtajs.respuesta4}
        </div>
    )
}

export default Pregunta1
