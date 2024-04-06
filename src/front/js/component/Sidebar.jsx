import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <ul className="navbar-nav bg-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <hr className="sidebar-divider"></hr>
        <div className="sidebar-heading">Menu</div>
        {/* Pages */}
        <li className="nav-item">
            <Link className="nav-link" to="/recipes">
                <i className="fas fa-fw fa-chart-area"></i><span>Recetas</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/suppliers">
            <i className="fa-solid fa-truck-field"></i><span>Proveedores</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/previsions">
                <i className="fas fa-fw fa-table"></i><span>Previsiones</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/delivery-notes">
                <i className="fas fa-fw fa-folder"></i><span>Ordenes de Compra</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/manufacturing-orders">
                <i className="fas fa-fw fa-wrench"></i><span>Ordenes de Fabricacion</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/references">
                <i className="fas fa-fw fa-file"></i><span>Referencias</span>
            </Link>
        </li>
        {/* <!-- Divider -->  */}
        <hr className="sidebar-divider d-none d-md-block"></hr>
        {/*  <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
    </ul>
  );
};
