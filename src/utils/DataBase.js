import firebaseApp from './firebase';
import * as firebase from 'firebase';
const db = firebase.firestore(firebaseApp);
export const isAlumn = async uid => {
    const response = await db
        .collection("alumnos")
        .where("user", "==", uid).get()
    return response.docs[0].data()
}

export const addStorage = async uid => {
    const response = await db
        .collection("alumnos")
        .where("user", "==", uid).get()
    localStorage.setItem('document', response.docs[0].id)
    localStorage.setItem('token', 'eyk.just588.gh9985bggdeiwe')
    localStorage.setItem('seconds', 5900);
    localStorage.setItem('visible', true)
    localStorage.setItem('active', false)
    localStorage.setItem('cache', true)
    localStorage.setItem('timer', 5900)
    localStorage.setItem('key', '0x954574f4544we121875413ef')
    localStorage.setItem('active', false)
    //console.log(response.docs[0].data())
    if (response.docs[0].data().activeExam1) {
        let time = response.docs[0].data().time;
        localStorage.setItem('time', time);
    }
    else {
        localStorage.setItem('time', 0)
    }
}

export const updateActiveExamen = async (idcollection, cb) => {
    db.doc(`alumnos/${idcollection}`).update({ activeExam1: false })
        .then(() => {
            db.doc(`alumnos/${idcollection}`).update({ time: 0 })
                .then(() => {
                    cb();
                });
        });
}
export const updateResExam = async (idcoll, arrRespuestas) => {
    await db.doc(`alumnos/${idcoll}`).update({ alumnExam: { test: arrRespuestas } })
    await db.doc(`alumnos/${idcoll}`).update({ time: localStorage.getItem('time') })
}

export const updateTimeImpli = async (time) => {
    await db.doc(`alumnos/${localStorage.getItem('document')}`).update({ time })
}