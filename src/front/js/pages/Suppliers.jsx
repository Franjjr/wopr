import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";

// importar useNavigate para luego utilzarlo en el return
export function Suppliers() {
  const { store, actions } = useContext(Context);

  return (
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
                    {store.suppliers.map((row, idWopr) => (
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
      )}
    </div>
  );
}
