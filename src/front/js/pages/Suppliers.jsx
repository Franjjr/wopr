import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { Spiner } from "../component/Spiner.jsx";
import "../../styles/paginacion.css";

export function Suppliers() {
  const { store } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar los proveedores según el término de búsqueda
  const filteredSuppliers = store.suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular el índice del primer y último elemento de la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSuppliers.slice(indexOfFirstItem, indexOfLastItem);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredSuppliers.length / itemsPerPage);

  // Cambiar a una página específica
  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generar la lista de números de página
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Regresar a la primera página al realizar una búsqueda
  };

  return store.suppliers.length === 0 ? (
    <Spiner />
  ) : (
    <div id="page-top">
      {!store.isLogin ? (
        <h1>FORBIDEN</h1>
      ) : (
        <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">
            Proveedores <i className="fa-solid fa-truck-field"></i>{" "}
          </h1>
          <p className="mb-4">
            Lista de todos los proveedores en sistema, recuerde que WOPR solo
            muestra los proveedores que se han dado de alta en Gstock, para
            modificar o sumar un proveedor es necesario que lo haga desde
            Gstock.
          </p>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Lista de Proveedores
              </h6>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar Proveedor..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
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
                  <tbody>
                    {currentItems.map((supplier, idWopr) => (
                      <tr key={idWopr}>
                        <td>{supplier.idWopr}</td>
                        <td>{supplier.id}</td>
                        <td>{supplier.reference}</td>
                        <td>{supplier.categoryId}</td>
                        <td>{supplier.subcategoryId}</td>
                        <td>{supplier.name}</td>
                        <td>{supplier.nameRegistered}</td>
                        <td>{supplier.cif}</td>
                        <td>{supplier.address}</td>
                        <td>{supplier.addressAdditional}</td>
                        <td>{supplier.addressNumber}</td>
                        <td>{supplier.addressFloor}</td>
                        <td>{supplier.addressLetter}</td>
                        <td>{supplier.codePostal}</td>
                        <td>{supplier.cityCode}</td>
                        <td>{supplier.cityName}</td>
                        <td>{supplier.provinceCode}</td>
                        <td>{supplier.provinceName}</td>
                        <td>{supplier.phone1}</td>
                        <td>{supplier.phone2}</td>
                        <td>{supplier.fax}</td>
                        <td>{supplier.mobile}</td>
                        <td>{supplier.email}</td>
                        <td>{supplier.languageCode}</td>
                        <td>{supplier.active}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                {pageNumbers.map((pageNumber) => (
                  <button
                    key={pageNumber}
                    className={`pageButton ${
                      pageNumber === currentPage ? "active" : ""
                    }`}
                    onClick={() => handleChangePage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}