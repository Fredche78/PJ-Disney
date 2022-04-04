import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import './index.css';
import App from './App';
import { HashRouter, Switch, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import Movie from "./components/Movie";
import Company from "./components/Company";


// Création d'un composant stateless qui va conternir notre système de routes
const Root = () => {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/movie/:id" component={Movie} />
          <Route exact path="/company/:company" component={Company} />

          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    )
  }

  ReactDOM.render(
    <React.StrictMode>
      {/* On remplace l'appel au composant App par Root pour utliser notre sustème de routes */}
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
