import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '../css/home.css';
import ParqueLasPalapas from '../ApiUbicaciones/ParqueLasPalapas';
import PlazaLasAmericas from '../ApiUbicaciones/PlazaLasAmericas';
import ElMirador from '../ApiUbicaciones/Mirador'
import TorreExcaret from '../ApiUbicaciones/TorreExcaret'
import CancunCenter from '../ApiUbicaciones/CancunCenter'
import PlazaLaIsla from '../ApiUbicaciones/PlazalaIsla'
import axios from 'axios';

const Lugares = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);


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

  

  const [showModal, setShowModal] = useState(false);
  const [lugares, setLugares] = useState([]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

//PETICION DE LA API DE LUGARES EN LA BASE DE DATOS
useEffect(() => {
  axios.get('http://localhost:3001/lugares')
  .then(respuesta =>{
    setLugares(respuesta.data.listaLugares);
  })
  .catch(error => console.error(error));
}, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

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

      <section className="wrapper-grey padded" style={{marginBottom:30}}>
          <div className="container">
            <div className="row">
              <div className="col text-center mb-5">
                <h1 className="display-4 font-weight-bolder" style={{marginTop:30}}>Lugares</h1>
              </div>
            </div>

            {/* PARQUE LAS PALAPAS */}

            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div
                  className="card"
                  style={{
                    background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url("https://i0.wp.com/www.micancun.org/wp-content/uploads/2021/04/Parque-de-Las-Palapas.jpg?resize=735%2C490&ssl=1")`
                  }}
                >
                  <div className="card-description">
                    <h4> Parque las palapas </h4>
                  </div>
                  <button
                    type="button"
                    class="btn btn-light"
                    style={{ marginTop: '10px', boxShadow: '-moz-initial' }}
                    data-bs-toggle="modal"
                    data-bs-target="#parqueLasPalapasModal"
                    onClick={handleOpenModal}
                  >
                    ubicacion
                  </button>
                </div>
              </div>


{/* PLAZA LAS AMERICAS */}

<div className="col-xs-12 col-sm-4">
  <div
    className="card"
    style={{
      background:
        `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url("https://topadventure.com/__export/1664561757364/sites/laverdad/img/2022/09/30/plaza_las_americas_portada.jpg_1092245830.jpg")`
    }}
  >
    <div className="card-description">
      <h2> Plaza las americas </h2>
    </div>
    <button
      type="button"
      class="btn btn-light"
      style={{ marginTop: '10px', boxShadow: '-moz-initial' }}
      data-bs-toggle="modal"
      data-bs-target="#plazaLasAmericasModal"
      onClick={handleOpenModal}
    >
      ubicacion
    </button>
  </div>
</div>


 {/* EL MIRADOR */}

<div className="col-xs-12 col-sm-4">
  <div
    className="card"
    style={{
      background:
        `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url("https://oasisblog.nyc3.cdn.digitaloceanspaces.com/2021/01/cancun-spot.jpg")`
    }}
  >
    <div className="card-description">
      <h2> El Mirador </h2>
    </div>
    <button
      type="button"
      class="btn btn-light"
      style={{ marginTop: '10px', boxShadow: '-moz-initial' }}
      data-bs-toggle="modal"
      data-bs-target="#ElMiradorModal"
      onClick={handleOpenModal}
    >
      ubicacion
    </button>
  </div>
</div>


{/* TORRE EXCARET */}

<div className="col-xs-12 col-sm-4">
  <div
    className="card"
    style={{
      background:
        `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url("https://pbs.twimg.com/media/E-xoX7aXIBAue2T.jpg")`
    }}
  >
    <div className="card-description">
      <h2> Torre excaret </h2>
    </div>
    <button
      type="button"
      class="btn btn-light"
      style={{ marginTop: '10px', boxShadow: '-moz-initial' }}
      data-bs-toggle="modal"
      data-bs-target="#TorreExcaretModal"
      onClick={handleOpenModal}
    >
      ubicacion
    </button>
  </div>
</div>



{/* CANCUN CENTER */}

<div className="col-xs-12 col-sm-4">
  <div
    className="card"
    style={{
      background:
        `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url("https://diariocambio22.mx/wp-content/uploads/2023/05/cnov01-02-8.jpg")`
    }}
  >
    <div className="card-description">
      <h2>CancunCenter </h2>
    </div>
    <button
      type="button"
      class="btn btn-light"
      style={{ marginTop: '10px', boxShadow: '-moz-initial' }}
      data-bs-toggle="modal"
      data-bs-target="#CancunCenterModal"
      onClick={handleOpenModal}
    >
      ubicacion
    </button>
  </div>
</div>


{/* LA ISLA CANCUN */}


<div className="col-xs-12 col-sm-4">
  <div
    className="card"
    style={{
      background:
        `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(" https://lh5.googleusercontent.com/p/AF1QipNU92ZuTgSYYw18g4aNrru0ynHXRzyvxDYuTq3G=w408-h306-k-no")`
    }}
  >
    <div className="card-description">
      <h2>Plaza la Isla  </h2>
    </div>
    <button
      type="button"
      class="btn btn-light"
      style={{ marginTop: '10px', boxShadow: '-moz-initial' }}
      data-bs-toggle="modal"
      data-bs-target="#PlazaLaIslaModal"
      onClick={handleOpenModal}
    >
      ubicacion
    </button>
  </div>
</div>

{/* MAPEO DE LA API*/}

{lugares.map((lugar) => {
  return(
    <div className="col-xs-12 col-sm-4">
  <div
    className="card"
    style={{
      background:
        `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${lugar.imagen})`
    }}
  >
    <div className="card-description">
      <h2>{lugar.lugares}</h2>
    </div>
    <button
      type="button"
      class="btn btn-light"
      style={{ marginTop: '10px', boxShadow: '-moz-initial' }}
      data-bs-toggle="modal"
      data-bs-target="#PlazaLaIslaModal"
      onClick={handleOpenModal}
    >
      ubicacion
    </button>
  </div>
</div>
  )
})}

            </div>
          </div>
        </section>


{/* INFORMACION DE LOS MODAL */}


  {/* PARQUE LAS PALAPAS */}

  <div className="modal fade" id="parqueLasPalapasModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          
          Parque de las Palapas
        </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p style={{ textAlign: 'justify' }}>  Parque de las Palapas es la pequeña Alameda de Cancún, ubicado en el corazón de la ciudad, donde puedes salir a caminar, comer antojitos mexicanos comprar una nieve o un refresco para aliviar el calor, consentirse con una que otra botana típica, adquirir artesanías y ver algún show público de mimos o grupos musicales y en algunas ocasiones hay espectáculos culturales y recreativos.</p>
        
        <ParqueLasPalapas/>
        <div style={{ marginTop: '20px' }}>
          <p style={{ textAlign: 'justify' }}>Dirección: 77500, Tulipanes LB, Cancún, Q.R.</p>
          <p style={{ textAlign: 'justify' }}>Horarios: Abierto 24h, pero el comercio empieza a funcionar de las 9h a las 00h.</p>
        </div>
      </div>
    </div>
  </div>
</div>


{/* PLAZA LAS AMERICAS  */}


<div class="modal fade" id="plazaLasAmericasModal" tabindex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          PlazaLasAmericas
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="modal-body">
      <p style={{ textAlign: 'justify' }}>Las Américas es un centro comercial que  cuenta con multitud de tiendas, desde las tradicionales hasta marcas de lujo de alta gama. Los turistas acuden en masa a lugares como Liverpool, Equinox, Samba y Quick Silver en busca de los artículos más codiciados de la ciudad.</p>
      <PlazaLasAmericas/>
      <div style={{ marginTop: '20px' }}>
            <p style={{ textAlign: 'justify' }}>Direccion:Plaza Las Américas, Av. Tulum Sur Supermanzana 7, 77500 Cancún, Q.R., desde Benito Juárez 77560, Q.R.:</p>
            <p style={{ textAlign: 'justify' }}>Horarios: Abierto de Lunes a Domingos de  10 AM–10 PM.</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>



{/* EL MIRADOR */}


<div class="modal fade" id="ElMiradorModal" tabindex="-3" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          ElMirador
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">


      <div className="modal-body">
      <p style={{ textAlign: 'justify' }}>Letras coloridas con el nombre de Cancún, con un bello mirador hacia Playa Delfines. Consigue esta increíble foto en una de las playas más famosas de México, el acceso es publico por lo que puedes disfrutar de una tarde soleada en el mar.</p>
      <ElMirador/>
      <div style={{ marginTop: '20px' }}>
            <p style={{ textAlign: 'justify' }}>Direccion:Se encuentran justo al inicio de la zona hotelera en la ciudad de Cancún, puedes tomar un transporte publico el cual te puede dejar en Playa Delfines, en la entrada de la playa encontraras estas bonitas letras con una vista al increíble mar. La dirección es Punta Nizuc – Cancún 335, Zona Hotelera, 77500 Cancún, Q.R.</p>
            <p style={{ textAlign: 'justify' }}>Horarios: Abierto de Lunes a Domingos </p>
            </div>
          </div>
      </div>


    </div>
  </div>
</div>

{/* TORRE EXCARET */}


<div class="modal fade" id="TorreExcaretModal" tabindex="-4" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          TorreExcaret
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="modal-body">
      <p style={{ textAlign: 'justify' }}> La Torre Escénica de Cancún ofrece la mejor vista panorámica desde las alturas del principal destino de playa en América Latina. Al girar lentamente, tendrás vistas de 360° de la Zona Hotelera de Cancún y las tonalidades verdes y azul turquesa de la laguna Nichupté y el mar Caribe, respectivamente.</p>
      <TorreExcaret />
      <div style={{ marginTop: '20px' }}>
            <p style={{ textAlign: 'justify' }}>Direccion:Blvd. Kukulcan Km. 4.5, Kukulcan Boulevard, Zona Hotelera, 77500 Cancún, Q.R., Mexico</p>
            <p style={{ textAlign: 'justify' }}>Horarios: Abierto de lunes a Domingo de 9 AM–9 PM </p>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>

{/* CANCUN CENTER */}

<div class="modal fade" id="CancunCenterModal" tabindex="-5" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          CancunCenter
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="modal-body">
      <p style={{ textAlign: 'justify' }}> Cancún Center cuenta con los espacios, servicio y experiencia para que tu boda, xv años, cocteles empresariales, eventos gubernamentales y hasta conciertos sean memorables de principio a fin.</p>
      <  CancunCenter />
      <div style={{ marginTop: '20px' }}>
            <p style={{ textAlign: 'justify' }}>Direccion:Blvd. Kukulcan Km. 9, Punta Cancun, Zona Hotelera, 77500 Cancún, Q.R., Mexico</p>
            <p style={{ textAlign: 'justify' }}>Horarios: Horarios: Abierto de lunes a Domingo de 9 AM–6 PM</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>

{/* PLAZA LA ISLA */}

<div class="modal fade" id="PlazaLaIslaModal" tabindex="-6" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          PlazaLaIsla
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="modal-body">
      <p style={{ textAlign: 'justify' }}>Plaza la isla es el centro comercial mas visitado en la Zona Hotelera de Cancún.
Esta plaza comercial deslumbra a los visitantes por su estilo arquitectónico de villita ademas que se encuentra ubicada en la Laguna Nichupte.</p>
      < PlazaLaIsla/>
      <div style={{ marginTop: '20px' }}>
            <p style={{ textAlign: 'justify' }}>Direccion:Island 2, Blvd. Kukulcan Mz 52, La Isla, Zona Hotelera, 77500 Cancún, Q.R., Mexico</p>
            <p style={{ textAlign: 'justify' }}>Horarios: Abierto de Lunes a Domingos de  9 AM–10 PM.</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>

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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
          <Button variant="primary">Iniciar sesión</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Lugares;
