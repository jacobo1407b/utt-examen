import React from "react";
import Swal from "sweetalert2";
import {
  updateActiveExamen,
  updateActiveLogic,
  updateActiveMate,
  updateActiveLengua,
} from "../../utils/DataBase";
import { withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";
const Modal = (props) => {
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
              // localStorage.setItem('time', 0)
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
    <div>
      <Menu.Item name="Terminar examen" onClick={primer} className="my-color" />
    </div>
  );
};

export default withRouter(Modal);

/***
 *
 *
 *
 */
