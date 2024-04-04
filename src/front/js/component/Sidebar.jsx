import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/index.css";

export const Sidebar = () => {
  return (
    <div id="page-top">


<div id="wrapper">
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <li className="nav-item">
            <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>


        <hr className="sidebar-divider"></hr>

        <div className="sidebar-heading">
            Interfaz
        </div>

        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-file"></i>
                <span>Menù</span>
            </a>
            <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                <Link to="/recipes">
                    <a className="collapse-item" href="buttons.html">Recetas </a>
                </Link>
                <Link to="/suppliers">
                    <a className="collapse-item" href="cards.html">Provedores </a>
                </Link>
                <Link to="/previsions">
                    <a className="collapse-item" href="cards.html">Previsiones </a>
                </Link>
                <Link to="/delivery-notes">
                    <a className="collapse-item" href="cards.html">Albaranes </a>
                </Link>
                <Link to="/manufacturing-orders">
                    <a className="collapse-item" href="cards.html">Ordenes de fabricación </a>
                </Link>
                <Link to="/references">
                    <a className="collapse-item" href="cards.html">Referencias </a>
                </Link>
                
                </div>
            </div>
        </li>
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fa-solid fa-user"></i>
                <span>Perfil</span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Rol:</h6>
                    <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Ver Perfil
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Ajustes
                            </a>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Salir
                            </a>
                </div>
            </div>
        </li>
        <hr className="sidebar-divider"></hr>

        <div className="sidebar-heading">
            Dar de alta 
        </div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages">
                <i className="fas fa-fw fa-folder"></i>
                <span>Altas</span>
            </a>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages"
                data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <a className="collapse-item" href="login.html">Recetas</a>
                    <a className="collapse-item" href="login.html">Provedores</a>
                    <a className="collapse-item" href="register.html">Albaranes</a>
                    <a className="collapse-item" href="forgot-password.html">Ordenes de fabricación</a>
                </div>
            </div>
        </li>
        <hr className="sidebar-divider d-none d-md-block"></hr>
    </ul>
    </div>
    </div>
  );
};
