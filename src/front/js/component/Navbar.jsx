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
      return <i className="fa-solid fa-user-tie"></i>;
    } else if (rol == "Jefe de Compras") {
      return <i className="fa-solid fa-user-pen"></i>;
    } else if (rol == "Cocinero") {
      return <i className="fa-solid fa-spoon"></i>;
    }
  };

  return !store.isLogin ?
    <div className="navbar">
      {/* Menu Principal sin Logeo */}
      <div className="logo mt-4 mr-12" >
        <img className="logo" src={Logo} />
      </div>
      <div className="navigation-menu">
        <BtnContact />
        <div className="highlighted-ctas">
          <BtnRegister />
          <BtnLogin />
        </div>
      </div>
    </div>

    :

    <div id="content-wrapper" className="d-flex flex-column">
      {/* Menu Principal sin Logeo */}
      <div id="content">
        {/*<!-- Topbar --> */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar static-top shadow">
          <div className="logo">
            <img className="logo" src={Logo} />
          </div>
          {/*  <!-- Sidebar Toggle (Topbar) -->*/}
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa-bars"></i>
          </button>

          {/*  <!-- Topbar Search --> */}

          {/* <!-- Topbar Navbar --> */}
          <ul className="navbar-nav ml-auto">

            {/*<!-- Nav Item - User Information --> */}
            <li className="nav-item dropdown no-arrow">
              <Link className="nav-link dropdown-toggle" to="/dashboard" id="userDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{store.name}</span>
                {icon()}
              </Link>

              {/*  <!-- Dropdown - User Information -->*/}
              <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Perfil
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Configuracion
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#logoutModal">
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </Link>
              </div>
            </li>
            <div className="topbar-divider d-none d-sm-block"></div>

            <li className="nav-item dropdown no-arrow">
              <Link className="nav-link dropdown-toggle" to="#" data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        {/*  <!-- End of Topbar -->*/}
      </div>
      {/*<!-- End of Main Content --> */}
    </div>

}
