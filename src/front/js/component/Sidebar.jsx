import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (

    <ul className="navbar-nav bg-primary sidebar sidebar-dark accordion">
        <hr className="sidebar-divider"></hr>
        <div className="sidebar-heading">Menu</div>
        {/* Pages */}
        <li className="nav-item">
            <Link className="nav-link" to="/recipes">
                <i className="fa-solid fa-plate-wheat"></i><span>Recetas</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/suppliers">
                <i className="fa-solid fa-truck-field"></i><span>Proveedores</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/previsions">
                <i className="fa-regular fa-clipboard"></i><span>Previsiones</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/delivery-notes">
                <i className="fa-solid fa-file-invoice-dollar"></i><span>Ordenes de Compra</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/manufacturing-orders">
                <i className="fa-regular fa-paper-plane"></i><span>Ordenes de Fabricacion</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/references">
                <i className="fas fa-fw fa-file"></i><span>Referencias</span>
            </Link>
        </li>
        {/* <!-- Divider -->  */}
        <hr className="sidebar-divider"></hr>
    </ul>

  );
};
