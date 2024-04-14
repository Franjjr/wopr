import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { BtnLogin } from "../component/BtnLogin.jsx";
import { BtnRegister } from "../component/BtnRegister.jsx";
import irene from "../../img/irene.jpg";
import fran from "../../img/fran.jpg";
import mercedes from "../../img/mercedes.jpg";
import imglanding from "../../img/imglanding.jpg";
import matteo from "../../img/metteo.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container text-center ">
        <div className="row shadow p-3 mb-2 bg-body-tertiary rounded justify-content-center">
          <div className="col-lg-4 text-start mt-5 "><h1 className="fw-bold">
            Gestiona el stock de tu restaurante de forma fácil
            <small className="text-body-secondary"></small></h1><h5 className="mb-4"> ¡Olvídate de contar croquetas! Comparte el stock con la comunidad
              y siente el apoyo de otros restaurantes y bares.</h5><BtnRegister /><BtnLogin /></div>
          <div className="col-md-5"><div><img src={imglanding} className="rounded-circle shadow" width="400" height="400" alt="..." /></div>
          </div>
        </div>
      </div>


      <div className="container text-center">
        <div className="row shadow p-3 mb-2 bg-tertiary justify-content-center">
          <h3 className="fw-light">Algunos de nuestros Clientes!</h3>
          <div id="carouselExample" className="col-4 carousel carousel-dark slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://www.telefonogratis.net/wp-content/uploads/2021/07/telefono-atencion-fosters-hollywood.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://www.thader.net/wp-content/uploads/2023/06/LOGO.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://www.saborgranada.es/wp-content/uploads/2016/11/logo-40.jpg" className="" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://www.distribucionactualidad.com/wp-content/uploads/2019/11/LOGO-POPEYE-300x213.jpg" className="" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://console.listae.com/files/2014/12/la_tagliatella_logo.jpg" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://tse2.mm.bing.net/th?id=OIP.KNR60-Ax0mwVxa03LTCOFwHaCI&pid=Api&P=0&h=180" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>


      </div>
      <div className="container text-center">
        <div className="row shadow p-3 mb-5 bg-body-tertiary justify-content-center">
          <h3 className="fw-light text-center"> Conoce a nuestro equipo de desarrolladores!</h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 my-3 justify-content-evenly">

            <div className="p-2 col m-auto">
              <img src={irene} className="rounded-circle shadow img-thumbnail" alt="..." />
              <p className="fw-bold mt-2">IRENE VÁZQUEZ</p>
              <a href="https://github.com/iireneVS"target="_blank"><i className="fa-brands fa-github fs-3 mr-2"></i></a>
              <a href="https://www.linkedin.com/in/irene-vazquez-sanchez-727a662a2/"target="_blank"><i className="fa-brands fa-linkedin fs-3 "></i></a>
            </div>


            <div className="p-2 col m-auto">
              <img src={fran} className="rounded-circle shadow img-thumbnail" alt="..." />
              <p className="fw-bold mt-2">FRAN JULIAN </p>
              <a href="https://github.com/Franjjr"target="_blank"><i className="fa-brands fa-github fs-3 mr-2"></i></a>
              <a href="https://www.linkedin.com/in/fran-julian-1b150921/"target="_blank"><i className="fa-brands fa-linkedin fs-3 "></i></a>
            </div>

            <div className="p-2 col m-auto">
              <img src={matteo} className="rounded-circle shadow img-thumbnail" alt="..." />
              <p className="fw-bold mt-2">MATTEO SCILLERI </p>
              <a href="https://github.com/Matteo0310"target="_blank"><i className="fa-brands fa-github fs-3 mr-2"></i></a>
              <a href="https://www.linkedin.com/in/matteo-scilleri-b565a117a/"target="_blank"><i className="fa-brands fa-linkedin fs-3 "></i></a>
            </div>

            <div className="p-2 col m-auto">
              <img src={mercedes} className="rounded-circle shadow img-thumbnail" alt="..." />
              <p className="fw-bold mt-2">MERCEDES SANCHEZ</p>
              <a href="https://github.com/Mercedes0708"target="_blank"> <i className="fa-brands fa-github fs-3 mr-2"></i></a>
              <a href="https://www.linkedin.com/in/mercedes-s%C3%A1nchez-pe%C3%B1a-32625821a/"target="_blank"><i className="fa-brands fa-linkedin fs-3 "></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
