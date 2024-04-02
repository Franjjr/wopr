
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { Link } from "react-router-dom";
import LogoSidebar from "../../img/LogoSidebar.png";

export function Suppliers() {
  const { store, actions } = useContext(Context);
  const [supplier, setSupplier] = useState([]);
  const base_url = "https://ominous-spoon-pjrrxgvv64p726gqw-3001.app.github.dev/admin/suppliers/";

  const getSuppliers = async () => {
    const url = base_url + "2"
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      console.log('Error', response.status, response.statusText);
      return response.status;
    }
    const data = await response.json();
    setSupplier(data);
  }

    return (
        <div id="page-top">


<div id="wrapper">

{/* Sidebar */}
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

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
    {/* <!-- End of Sidebar --> */}

    {/*  <!-- Content Wrapper --> */}
    <div id="content-wrapper" className="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

            {/*<!-- Topbar --> */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/*  <!-- Sidebar Toggle (Topbar) -->*/}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>

                {/*  <!-- Topbar Search --> */}
                <form
                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form>

                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">

                    {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw"></i>
                        </a>
                        {/* <!-- Dropdown - Messages -->*/}
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    {/* <!-- Nav Item - Alerts --> */}
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bell fa-fw"></i>
                           {/* <!-- Counter - Alerts --> */}
                            <span className="badge badge-danger badge-counter">3+</span>
                        </a>
                        {/*<!-- Dropdown - Alerts --> */}
                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="alertsDropdown">
                            <h6 className="dropdown-header">
                                Alerts Center
                            </h6>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-primary">
                                        <i className="fas fa-file-alt text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 12, 2019</div>
                                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-success">
                                        <i className="fas fa-donate text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 7, 2019</div>
                                    $290.29 has been deposited into your account!
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-warning">
                                        <i className="fas fa-exclamation-triangle text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 2, 2019</div>
                                    Spending Alert: We've noticed unusually high spending for your account.
                                </div>
                            </a>
                            <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                        </div>
                    </li>

                    {/*<!-- Nav Item - Messages --> */}
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-envelope fa-fw"></i>
                            {/*<!-- Counter - Messages --> */}
                            <span className="badge badge-danger badge-counter">7</span>
                        </a>
                        {/*<!-- Dropdown - Messages --> */}
                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="messagesDropdown">
                            <h6 className="dropdown-header">
                                Message Center
                            </h6>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                        alt="..."/>
                                    <div className="status-indicator bg-success"></div>
                                </div>
                                <div className="font-weight-bold">
                                    <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                        problem I've been having.</div>
                                    <div className="small text-gray-500">Emily Fowler · 58m</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                        alt="..."/>
                                    <div className="status-indicator"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">I have the photos that you ordered last month, how
                                        would you like them sent to you?</div>
                                    <div className="small text-gray-500">Jae Chun · 1d</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                        alt="..."/>
                                    <div className="status-indicator bg-warning"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">Last month's report looks great, I am very happy with
                                        the progress so far, keep up the good work!</div>
                                    <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                        alt="..."/>
                                    <div className="status-indicator bg-success"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                        told me that people say this to all dogs, even if they aren't good...</div>
                                    <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                </div>
                            </a>
                            <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                        </div>
                    </li>

                    <div className="topbar-divider d-none d-sm-block"></div>

                    {/*<!-- Nav Item - User Information --> */}
                    <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                            <img className="img-profile rounded-circle"
                                src="img/undraw_profile.svg"/>
                        </a>
                       {/*  <!-- Dropdown - User Information -->*/}
                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">
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
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </a>
                        </div>
                    </li>

                </ul>

            </nav>
           {/*  <!-- End of Topbar -->*/}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">

        <h1 className="h3 mb-2 text-gray-800">Proveedores <i class="fa-solid fa-truck-field"></i> </h1>
        <p className="mb-4">Lista de todos los proveedores en sistema, recuerde que WOPR solo muestra los proveedores que se han dado de alta en Gstock, para modificar o sumar un proveedor es necesario que lo haga desde Gstock.</p>
        
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Lista de Proveedores</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id Wopr</th>
                                <th>Id G-Stock</th>
                                <th>Referencia</th>
                                <th>Categoria Id</th>
                                <th>Subcategoria Id</th>
                                <th>Nombre</th>
                                <th>Nombre Registrado</th>
                                <th>CIF</th>
                                <th>Direccion</th>
                                <th>Direccion adicional</th>
                                <th>Numero</th>
                                <th>Planta</th>
                                <th>Letra</th>
                                <th>Codigo Postal</th>
                                <th>Ciudad</th>
                                <th>Codigo Provincia</th>
                                <th>Nombre Provincia</th>
                                <th>Telefono 1</th>
                                <th>Telefono 2</th>
                                <th>Fax</th>
                                <th>Mobile</th>
                                <th>email</th>
                                <th>Codigo Lenguaje</th>
                                <th>Activo</th>
                                <th>Fecha Creacion</th>
                                <th>Fecha de Modificacion</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id Wopr</th>
                                <th>Id G-Stock</th>
                                <th>Referencia</th>
                                <th>Categoria Id</th>
                                <th>Subcategoria Id</th>
                                <th>Nombre</th>
                                <th>Nombre Registrado</th>
                                <th>CIF</th>
                                <th>Direccion</th>
                                <th>Direccion adicional</th>
                                <th>Numero</th>
                                <th>Planta</th>
                                <th>Letra</th>
                                <th>Codigo Postal</th>
                                <th>Ciudad</th>
                                <th>Codigo Provincia</th>
                                <th>Nombre Provincia</th>
                                <th>Telefono 1</th>
                                <th>Telefono 2</th>
                                <th>Fax</th>
                                <th>Mobile</th>
                                <th>email</th>
                                <th>Codigo Lenguaje</th>
                                <th>Activo</th>
                                <th>Fecha Creacion</th>
                                <th>Fecha de Modificacion</th>
                            </tr>
                        </tfoot>
                        <tbody>
                        {/* Mapea sobre los datos para renderizar cada fila */}
                        {supplier.map((row, idWopr) => (
                            <tr key={idWopr}>
                            <td>{row.idWopr}</td>
                            <td>{row.id}</td>
                            <td>{row.reference}</td>
                            <td>{row.categoryId}</td>
                            <td>{row.subcategoryId}</td>
                            <td>{row.name}</td>
                            <td>{row.nameRegistered}</td>
                            <td>{row.cif}</td>
                            <td>{row.address}</td>
                            <td>{row.addressAdditional}</td>
                            <td>{row.addressNumber}</td>
                            <td>{row.addressFloor}</td>
                            <td>{row.addressLetter}</td>
                            <td>{row.codePostal}</td>
                            <td>{row.cityCode}</td>
                            <td>{row.cityName}</td>
                            <td>{row.provinceCode}</td>
                            <td>{row.provinceName}</td>
                            <td>{row.phone1}</td>
                            <td>{row.phone2}</td>
                            <td>{row.fax}</td>
                            <td>{row.mobile}</td>
                            <td>{row.email}</td>
                            <td>{row.languageCode}</td>
                            <td>{row.active}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
           {/* <!-- /.container-fluid --> */}

        </div>
        {/*<!-- End of Main Content --> */}

    </div>
    {/* <!-- End of Content Wrapper --> */}

</div>
{/*<!-- End of Page Wrapper -->*/}

{/*<!-- Scroll to Top Button-->*/}
<a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up"></i>
</a>

{/* <!-- Logout Modal--> */}
<div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
        </div>
    </div>
</div>

{/* <!-- Bootstrap core JavaScript-->*/}
<script src="../vendor/jquery.min.js"></script>
<script src="../vendor/bootstrap.bundle.min.js"></script>

{/*<!-- Core plugin JavaScript--> */}
<script src="../vendor/jquery.easing.min.js"></script>

{/* <!-- Custom scripts for all pages--> */}
<script src="../vendor/sb-admin-2.min.js"></script>

</div>
        );
    }