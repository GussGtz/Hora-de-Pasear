import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '../css/home.css';
import '../css/noticias.css'

const Informacion = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; 
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const [searchDate, setSearchDate] = useState("");

   //noticia
   const [articles, setArticles] = useState([]);
   const apiKey = '870bd45533764712b6c6a146e03497f2';
  

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

 
  

  const handleDateChange = (event) => {
    setSearchDate(event.target.value);
  };
  
  const filteredArticles = articles.filter((article) => {
    const articleDate = article.publishedAt.split("T")[0];
    return articleDate.includes(searchDate);
  });
  

//noticia
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=Cancún&apiKey=${apiKey}&language=es`
      );

      if (!response.ok) {
        throw new Error('Error al obtener noticias');
      }

      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error('Error al obtener noticias', error);
    }
  };

  fetchData();
}, [apiKey]);

if (articles.length === 0) {
  return <div>Cargando noticias sobre Cancún...</div>;
}
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
                src={user.foto}
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

            {/* parte de noticias */}
            <div className='noticias'>
        <h1 className="display-4 font-weight-bolder" style={{textAlign:'center', marginTop:30, marginBottom:30}}>Noticias</h1>
        <input
      type="text"
      placeholder="Buscar por fecha (YYYY-MM-DD)"
      className='input_noticia shadow-drop-center'
      value={searchDate}
      onChange={handleDateChange}
      style={{marginLeft:0}}
    />
    {filteredArticles.length === 0 && searchDate && (
      <>
      <p style={{textAlign:'center', fontSize:'30px'}}>No hay noticias para la fecha seleccionada.</p>
      <img className="logo" src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo" style={{width:'30%', height: '40%', marginBottom:30}}/>
</>
    )}
      {filteredArticles.slice(startIndex, endIndex).map((article, index) => (
        <div key={index} className='card_noticia shadow-drop-2-center'>
        <h1 style={{textAlign:'center', paddingTop:20}} contenteditable className='h1'>{article.title}</h1>
        <p style={{marginLeft:30}}>{article.publishedAt}</p>
        <div style={{display:'flex'}}>
        <div>
        <p style={{marginLeft:30, marginTop:30, fontSize:20}}>{article.description}</p>
        <div style={{backgroundColor: '#0080809b', height:30, paddingTop:2, borderRadius:5, marginLeft: 30, width:100, marginBottom:30}}>
        <Link to={article.url} style={{marginLeft:0, color:'black', textDecoration:'none'}}>ver más</Link>
        </div>
        </div>
        <div className='conte_noticia'>
          <img src={article.urlToImage} className='img_noticia'/>
        </div>
        </div>
      </div>
      ))}
      
      </div>
      <div style={{textAlign: 'center', marginBottom:30}}>
  <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} style={{color:'black'}}>
    Anterior
  </button>
  {Array.from({ length: Math.ceil(articles.length / pageSize) }, (_, i) => (
    <button key={i} onClick={() => setCurrentPage(i + 1)} disabled={currentPage === i + 1} style={{color:'black'}}>
      {i + 1}
    </button>
  ))}
  <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(articles.length / pageSize)} style={{color:'black'}}>
    Siguiente
  </button>
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

export default Informacion;
