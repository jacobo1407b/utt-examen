import React from "react";
import "../../Assets/reloj.css";
import { updateTimeImpli, updateTimeAll } from "../../utils/DataBase";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

class RelojLimit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: 10800 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  componentDidMount() {
    this.startTimer();
  }
  componentWillMount() {
    let timeLeftVar = this.secondsToTime(localStorage.getItem("time"));
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = parseInt(localStorage.getItem("time")) - 1;
    localStorage.setItem("time", seconds);
    this.setState({
      time: this.secondsToTime(seconds),
    });

    // Check if we're at zero.
    if (seconds === 15) {
      Swal.fire({
        icon: "warning",
        title: "¡Alerta!",
        text: "¡Examen apunto de terminar!",
      });
    }
    if (seconds === 900) {
      Swal.fire({
        icon: "warning",
        title: "¡Alerta!",
        text: "15 Minutos para finalizar",
      });
      updateTimeImpli(900);
    }
    if (seconds === 0 || seconds < 0) {
      clearInterval(this.timer);
      this.setState({
        time: { h: 0, m: 0, s: 0 },
      });
      localStorage.setItem("time", 0);
      Swal.fire("El tiempo finalizo");
      function cb() {
        window.location = "/";
        window.location.reload();
      }
      updateTimeAll(localStorage.getItem("document"), cb);
    }
  }

  render() {
    return (
      <>
        <AccessAlarmIcon />
        {this.state.time.h} h :{this.state.time.m} m : {this.state.time.s} s
      </>
    );
  }
}

export default withRouter(RelojLimit);
