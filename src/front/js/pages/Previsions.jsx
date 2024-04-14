import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { useNavigate } from "react-router-dom";


export const Previsions = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  // mandamos la informacion del row al localStorage
  const editBtn = (row) => {
    // 1. Tengo que mandar row al store
    actions.selectPrevisions(row);
    // 2. Ir a página editPrevisions
    navigate("/edit-previsions");
  } 

  const delBtn = (row) => {
    actions.selectRecipes(row);
    navigate("/del-previsions")
  }

  return (
    <div id="page-top">
      {!store.isLogin ? (
        <h1>FORBIDEN</h1>
      ) : (
        <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">
            Previsiones <i className="fa-regular fa-clipboard"></i>{" "}
          </h1>
          <p className="mb-4">
            En este apartado puedes crear, modificar o eliminar los pedidos de las previsiones realizados.
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
                      <td><i className="fa-solid fa-pen-to-square" onClick={() => editBtn(row)}></i>&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-trash" onClick={() => delBtn(row)}></i></td>
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
