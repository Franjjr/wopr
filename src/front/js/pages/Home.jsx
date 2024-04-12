import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Logo from "../../img/Logo.png";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);
  
    return (
        <>
        <div className="container-fluid d-inline text-center">
    <div className="row shadow p-3 mb-2 bg-body-tertiary rounded justify-content-center">
      <div className="col-lg-4 text-start mt-5 "><h1 className="fw-bold">
        Gestiona el stock de tu restaurante de forma fácil
        <small className="text-body-secondary"></small></h1><h5> ¡Olvídate de contar croquetas! Comparte el stock con la comunidad
              y siente el apoyo de otros restaurantes y bares.</h5></div>
      <div className="col-md-5"><div><img src="http://www.qrquestion.info/wp-content/uploads/2015/07/restaurant-646678_1920.jpg" className="rounded-circle shadow" width="400" height="400" alt="..."/></div>
    </div>
    </div>
    </div>


    <div className="container-fluid d-inline text-center">
    <div className="row shadow p-3 mb-2 bg-tertiary justify-content-center">
      <h3 className="fw-light">Algunos de nuestros Clientes!</h3>
    <div id="carouselExample" className="col-4 carousel carousel-dark slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.telefonogratis.net/wp-content/uploads/2021/07/telefono-atencion-fosters-hollywood.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.thader.net/wp-content/uploads/2023/06/LOGO.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.saborgranada.es/wp-content/uploads/2016/11/logo-40.jpg" className="" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.distribucionactualidad.com/wp-content/uploads/2019/11/LOGO-POPEYE-300x213.jpg" className="" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://console.listae.com/files/2014/12/la_tagliatella_logo.jpg" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://tse2.mm.bing.net/th?id=OIP.KNR60-Ax0mwVxa03LTCOFwHaCI&pid=Api&P=0&h=180" className="d-block w-100" alt="..."/>
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
    <div className="container-fluid d-inline text-center" >
    <div className="row shadow p-3 mb-5 bg-body-tertiary rounded justify-content-center">
     <h3 className="fw-light"> Conoce a nuestro equipo de desarrolladores!</h3>
     <div className="d-flex flex-row mb-3 mt-3 justify-content-evenly">
  <div className="p-2 col-xl-3"> 
  <img src="https://media.licdn.com/dms/image/D4D03AQGYlnzTkwWMww/profile-displayphoto-shrink_400_400/0/1708935778229?e=1718236800&v=beta&t=i6vIckY5pI4jaIN-TtvFqVEkTsvPVT1h2fykJaZlxEU" className="rounded-circle shadow" width="200" height="200" alt="..."/>
   <p className="fw-bold mt-2">IRENE VASQUEZ</p>
   <a href="https://github.com/iireneVS"><i className="fa-brands fa-github fs-3 mr-2"></i></a>
   <a href="https://www.linkedin.com/in/irene-vazquez-sanchez-727a662a2/"><i className="fa-brands fa-linkedin fs-3 "></i></a>
  </div>
  
  
  <div className="p-2 col-xl-3">
    <img src="https://media.licdn.com/dms/image/D4D03AQEMk4b_G7ocNQ/profile-displayphoto-shrink_400_400/0/1712937366963?e=1718236800&v=beta&t=s1nyqIEvlimabZ0cvIHjvMkOF_Gm3EUTkQWKxm3te1Q" className="rounded-circle shadow" width="200" height="200" alt="..."/>
    <p className="fw-bold mt-2">FRAN JULIAN </p>
    <a href=""><i className="fa-brands fa-github fs-3 mr-2"></i></a>
    <a href="https://www.linkedin.com/in/fran-julian-1b150921/"><i className="fa-brands fa-linkedin fs-3 "></i></a>
    </div>

  <div className="p-2 col-xl-3">
    <img src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg" className="rounded-circle shadow" width="200" height="200" alt="..."/>
    <p className="fw-bold mt-2">MATTEO SCILLERI </p>
    <a href="https://github.com/Matteo0310"><i className="fa-brands fa-github fs-3 mr-2"></i></a>
    <a href="https://www.linkedin.com/in/matteo-scilleri-b565a117a/"><i className="fa-brands fa-linkedin fs-3 "></i></a>
    </div>

  <div className="p-2 col-xl-3">
    <img src="https://avatars.githubusercontent.com/u/144907375?v=4" className="rounded-circle shadow" width="200" height="200" alt="..."/>
    <p className="fw-bold mt-2">MERCEDES SANCHEZ</p>
    <a href="https://github.com/Mercedes0708"> <i className="fa-brands fa-github fs-3 mr-2"></i></a>
    <a href= "https://www.linkedin.com/in/mercedes-s%C3%A1nchez-pe%C3%B1a-32625821a/"><i className="fa-brands fa-linkedin fs-3 "></i></a>
  </div>
</div>
    </div>
    </div>
    </>
    );
};
