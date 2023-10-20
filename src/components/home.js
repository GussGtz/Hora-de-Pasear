import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importaciones para FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faMapMarkerAlt, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="container-fluid bg-light p-3 p-md-5 rounded">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <img className="logo mr-3" src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo" width="50"/>
          <h1 className="font-weight-bold">Hora De Pasear</h1>
        </div>
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Login
        </button>
      </header>

      <nav className="d-flex justify-content-around mb-4">
        <button class="destacado" className="btn btn-outline-success mx-2">Inicio</button>
        <button class="destacado" className="btn btn-outline-success mx-2">Clima</button>
        <button class="destacado" className="btn btn-outline-success mx-2">Lugares</button>
        <button class="destacado" className="btn btn-outline-success mx-2">Información</button>
      </nav>

      <section className="text-center mb-4">
        <h1>¡Bienvenidos a "Hora de Pasear", tu compañero de viajes definitivo!</h1>
        <img className="img-fluid w-50 mx-auto rounded my-4" src="https://a4adc62bfbeb9287c6cc-44a9442b068bb36d5792597640a019e7.ssl.cf1.rackcdn.com/u/_destination/xpm/riviera-maya-resort-sunrise.jpg" alt=""/>
      </section>

      <section className="d-flex flex-column flex-md-row justify-content-around mb-4">
        <div className="text-center">
          <button className="btn btn-circle btn-success mb-3">
            <FontAwesomeIcon icon={faCloud} size="2x" />
          </button>
          <p>CLIMA</p>
        </div>
        <div className="text-center">
          <button className="btn btn-circle btn-success mb-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
          </button>
          <p>LUGARES</p>
        </div>
        <div className="text-center">
          <button className="btn btn-circle btn-success mb-3">
            <FontAwesomeIcon icon={faInfoCircle} size="2x" />
          </button>
          <p>Información</p>
        </div>
      </section>

      <footer className="text-center bg-success text-white p-3">
        <img src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo" width="50" />
        <p className="mt-2 mb-0">© Hora De Pasear</p>
      </footer>
    </div>
  );
}

export default Home;
