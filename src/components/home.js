import React from 'react';
import '../App.css';

function Home() {
  return (
    <div className="container">
      <header>
        <h1>HORA DE PASEAR</h1>
        <button>Login</button>
      </header>

      <nav>
        <button>Inicio</button>
        <button>Clima</button>
        <button>Lugares</button>
        <button>Información</button>
      </nav>

      <section className="main-content">
        <p>The point of using Lorem Ipsum...</p>
        <img src="url_de_tu_imagen_principal" alt="Imagen Principal"/>
      </section>

      <section className="circle-section">
        <div>
          <img src="url_de_tu_imagen_clima" alt="Clima"/>
          <p>CLIMA</p>
        </div>
        <div>
          <img src="url_de_tu_imagen_lugares" alt="Lugares"/>
          <p>LUGARES</p>
        </div>
        <div>
          <img src="url_de_tu_imagen_informacion" alt="Información"/>
          <p>Información</p>
        </div>
      </section>

      <footer>
        <img src="url_del_logo" alt="Logo" width="50" />
        <p>© DERECHOS RESERVADOS...</p>
      </footer>
    </div>
  );
}

export default Home;
