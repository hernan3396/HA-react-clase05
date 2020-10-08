import React from "react";
import "./App.css";
import { Route, BrowserRouter, Link, Switch, Redirect } from "react-router-dom";
import Public from "./components/Public.jsx";
import Private from "./components/Private.jsx";
import Login from "./components/Login.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/public">Pagina publica</Link>
          </li>
          <li>
            <Link to="/private">Pagina privada</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/public" component={Public} />
        <PrivateRoute exact path="/private" component={Private} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/public" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
