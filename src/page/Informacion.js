import React from 'react';
import '../App.css';
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser } from '@fortawesome/free-solid-svg-icons';

function Informacion() {
  return (
    <>
       <div className="container-fluid bg-light p-3 p-md-5 rounded">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <img className="logo mr-3" src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo" width="50"/>
          <h1 className="font-weight-bold">Hora De Pasear</h1>
        </div>
        <Link to={'/login'}>
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Login
        </button>
        </Link>
      </header>

      <nav className="d-flex justify-content-around mb-4">
        <Link to={'/'}>
        <button class="destacado" className="btn btn-outline-success mx-2">Inicio</button>
        </Link>
        <Link to={'#'}>
        <button class="destacado" className="btn btn-outline-success mx-2">Clima</button>
        </Link>
        <Link to={'/lugares'}>
        <button class="destacado" className="btn btn-outline-success mx-2">Lugares</button>
        </Link>
        <Link to={'/informacion'}>
        <button class="destacado" className="btn btn-outline-success mx-2">Información</button>
        </Link>
      </nav>

      

      <footer className="text-center bg-success text-white p-3">
        <img src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo" width="50" />
        <p className="mt-2 mb-0">© Hora De Pasear</p>
      </footer>
    </div>
    </>
  )
}

export default Informacion
