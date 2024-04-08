import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Logo from "../../img/Logo.png";
import "../../styles/landingpage.css";
// Componentes
import { BtnLogin } from "./BtnLogin.jsx";
import { BtnRegister } from "./BtnRegister.jsx";
import { BtnContact } from "./BtnContact.jsx";


export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const rol = store.rol
  const icon = () => {
    if (rol == "Admin") {
      return <i className="fa-solid fa-user-tie fa-sm fa-fw mr-2 text-gray-400"></i>;
    } else if (rol == "Jefe de Compras") {
      return <i className="fa-solid fa-user-pen fa-sm fa-fw mr-2 text-gray-400"></i>;
    } else if (rol == "Cocinero") {
      return <i className="fa-solid fa-spoon fa-sm fa-fw mr-2 text-gray-400"></i>;
    }
  };


  return !store.isLogin ?
    <div className="navbar">
      {/* Menu Principal sin Logeo */}
      <div className="logo mt-0" >
        <img className="logotipo" src={Logo} />
      </div>
      <div className="navigation-menu">
        <div className="highlighted-ctas">
          <BtnContact />
          <BtnRegister />
          <BtnLogin />
        </div>
      </div>
    </div>

    :

    <nav className="navbar navbar-expand navbar-light bg-white">
      <div className="container-fluid d-flex justify-beetween">
        <div className="logo mt-0">
          <img className="logo" src={Logo} />
        </div>
        
        <div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                {icon()}
                <span className="me-2 text-gray-600 small">{store.name}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                <span className="mr-2 text-gray-600 small">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
}
