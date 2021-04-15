import React from "react";
import Login from "../views/Login";
import Registro from "../views/Registro";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const Nouser = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/registro">
          <Registro />
        </Route>
        <Route path="*" redirect="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Nouser;
