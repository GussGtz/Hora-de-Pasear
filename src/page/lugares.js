import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ParqueLasPalapas from '../ApiUbicaciones/ParqueLasPalapas';
import PlazaLasAmericas from '../ApiUbicaciones/PlazaLasAmericas';
import ElMirador from '../ApiUbicaciones/Mirador'
import TorreExcaret from '../ApiUbicaciones/TorreExcaret'
import CancunCenter from '../ApiUbicaciones/CancunCenter'
import PlazaLaIsla from '../ApiUbicaciones/PlazalaIsla'



function Lugares() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };



  return (
    <>
      <div className="container-fluid bg-light p-3 p-md-5 rounded">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <img className="logo mr-3" src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo" width="50" />
            <h1 className="font-weight-bold">Hora De Pasear</h1>
          </div>
          <button className="btn btn-success">
            <FontAwesomeIcon className="mr-2" />
            Login
          </button>
        </header>

        <nav className="d-flex justify-content-around mb-4">
          <button class="destacado" className="btn btn-outline-success mx-2">Inicio</button>
          <button class="destacado" className="btn btn-outline-success mx-2">Clima</button>
          <button class="destacado" className="btn btn-outline-success mx-2">Lugares</button>
          <button class="destacado" className="btn btn-outline-success mx-2">Información</button>
        </nav>

        <section className="wrapper-grey padded">
          <div className="container">
            <div className="row">
              <div className="col text-center mb-5">
                <h1 className="display-4 font-weight-bolder">Lugares</h1>
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




            </div>
          </div>
        </section>


               {/* INFORMACION DE LOS MODAL */}


  {/* PARQUE LAS PALAPAS */}

<div class="modal fade" id="parqueLasPalapasModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p> ESTE ES UN LUGAR PARA PAZAR UNA BUENA TARDE </p>
        <ParqueLasPalapas/>
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
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p> ESTE ES EL MEJOR LUGAR PARA COMPRAR  </p>
        <PlazaLasAmericas/>
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
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p> ESTE ES EL MEJOR LUGAR PARA TOMARSE FOTOS  </p>
        <ElMirador/>
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
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p> EL MEJOR LUGAR PARA TOMARSE FOTOS  </p>
      <TorreExcaret/>
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
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>  FOTOS  </p>
      <CancunCenter/>
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
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p> PLAZA LA ISLA </p>
      <PlazaLaIsla/>
      </div>
    </div>
  </div>
</div>






        <footer className="text-center bg-success text-white p-3">
          <img src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo" width="50" />
          <p className="mt-2 mb-0">© Hora De Pasear</p>
        </footer>
      </div>
    </>
  );
}

export default Lugares;
