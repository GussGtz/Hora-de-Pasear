import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faMapMarkerAlt, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; // Asegúrate de que App.css contiene los nuevos estilos

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';



const WeatherInfo = () => {
 
  // usuario
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Escucha los cambios en la autenticación de Firebase
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Usuario autenticado
        
        setUser({
          userId: user.uid,
          email: user.email,
          displayName: user.displayName || 'Usuario',
        });
      } else {
        // No hay usuario autenticado
        setUser(null);
      }
    });

    // Limpia el efecto cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      // Cerrar sesión exitosamente, redirigir al componente de inicio de sesión
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
 
 
 
 const handleLoginWithEmailAndPassword = async () => {
    // Aquí puedes manejar el inicio de sesión con correo y contraseña,
    // y obtener el nombre del usuario de tu servidor
    try {
      const email = 'correo@example.com'; // Reemplaza con el correo proporcionado por el usuario
      const password = 'contraseña'; // Reemplaza con la contraseña proporcionada por el usuario

      // Llama a tu servidor para iniciar sesión y obtener la información del usuario
      const response = await fetch('http://localhost:8083/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Inicio de sesión exitoso, obtener información del usuario
        setUser({
          userId: data.user.userId,
          email: data.user.email,
          displayName: data.user.displayName || 'Usuario',
        });

        navigate('/'); // Puedes redirigir a la página principal o donde desees
      } else {
        console.error('Error al iniciar sesión:', data.message);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };


  // fin seccion usuario



  const [show, setShow] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.weatherapi.com/v1/current.json?key=c23c137cf41d4949a6945959232611&q=Cancun&aqi=no&lang=es`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="weather-container">
      <header className="weather-header">
        <div className="logo-container">
          <img className="logo" src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo"/>
          <h1>Hora De Pasear</h1>
        
        
        <div className="derecha">
            {user && (
                <>
                    <span>{user.displayName}</span>
                    <Button variant="outline-danger" onClick={handleLogout}>
                        Cerrar Sesión
                    </Button>
                </>
            )}
            {!user && (
                <Button variant="outline-danger" onClick={handleLogout}>
                    Cerrar Sesión
                </Button>
            )}
        </div>
        
        
        </div>
       



      </header>

      <nav className="weather-nav">
      <Link to={'/home'}>
        <button class="destacado" className="btn btn-outline-success mx-2">Inicio</button>
        </Link>

        <Link to={'/clima'}>
        <button class="destacado" className="btn btn-outline-success mx-2">Clima</button>
        </Link>
        
        <Link to={'/lugares'}>
        <button class="destacado" className="btn btn-outline-success mx-2">Lugares</button>
        </Link>
        <Link to={'/home'}>
        <button class="destacado" className="btn btn-outline-success mx-2">Información</button>
        </Link>
      </nav>

      <main className="weather-info">
        {weatherData && (
          <div className="weather-details">
            <div className="weather-temp">
            <FontAwesomeIcon icon={faCloud} size="1x" />
              <span>{weatherData.current.temp_c}°C</span>
              <div class='fecha'>{weatherData.current.last_updated}</div>
              <div class='fecha'>{weatherData.current.condition.text}</div>
            </div>
            <div className="weather-stats">
              <div>Precipitacion: {weatherData.current.precip_mm}mm</div>
              <div>Humedad: {weatherData.current.humidity}%</div>
              <div>viento: {weatherData.current.wind_kph}kph</div>
             
              
            </div>
          </div>
        )}
      </main>

      <footer className="weather-footer">
        <img className="footer-logo" src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo"/>
        <p>© Hora De Pasear</p>
      </footer>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Usuario</label>
              <input type="text" placeholder="Ingresa tu usuario" className="form-control" />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" placeholder="Ingresa tu contraseña" className="form-control" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={handleClose}>
            Iniciar sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WeatherInfo;
