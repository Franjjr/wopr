import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import Logo from "../../img/Logo.png";
import { BtnLogin } from "./BtnLogin.jsx";


export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return !store.isLogin ?
    <div className="navbar">
      <div className="logo">
        <img className="logo" src={Logo} />
      </div>
      <div className="navigation-menu">
        {/* <div className="button" onClick={onButtonContainerClick}>
          <img className="arrowright-icon" alt="" src="/arrowright.svg" />
          <div className="label">How it works</div>
        </div> */}
        {/* <div className="button1" onClick={onButtonContainer1Click}>
          <img className="arrowright-icon1" alt="" src="/arrowright.svg" />
          <div className="label1">Menu 2</div>
        </div> */}
        <Link className="button2" to="/">
          <img className="arrowright-icon2" alt="" src="/arrowright.svg" />
          <div className="label2">Contacto</div>
        </Link>
        <div className="highlighted-ctas">
          <Link className="button3" to="/register">
            <img className="arrowright-icon3" alt="" src="/arrowright.svg" />
            <div className="label3">Crear cuenta</div>
          </Link>
          <BtnLogin />
        </div>
      </div>
    </div>


    :

    <div id="content-wrapper" className="d-flex flex-column">

      {/* <!-- Main Content --> */}
      <div id="content">
        {/*<!-- Topbar --> */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <div className="logo">
          <img className="logo" src={Logo} />
        </div>
          {/*  <!-- Sidebar Toggle (Topbar) -->*/}
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
          </button>

          {/*  <!-- Topbar Search --> */}
          {/* <form
            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                aria-label="Search" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form> */}
          {/* <!-- Topbar Navbar --> */}
          <ul className="navbar-nav ml-auto">

            <div className="topbar-divider d-none d-sm-block"></div>

            {/*<!-- Nav Item - User Information --> */}
            <li className="nav-item dropdown no-arrow">
              <Link className="nav-link dropdown-toggle" to="/recipes" id="userDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{"Nombre de Usuario"}</span>
                <img className="img-profile rounded-circle"
                  src="img/undraw_profile.svg" />
              </Link>
              {/*  <!-- Dropdown - User Information -->*/}
              <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown">
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#logoutModal">
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </Link>
              </div>
            </li>

          </ul>
        </nav>
        {/*  <!-- End of Topbar -->*/}
      </div>
      {/*<!-- End of Main Content --> */}
    </div>

}
