import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { toast } from 'materialize-css';
const Home = ({ dataAlumno, history }) => {


    const handlerExam1 = () => {
        if (!dataAlumno.activeExam1) {
            toast({ html: 'Este examen esta desactivado' })
            return false
        }
        //document.documentElement.requestFullscreen()
        history.push('/exam1/1')
    }

    useEffect(() => {
        navigator.getUserMedia = (navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);
        navigator.getUserMedia(
            {
                video: true,
                audio: true
            },
            function (localMediaStream) {
                var video = document.querySelector(video);
                video.src = window.URL.createObjectURL(localMediaStream);
            },
            function (err) {
                console.log("Ocurrió el siguiente error: " + err);
            }
        );
    }, [])
    return (
        <div className="container center">
            <br></br>
            <img className="responsive-img center" src="utt.png" alt="utt-img" width="250px" />
            {
                dataAlumno.activeExam1 ?
                    (
                        <TextIng />
                    ) :
                    (
                        <TextNoActive />
                    )
            }
            <div className="container">
                <button className="waves-effect waves-light btn-large deep-orange darken-3 container" onClick={handlerExam1}>SEANI</button>
            </div>
        </div>
    )
}


const TextIng = () => {
    return (
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio soluta reiciendis dicta cum tempore repellendus modi cumque veritatis nemo ex molestias veniam quisquam impedit at, nihil vitae perspiciatis aliquid numquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque soluta et repudiandae ad. Ducimus, id. Saepe deserunt sequi, ducimus deleniti fuga neque vero fugit. Assumenda natus laboriosam quis ducimus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid quisquam illum, aspernatur nihil ut similique voluptatem eligendi aperiam optio. Unde eum officiis repudiandae perspiciatis ut nulla perferendis ad aspernatur.
        </p>
    )
}

const TextNoActive = () => {
    return (
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio soluta reiciendis dicta cum tempore repellendus modi cumque veritatis nemo ex molestias veniam quisquam impedit at, nihil vitae perspiciatis aliquid numquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque soluta et repudiandae ad. Ducimus, id. Saepe deserunt sequi, ducimus deleniti fuga neque vero fugit. Assumenda natus laboriosam quis ducimus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid quisquam illum, aspernatur nihil ut similique voluptatem eligendi aperiam optio. Unde eum officiis repudiandae perspiciatis ut nulla perferendis ad aspernatur.
        </p>
    )
}
export default withRouter(Home)
