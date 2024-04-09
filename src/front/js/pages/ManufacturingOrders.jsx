import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";

export const ManufacturingOrders = () => {
  const { store, actions } = useContext(Context);

  return (
    <div id="page-top">
      {!store.isLogin ? (
        <h1>FORBIDEN</h1>
      ) : (
        <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">
            Ordenes de Fabricacion <i className="fa-regular fa-paper-plane"></i>{" "}
          </h1>
          <p className="mb-4">
            Listado completo de las ordenes de Fabricacion.
          </p>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Ordenes</h6>
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
                      <th>Id</th>
                      <th>Id Receta</th>
                      <th>Fecha de Envio</th>
                      <th>Cantidad</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Id</th>
                      <th>Id Receta</th>
                      <th>Fecha de Envio</th>
                      <th>Cantidad</th>
                      <th>Estado</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {store.manufacturing.map((row, id)=> (
                    <tr key={id}>
                      <td>{row.id}</td>
                      <td>{row.recipe_id}</td>
                      <td>{row.delivery_date}</td>
                      <td>{row.qty}</td>
                      <td>{row.status}</td>
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
};
