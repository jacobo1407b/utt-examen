import React from "react";
import Swal from "sweetalert2";
import {
  updateActiveExamen,
  updateActiveLogic,
  updateActiveMate,
  updateActiveLengua,
} from "../../utils/DataBase";
import MenuItem from "@material-ui/core/MenuItem";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import { withRouter } from "react-router-dom";

const NoResponsive = (props) => {
  const primer = () => {
    if (localStorage.getItem("time") > 0) {
      Swal.fire({
        title: "¿Terminar examen?",
        text: "No podras revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: "¿Estas seguro?",
            text: "Tienes tiempo para revisar tu examen",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si estoy totalmente seguro!",
          }).then((result) => {
            if (result.value) {
              switch (props.examen) {
                case "exam":
                  updateActiveExamen(localStorage.getItem("document"), rec);
                  break;
                case "logico":
                  updateActiveLogic(localStorage.getItem("document"), rec);
                  break;
                case "matematico":
                  updateActiveMate(localStorage.getItem("document"), rec);
                  break;
                case "lengua":
                  updateActiveLengua(localStorage.getItem("document"), rec);
                  break;

                default:
                  updateActiveExamen(localStorage.getItem("document"), rec);
                  break;
              }

              function rec() {
                window.location.reload();
                window.location = "/";
              }
            }
          });
        }
      });
    }
  };
  return (
    <MenuItem onClick={primer}>
      <IconButton aria-label="Exit examen" color="inherit">
        <DoneIcon />
      </IconButton>
      <p>Terminar Examen</p>
    </MenuItem>
  );
};

export default withRouter(NoResponsive);
/***
 *
 *
 */
