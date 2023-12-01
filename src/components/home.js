import React, { useState, useEffect } from 'react';
import '../App.css';
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faMapMarkerAlt, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';



function Home() {                                  

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






  const [show, setShow] = useState(false);

  
  return (
    <div className="container-fluid bg-light p-3 p-md-5 rounded">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <img className="logo mr-3" src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo" width="50"/>
          <h1 className="font-weight-bold">Hora De Pasear</h1>
        </div>


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
      </header>

      <nav className="d-flex justify-content-around mb-4">
        <Link to={'/home'}>
        <button class="destacado" className="btn btn-outline-success mx-2">Inicio</button>
        </Link>
        <Link to={'/clima'}>
        <button class="destacado" className="btn btn-outline-success mx-2">Clima</button>
        </Link>
        <Link to={'/lugares'}>
        <button class="destacado" className="btn btn-outline-success mx-2">Lugares</button>
        </Link>
        <Link to={'/informacion'}>
        <button class="destacado" className="btn btn-outline-success mx-2">Noticias</button>
        </Link>
      </nav>

      <section className="text-center mb-4">
        <h1>¡Bienvenidos a "Hora de Pasear", tu compañero de viajes definitivo!</h1>
        <img className="img-fluid w-50 mx-auto rounded my-4" src="https://a4adc62bfbeb9287c6cc-44a9442b068bb36d5792597640a019e7.ssl.cf1.rackcdn.com/u/_destination/xpm/riviera-maya-resort-sunrise.jpg" alt=""/>
      </section>

      <section className="d-flex flex-column flex-md-row justify-content-around mb-4">
        <div className="text-center">
          <Link to={'/clima'}>
          <button className="btn btn-circle btn-success mb-3">
            <FontAwesomeIcon icon={faCloud} size="2x" />
          </button>
          </Link>
          <p>CLIMA</p>
        </div>
        <div className="text-center">
          <Link to={'/lugares'}>
          <button className="btn btn-circle btn-success mb-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
          </button>
          </Link>
          <p>LUGARES</p>
        </div>
        <div className="text-center">
          <Link to={'/informacion'}>
          <button className="btn btn-circle btn-success mb-3">
            <FontAwesomeIcon icon={faInfoCircle} size="2x" />
          </button>
          </Link>
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
