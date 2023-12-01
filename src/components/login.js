import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


const backgroundUrl = 'https://media.nomadicmatt.com/2022/iscancunsafe.jpeg';


const slideInAnimation = `
@keyframes slideIn {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
`;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: `url(${backgroundUrl}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  },
  card: {
    width: '300px',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    animation: 'slideIn 0.5s ease-out forwards'
  },
  title: {
    margin: '0 0 20px 0',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // Procesamiento del resultado
        navigate('/home'); // Redireccionamiento
      })
      .catch((error) => {
        setError(error.message); // Manejo de errores
      });
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8083/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('userName', data.user.displayName); 
        navigate('/MedicationChart');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al iniciar sesión');
    }
  };

  return (
    <div style={styles.container}>
      {/* Aplicar la animación aquí */}
      <style>{slideInAnimation}</style>
      <div style={styles.card}>
        <h1 style={styles.title}>HORA DE PASEAR</h1>
        <div style={{ marginBottom: '20px' }}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" 
            alt="Icono de paseo" 
            width="50" 
          />
        </div>
        <p>Ingresa con tu cuenta de:</p>
        <img
          src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png"
          alt="Ingresar con Google"
          onClick={handleGoogleSignIn}
          style={{
            cursor: 'pointer',
            borderRadius: '10%',
            width: '140px',
            height: '80px',
            marginRight: '10px',
          }}
        />
        {error && <p style={styles.errorText}>{error}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
