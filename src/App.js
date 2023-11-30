import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/lugares.css';
import './css/noticias.css'
import'./css/login.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter, Routes y Route
import Lugares from './page/lugares';
import Home from './components/home';
import WeatherInfo from './components/clima';
import LoginForm from './components/login';
import Informacion from './page/Informacion';
import Login from './page/login';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/lugares" element={<Lugares />} />
        <Route path="/clima" element={<WeatherInfo />} />
        <Route path="/" element={<LoginForm />} />
        <Route path='/informacion' element={<Informacion/>} />
        <Route path='/login1' element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;