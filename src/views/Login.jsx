import React, { useState } from "react";
import "../Assets/login.css";
import firebase from "../utils/firebase";
import "firebase/auth";
import { addStorage } from "../utils/DataBase";
import { useSnackbar } from "notistack";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#FB5D0E !important",
  },
  media: {
    height: "70%",
    paddingTop: "58.25%", // 16:9
    paddingBottom: "12px",
  },
}));

const Login = () => {
  const [formDta, setFormDta] = useState({ password: "", email: "" });
  const [us, setus] = useState({ user: null, userActive: true });
  const [isloadin, setIsloadin] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [error, seterror] = useState(false);
  const classes = useStyles();
  const handlerChange = (e) => {
    const { value, name } = e.target;
    setFormDta({
      ...formDta,
      [name]: value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!formDta.email || !formDta.password) {
      seterror(true);
      return false;
    }
    setIsloadin(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(formDta.email, formDta.password)
      .then((res) => {
        setIsloadin(false);

        addStorage(res.user.uid);
        setus({
          user: res.user,
          userActive: res.user.emailVerified,
        });
      })
      .catch((err) => {
        console.log(err);
        setIsloadin(false);
        handleErrors(err.code);
      });
  };
  const handleErrors = (code) => {
    console.log(code);
    switch (code) {
      case "auth/wrong-password":
        enqueueSnackbar("El usuario o contraseña son incorrectos", {
          variant: "error",
        });
        break;
      case "auth/too-many-requests":
        enqueueSnackbar("Has enviado demasiadas solicitudes de envio", {
          variant: "warning",
        });
        break;
      case "auth/user-not-found":
        enqueueSnackbar("usuario no encontrado", { variant: "warning" });
        break;
      default:
        enqueueSnackbar("Error del servidor", { variant: "error" });
        break;
    }
  };

  return (
    <Container maxWidth="sm">
      <form
        onChange={handlerChange}
        onSubmit={handlerSubmit}
        us={us}
        className={classes.form}
      >
        <CardMedia className={classes.media} image="utt.png" title="Utt logo" />
        <div className={classes.paper}>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={error}
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={error}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </div>
      </form>

      <Backdrop className={classes.backdrop} open={isloadin}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

export default Login;
/*75
78       <div className="row">
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="With a grid"
                  name="email"
                />
              </Grid>
            </Grid>
          </div>
          <div className="card-panel hoverable grey lighten-5 col s12">
            <div className="input-field ">
              <i
                className="material-icons prefix green-text"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                enhanced_encryption
              </i>
              <input
                className="container validate"
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                name="password"
                required
              />
            </div>
          </div>
          <button
            className="btn-large center deep-orange hoverable"
            type="submit"
            style={{ backgroundSize: "200%" }}
          >
            Login
          </button>
        </div>
52
88*/
