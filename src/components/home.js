import React from 'react';
import '../App.css';

function Home() {
  return (
    <div className="container">
      <header>
      <div className="contenedor">
  <img className="logo" src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo" width="50"/>
  <h1>Hora De Pasear</h1>
</div>

        <button>Login</button>
      </header>

      <nav>
        <button>Inicio</button>
        <button>Clima</button>
        <button>Lugares</button>
        <button>Información</button>
      </nav>

      <section className="main-content">
        <h1>¡Bienvenidos a "Hora de Pasear", tu compañero de viajes definitivo!</h1>
        <img src="https://a4adc62bfbeb9287c6cc-44a9442b068bb36d5792597640a019e7.ssl.cf1.rackcdn.com/u/_destination/xpm/riviera-maya-resort-sunrise.jpg" alt=""/>
      </section>

      <section className="circle-section">
        <div>
          <img src="https://images.vexels.com/media/users/3/205087/isolated/preview/a41d84a485d960a7d929fd95ece1acf1-icono-de-trazo-de-clima.png" alt="Clima"/>
          <p>CLIMA</p>
        </div>
        <div>
          <img src="https://cdn.icon-icons.com/icons2/3436/PNG/512/place_pin_location_icon_218869.png" alt="Lugares"/>
          <p>LUGARES</p>
        </div>
        <div>
          <img src="https://i.pinimg.com/originals/9f/e1/e9/9fe1e9fea47e51c7a6f06a2c47aeaec7.png" alt="Información"/>
          <p>Información</p>
        </div>
      </section>

      <footer>
        <img src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo" width="50" />
        <p>© Hora De Pasear</p>
      </footer>
    </div>
  );
}

export default Home;
