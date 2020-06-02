import firebaseApp from './firebase';
import * as firebase from 'firebase';
const db = firebase.firestore(firebaseApp);

export const isAlumn = async uid => {
    const response = await db
        .collection("alumnos")
        .where("user", "==", uid).get()
    return response.docs[0].data()
}
