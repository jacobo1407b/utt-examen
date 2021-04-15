import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { useSnackbar } from "notistack";
import "materialize-css/dist/css/materialize.css";
import { Container, Button, Grid } from "semantic-ui-react";
import "../Assets/main.css";
const Home = ({ dataAlumno, history, setExamen }) => {
  const { enqueueSnackbar } = useSnackbar();
  const handlerExam1 = () => {
    if (!dataAlumno.activeExam1) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info",
      });
      return false;
    } else {
      setExamen("exam");
      history.push("/exam1/1");
    }
  };

  const logica = () => {
    if (!dataAlumno.activeLogic) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info",
      });
      return false;
    } else {
      setExamen("logico");
      history.push("/logico/1");
    }
  };
  const mate = () => {
    if (!dataAlumno.activeMat) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info",
      });
      return false;
    } else {
      setExamen("matematico");
      history.push("/matematico/1");
    }
  };
  const lengua = () => {
    if (!dataAlumno.activeLengua) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info",
      });
      return false;
    } else {
      setExamen("lengua");
      history.push("/lengua/1");
    }
  };
  useEffect(() => {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
    navigator.getUserMedia(
      {
        video: true,
        audio: true,
      },
      function (localMediaStream) {
        // var video = document.querySelector(video);
        //video.src = window.URL.createObjectURL(localMediaStream);
        console.log("Chido XD");
      },
      function (err) {
        console.log("Ocurrió el siguiente error: " + err);
      }
    );
  }, []);

  return (
    <Container textAlign="center">
      <Fragment>
        <img
          className="responsive-img center"
          src="utt.png"
          alt="utt-img"
          width="250px"
        />
        <TextIng dataAlumno={dataAlumno} />
        <Grid.Row>
          <blockquote>
            <p className="flow-text">
              La evaluación, que estas a punto de iniciar, consta de 90
              preguntas que deberás responder en un tiempo máximo de 2 horas,
              mismas que corresponden a las siguientes áreas:
            </p>
          </blockquote>
        </Grid.Row>
        <Grid.Row>
          <div className="card-panel">
            <span className="blue-text text-darken-2">
              <p className="flow-text">Lógico / Matemáticas</p>
            </span>
            <span className="blue-text text-darken-2">
              <p className="flow-text">Comprensión lectora</p>
            </span>
          </div>
        </Grid.Row>

        <blockquote>
          <p className="flow-text">
            Por favor, habilita los permisos necesarios en tu navegador como se
            muestra a continuación:
          </p>

          <div className="card-panel">
            <video
              className="responsive-video"
              controls={false}
              autoPlay
              loop
              preload="auto"
            >
              <source src="/camara-micro.mp4" type="video/mp4" />
            </video>
          </div>
        </blockquote>

        <blockquote>
          <p className="flow-text">
            Todas las preguntas son de opción múltiple, no olvides que, al
            seleccionar la respuesta, tendrás que dar clic en el botón "Guardar
            respuesta", como se muestra a continuación.
          </p>

          <div className="card-panel">
            <video
              className="responsive-video"
              controls={false}
              autoPlay
              loop
              preload="auto"
            >
              <source src="/qwerty.mp4" type="video/mp4" />
            </video>
          </div>
        </blockquote>

        <div className="card-panel">
          <p className="flow-text">
            En caso de que te encuentres en estas situaciones:
          </p>
          <span className="red-text text-darken-2">
            <p className="flow-text">Conexión a internet muy inestable.</p>
          </span>
          <span className="red-text text-darken-2">
            <p className="flow-text">Cerrar la pestaña por error.</p>
          </span>
          <span className="red-text text-darken-2">
            <p className="flow-text">Se termine la batería a tu celular.</p>
          </span>
          <span className="red-text text-darken-2">
            <p className="flow-text">Se interrumpa la energía eléctrica.</p>
          </span>
          <span className="red-text text-darken-2">
            <p className="flow-text">Se apague tu dispositivo.</p>
          </span>
        </div>
        <blockquote>
          <p className="flow-text">
            El sistema guardará las respuestas y el tiempo también, así que
            mantén la calma, en caso de cualquier duda sobre alguna situación
            puedes comunicarte al Grupo de{" "}
            <a
              href="https://t.me/utt_seani_2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram.
            </a>
          </p>
        </blockquote>
        <div className="container">
          <Grid columns="equal">
            <Grid.Row>
              <Button
                content="Pensamiento analítico"
                icon="settings"
                labelPosition="right"
                fluid
                color="orange"
                size="huge"
                onClick={handlerExam1}
              />
            </Grid.Row>
            <Grid.Row>
              <Button
                content="Comprensión lectora"
                icon="cog"
                labelPosition="right"
                fluid
                color="orange"
                size="huge"
                onClick={logica}
              />
            </Grid.Row>
            <Grid.Row>
              <Button
                content="Pensamiento matemático"
                icon="react"
                labelPosition="right"
                fluid
                color="orange"
                size="huge"
                onClick={mate}
              />
            </Grid.Row>
            <Grid.Row>
              <Button
                content="Estructura de la lengua"
                icon="male"
                labelPosition="right"
                fluid
                color="orange"
                size="huge"
                onClick={lengua}
              />
            </Grid.Row>
          </Grid>
        </div>
      </Fragment>
    </Container>
  );
};

const TextIng = (props) => {
  const { dataAlumno } = props;
  return (
    <>
      <h1>
        BIENVENIDO {"(A)"}, {dataAlumno.username}
      </h1>
    </>
  );
};

/* este va en la parte baja de las instrucciones
const TextNoActive = (props) => {
  const { dataAlumno } = props;

  return (
    <p>
      <h1>​ ¡Felicidades!</h1>
      <h4>{dataAlumno.username}</h4>
      <img src="/guerrero.png" alt="lucas alias la botarga" />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <blockquote>
        <div className="card-panel">
          <span className="flow-text">
            Haz concluido tu examen de admisión. Espera resultados en la pagina
            oficial de la Universidad Tecnológica de Tlaxcala.
          </span>
        </div>
      </blockquote>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </p>
  );
};*/

/** poner en la instrucciones
 *
 */
export default withRouter(Home);
