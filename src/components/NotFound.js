import React from 'react'
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import "../stylesheets/App.scss";

const NotFound = () => {
  return (
    <div className="App">

      <header className="App-header">

        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>

      </header>

      <div className="erreur">Désolé, pas de film ici !</div>

      <Link to="/">
          <div className="retour">Retour à l'accueil</div>
      </Link>

    </div>
  )
}

export default NotFound