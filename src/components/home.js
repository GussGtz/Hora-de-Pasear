<<<<<<< HEAD
import React, { useState } from 'react';
import '../App.css';
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
>>>>>>> c9e51cac8f816c4b84a383cd938d75fd405db87a
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '/Users/gustavogutierrez/Desktop/appricaciones web/rafa/src/css/home.css';

<<<<<<< HEAD
function Home() {                                  
=======
function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser({
          userId: user.uid,
          email: user.email,
          foto:user.photoURL,
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
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

>>>>>>> c9e51cac8f816c4b84a383cd938d75fd405db87a
  return (
    <div className="text-center mb-4">
      <header className="home-header">
        <div className="logo-section">
          <img className="logo" src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo" />
          <h1>Hora De Pasear</h1>
        </div>
        <div className="user-section">
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
<<<<<<< HEAD
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
=======
      </header>

      <nav className="home-nav">
        <Link to='/home'>Inicio</Link>
        <Link to='/clima'>Clima</Link>
        <Link to='/lugares'>Lugares</Link>
        <Link to='/info'>Información</Link>
>>>>>>> c9e51cac8f816c4b84a383cd938d75fd405db87a
      </nav>

      <main>
        <section className="welcome-section">
          <h2>¡Bienvenidos a "Hora de Pasear", tu compañero de viaje!</h2>
          <img src="https://expertvagabond.com/wp-content/uploads/cancun-things-to-do-guide-900x600.jpg" alt="Imagen de Bienvenida" />
        </section>
      </main>

      <footer className="home-footer">
        <div className="footer-content">
          <div className="social-media">
            <a href="https://www.facebook.com/gustavo.gutierrez.94064176/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/GustavoGtzzz" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/gtz_gustavo/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <div className="footer-links">
            <Link to='/terminos'>Términos de Servicio</Link>
            <Link to='/privacidad'>Política de Privacidad</Link>
          </div>
          <div className="copy-right">
            <p>© 2023 Hora De Pasear. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
<<<<<<< HEAD
=======

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
>>>>>>> c9e51cac8f816c4b84a383cd938d75fd405db87a
    </div>
  );
}

export default Home;
