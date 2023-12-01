import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '../css/home.css';

const WeatherInfo = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser({
          userId: user.uid,
          email: user.email,
          foto: user.photoURL,
          displayName: user.displayName || 'Usuario',
        });
      } else {
        setUser(null);
      }
    });


    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
 
 const handleLoginWithEmailAndPassword = async () => {
    try {
      const email = 'correo@example.com'; 
      const password = 'contraseña';
      const response = await fetch('http://localhost:8083/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setUser({
          userId: data.user.userId,
          email: data.user.email,
          displayName: data.user.displayName || 'Usuario',
        });

        navigate('/home'); 
      } else {
        console.error('Error al iniciar sesión:', data.message);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };






  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.weatherapi.com/v1/current.json?key=c23c137cf41d4949a6945959232611&q=Cancun&aqi=no&lang=es`;
      try {
        const response = await fetch(url);
        
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setWeatherData(data);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchData();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderWeatherData = weatherData ? (
    <div className="weather-details" style={{ fontSize: '32px' }}>
      <FontAwesomeIcon icon={faCloud} size="5x" className="weather-icon" />
      <span style={{ fontSize: '48px' }}>{weatherData.current.temp_c}°C</span>
      <div className="weather-stats">
       
        <span style={{ fontSize: '24px' }}>Precipitación: {weatherData.current.precip_mm}mm</span>
        
        <span style={{ fontSize: '24px' }}>Viento: {weatherData.current.wind_kph}kph</span>
        <span style={{ fontSize: '24px' }}>Humedad: {weatherData.current.humidity}%</span>
      </div>
      <div className="weather-date" style={{ fontSize: '24px' }}>{weatherData.current.last_updated}</div>
      <div className="weather-condition" style={{ fontSize: '32px' }}>{weatherData.current.condition.text}</div>
    </div>
  ) : (
    <p className="text-center">Cargando datos del clima...</p>
  );

  return (
    <div className="text-center mb-4">
      <header className="home-header">
        <div className="logo-section" style={{marginTop:20, marginLeft:10}}>
          <img className="logo" src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo" />
          <h1>Hora De Pasear</h1>
        </div>
        <div className="user-section" style={{marginTop:20}}>
          {user ? (
            <>
              <img
                src={user.foto} // Mostrará la foto en miniatura del usuario
                alt="Foto de perfil"
                style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '5px' }}
              />
              <span>{user.displayName}</span>
              <Button variant="outline-danger" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Cerrar Sesión
              </Button>
            </>
          ) : (
            <Button variant="outline-primary" onClick={handleShow}>
              <FontAwesomeIcon icon={faSignInAlt} /> Iniciar Sesión
            </Button>
          )}
        </div>
      </header>

      <nav className="home-nav">
        <Link to='/home'>Inicio</Link>
        <Link to='/clima'>Clima</Link>
        <Link to='/lugares'>Lugares</Link>
        <Link to='/informacion'>Noticias</Link>
      </nav>

      <main className="welcome-section">
        <div className="weather-container">
          {error ? <p className="text-center">Error al cargar los datos: {error}</p> : renderWeatherData}
        </div>
        <div className="spacer"></div>
      </main>

      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-links">
            <Link to='/terminos'>Términos de Servicio</Link>
            <Link to='/privacidad'>Política de Privacidad</Link>
          </div>
          <div className="copy-right">
            <p>© 2023 Hora De Pasear. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Aquí iría el formulario de inicio de sesión si es necesario */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
          <Button variant="primary">Iniciar sesión</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WeatherInfo;
