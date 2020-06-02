import React, { useState } from 'react';
import firebase from './utils/firebase';
import "firebase/auth";
import Login from './views/Login';
import Layout from './Layouts/Layout';

function App() {
  const [user, setuser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  firebase.auth().onAuthStateChanged(currentUser => {
    // if (!currentUser?.emailVerified) {
    //  firebase.auth().signOut();
    //  setuser(null);
    //} else {
    setuser(currentUser);
    //}
    setIsLoading(false);
  });

  if (isLoading) {
    return null;
  }
  return (
    <>
      {
        !user ? (<Login />) : (<Layout user={user} />)
      }
    </>
  );
}
export default App;
