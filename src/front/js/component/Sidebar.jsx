import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  
  return (
    <ul className="navbar-nav bg-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/*<!-- Sidebar - Brand -->*/}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon">
            <img className="logoTipoSidebar" src={LogoSidebar} />
            </div>
        </a>

        {/* <!-- Divider -->*/}
        <hr className="sidebar-divider my-0"></hr>

        {/*<!-- Nav Item - Dashboard -- */}
        <li className="nav-item">
            <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>

        {/* <!-- Divider -->  */}
        <hr className="sidebar-divider"></hr>

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
            Interface
        </div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-file"></i>
                <span>Views</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                <Link to="/recipes">
                    <a className="collapse-item" href="buttons.html">Recipes </a>
                </Link>
                <Link to="/suppliers">
                    <a className="collapse-item" href="cards.html">Suppliers </a>
                </Link>
                <Link to="/previsions">
                    <a className="collapse-item" href="cards.html">Previsions </a>
                </Link>
                <Link to="/delivery-notes">
                    <a className="collapse-item" href="cards.html">Delivery Notes </a>
                </Link>
                <Link to="/manufacturing-orders">
                    <a className="collapse-item" href="cards.html">Manufactoring Orders </a>
                </Link>
                <Link to="/references">
                    <a className="collapse-item" href="cards.html">References </a>
                </Link>
                
                </div>
            </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu -->  */}
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-wrench"></i>
                <span>Profile</span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Rol:</h6>
                    <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profile
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Settings
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                Activity Log
                            </a>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </a>
                </div>
            </div>
        </li>

        {/*  <!-- Divider --> */}
        <hr className="sidebar-divider"></hr>

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
            Addons
        </div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item active">
            <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true"
                aria-controls="collapsePages">
                <i className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
            </a>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages"
                data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Login Screens:</h6>
                    <a className="collapse-item" href="login.html">Login</a>
                    <a className="collapse-item" href="register.html">Register</a>
                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                    <div className="collapse-divider"></div>
                    <h6 className="collapse-header">Other Pages:</h6>
                    <a className="collapse-item" href="404.html">404 Page</a>
                    <a className="collapse-item active" href="blank.html">Blank Page</a>
                </div>
            </div>
        </li>

        {/*  <!-- Nav Item - Charts -->  */}
        <li className="nav-item">
            <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span></a>
        </li>

        {/*<!-- Nav Item - Tables -->  */}
        <li className="nav-item">
            <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span></a>
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
