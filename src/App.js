import React, { useState } from "react";
import firebase from "./utils/firebase";
import "firebase/auth";
import Login from "./views/Login";
import Layout from "./Layouts/Layout";
import { SnackbarProvider } from "notistack";

function App() {
  const [user, setuser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadApp, setreloadApp] = useState(false);
  firebase.auth().onAuthStateChanged((currentUser) => {
    //if (!currentUser?.emailVerified) {
    //firebase.auth().signOut();
    //setuser(null);
    //} else {
    setuser(currentUser);
    // }
    setIsLoading(false);
  });

  if (isLoading) {
    return null;
  }
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        {!user ? (
          <Login />
        ) : (
          <Layout
            user={user}
            setreloadApp={setreloadApp}
            reloadApp={reloadApp}
          />
        )}
      </SnackbarProvider>
    </>
  );
}
export default App;
