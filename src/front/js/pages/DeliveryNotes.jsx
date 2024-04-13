import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { Link } from "react-router-dom";
import LogoSidebar from "../../img/LogoSidebar.png";
import { useNavigate } from "react-router-dom";

export const DeliveryNotes = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  // mandamos la informacion del row al localStorage
  const editBtn = (row) => {
    // 1. Tengo que mandar row al store
    actions.selectDeliveryNotes(row);
    // 2. Ir al componente editNotes
    navigate("/edit-notes");
  }

  const delBtn = (row) => {
    actions.selectManufacturingOrders(row);
    navigate("/del-notes")
  }

  return (
    <div>
      {!store.isLogin ? <h1>FORBIDEN</h1> :
        <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">Albaranes <i className="fa-solid fa-file-invoice-dollar"></i></h1>
          <p className="mb-4">Información completa de los albaranes, fecha, coste de los productos, IVA, coste total y
            estado del albarán.</p>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Albaranes creados:</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Fecha</th>
                      <th>Coste</th>
                      <th>Suma total</th>
                      <th>Suma IVA</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Identificador</th>
                      <th>03/02/2024</th>
                      <th>00,00 €</th>
                      <th>00,00 €</th>
                      <th>00,00 €</th>
                      <th> <div className="form-check">
                        <input clasName="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Facturado
                        </label>
                      </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                          <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Pendiente de Facturar
                          </label>
                        </div> </th>
                      <td><i className="fa-solid fa-pen-to-square" onClick={() => editBtn(row)}></i>&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-trash" onClick={() => delBtn(row)}></i></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};