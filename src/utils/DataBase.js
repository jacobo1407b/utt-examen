import firebaseApp from "./firebase";
import * as firebase from "firebase";
const db = firebase.firestore(firebaseApp);
export const isAlumn = async (uid) => {
  const response = await db
    .collection("alumnos3")
    .where("user", "==", uid)
    .get();
  return response?.docs[0].data();
};

export const addStorage = async (uid) => {
  const response = await db
    .collection("alumnos3")
    .where("user", "==", uid)
    .get();
  localStorage.setItem("document", response.docs[0].id);
  localStorage.setItem("token", "eyk.just588.gh9985bggdeiwe");
  localStorage.setItem("seconds", 5900);
  localStorage.setItem("visible", true);
  localStorage.setItem("active", false);
  //console.log(response.docs[0].data())
  if (response.docs[0].data().activeExam1) {
    let time = response.docs[0].data().time;
    localStorage.setItem("time", time);
  } else {
    localStorage.setItem("time", 0);
  }
};
/**cancelacion de examenes  */
export const updateActiveExamen = async (idcollection, cb) => {
  db.doc(`alumnos3/${idcollection}`)
    .update({
      activeExam1: false,
    })
    .then(() => cb());
};

export const updateActiveLogic = async (idcollection, cb) => {
  db.doc(`alumnos3/${idcollection}`)
    .update({
      activeLogic: false,
    })
    .then(() => cb());
};
export const updateActiveMate = async (idcollection, cb) => {
  db.doc(`alumnos3/${idcollection}`)
    .update({
      activeMat: false,
    })
    .then(() => cb());
};
export const updateActiveLengua = async (idcollection, cb) => {
  db.doc(`alumnos3/${idcollection}`)
    .update({
      activeLengua: false,
    })
    .then(() => cb());
};

/**funcion que actualiza el tiempo */
export const updateTimeImpli = async (time) => {
  await db
    .doc(`alumnos3/${localStorage.getItem("document")}`)
    .update({ time: parseInt(time, 10) });
};
export const updateTimeAll = async (idcollection, cb) => {
  db.doc(`alumnos3/${idcollection}`)
    .update({
      activeLengua: false,
      activeMat: false,
      activeLogic: false,
      activeExam1: false,
      time: 0,
    })
    .then(() => cb());
};
/**Agregar alumnos */
export const addAlumn = async (d, data) => {
  db.collection("alumnos3")
    .doc(d)
    .set(data)
    .then((res) => console.log("todo bien"))
    .catch((err) => {
      console.log("error en: " + d + "y" + data);
      console.log(err);
    });
};
/**funciones para actualizar preguntas */
export const updateResExam = async (idcoll, arrRespuestas, todos) => {
  await db.doc(`alumnos3/${idcoll}`).update({ test: arrRespuestas });
  await db
    .doc(`alumnos3/${idcoll}`)
    .update({ time: localStorage.getItem("time") });
};

export const updateResExamLogic = async (idcoll, arrRespuestas) => {
  await db.doc(`alumnos3/${idcoll}`).update({ logico: arrRespuestas });
  await db
    .doc(`alumnos3/${idcoll}`)
    .update({ time: localStorage.getItem("time") });
};

export const updateMate = async (idcoll, arrRespuestas) => {
  await db.doc(`alumnos3/${idcoll}`).update({ matematico: arrRespuestas });
  await db
    .doc(`alumnos3/${idcoll}`)
    .update({ time: localStorage.getItem("time") });
};

export const updateLengua = async (idcoll, arrRespuestas) => {
  await db.doc(`alumnos3/${idcoll}`).update({ lengua: arrRespuestas });
  await db
    .doc(`alumnos3/${idcoll}`)
    .update({ time: localStorage.getItem("time") });
};
