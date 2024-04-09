import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";


export const Previsions = () => {
  const { store, actions } = useContext(Context);

  return (
    <div id="page-top">
      {!store.isLogin ? (
        <h1>FORBIDEN</h1>
      ) : (
        <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">
            Previsions <i className="fa-regular fa-clipboard"></i>{" "}
          </h1>
          <p className="mb-4">
            DataTables is a third party plugin that is used to generate the demo
            table below. For more information about DataTables, please visit the
          </p>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Pedidos</h6>
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
                      <th>Id Centro</th>
                      <th>Fecha</th>
                      <th>Usuario</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Id</th>
                      <th>Id Centro</th>
                      <th>Fecha</th>
                      <th>Usuario</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {store.previsions.map((row, id)=>(
                    <tr key={id}>
                      <td>{row.id}</td>
                      <td>{row.center_id}</td>
                      <td>{row.date}</td>
                      <td>{row.user_id}</td>
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
