import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';
import '../css/noticias.css'
import '../App.css'; 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';




const Informacion = () => {

  //noticia
  const [articles, setArticles] = useState([]);
  const apiKey = '870bd45533764712b6c6a146e03497f2';
 
  // usuario
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  

  useEffect(() => {
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
        setUser({
          userId: data.user.userId,
          email: data.user.email,
          displayName: data.user.displayName || 'Usuario',
        });

        navigate('/home'); // Puedes redirigir a la página principal o donde desees
      } else {
        console.error('Error al iniciar sesión:', data.message);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };



  const [show, setShow] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Puedes ajustar este número según tus preferencias
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const [searchDate, setSearchDate] = useState("");

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
        <Link to={'/informacion'}>
        <button class="destacado" className="btn btn-outline-success mx-2">Noticias</button>
        </Link>
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
    />
    {filteredArticles.length === 0 && searchDate && (
      <>
      <p style={{textAlign:'center', fontSize:'30px'}}>No hay noticias para la fecha seleccionada.</p>
      <div id="container">
  <div id="susuwatari">
    <div id="star">
      <div className="star-part" id="star-part1" />
      <div className="star-part" id="star-part2" />
    </div>
    <div id="body">
      <div className="hair" id="hair-horizontal" />
      <div className="hair" id="hair-horizontal-15" />
      <div className="hair" id="hair-horizontal-30" />
      <div className="hair" id="hair-horizontal-45" />
      <div className="hair" id="hair-horizontal-60" />
      <div className="hair" id="hair-horizontal-75" />
      <div className="hair" id="hair-vertical" />
      <div className="hair" id="hair-vertical-15" />
      <div className="hair" id="hair-vertical-30" />
      <div className="hair" id="hair-vertical-45" />
      <div className="hair" id="hair-vertical-60" />
      <div className="hair" id="hair-vertical-75" />
      <div className="eye" id="eye-left">
        <div className="black-eye" id="left-black-eye" />
      </div>
      <div className="eye" id="eye-right">
        <div className="black-eye" id="right-black-eye" />
      </div>
    </div>
    <div id="arms"></div>
    <div id="legs">
      <div id="legs-bottom" />
      <div id="foot-left">
        <div className="finger" id="finger-left1" />
        <div className="finger" id="finger-left2" />
        <div className="finger" id="finger-left3" />
      </div>
      <div id="foot-right">
        <div className="finger" id="finger-right1" />
        <div className="finger" id="finger-right2" />
        <div className="finger" id="finger-right3" />
      </div>
    </div>
  </div>
</div>
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
        <Link to={article.url} style={{marginLeft:20, color:'black', textDecoration:'none'}}>ver más</Link>
        </div>
        </div>
        <div className='conte_noticia'>
          <img src={article.urlToImage} className='img_noticia'/>
        </div>
        </div>
      </div>
      ))}
      
      </div>
      <div style={{textAlign: 'center'}}>
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
      

      

      

      <footer className="weather-footer">
        <img className="footer-logo" src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo"/>
        <p>© Hora De Pasear</p>
      </footer>
    </div>
  );
};

export default Informacion;
