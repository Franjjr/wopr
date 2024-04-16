import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { Link } from "react-router-dom";
import LogoSidebar from "../../img/LogoSidebar.png";
import { useNavigate } from "react-router-dom";
import { Spiner } from "../component/Spiner.jsx";



export const DeliveryNotes = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getDeliveryNotes();
  }, []);

  // mandamos la informacion del row al localStorage
  /*  const editBtn = (row) => {
     // 1. Tengo que mandar row al store
     actions.selectDeliveryNotes(row);
     // 2. Ir al componente editNotes
     navigate("/edit-notes");
   }
 
   const delBtn = (row) => {
     actions.selectManufacturingOrders(row);
     navigate("/del-notes")
   } */

  /*  const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage; */

  // const currentItems = deliveryNotes(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {store.deliveryNotes.length == 0 ?
        <Spiner />
        :
        <div>
          {!store.isLogin ? <h1>FORBIDEN</h1> :
            <div className="container-fluid">
              <h1 className="h3 mb-2 text-gray-800">Albaranes <i className="fa-solid fa-file-invoice-dollar"></i></h1>
              <div className="text-right">
                {/* <Link to="/new-delivery">
                  <button type="button" className="btn btn-primary">
                    Añadir
                  </button>
                </Link> */}
              </div>
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
                          <th>Centro</th>
                          <th>Coste</th>
                          <th>Suma total</th>
                          <th>Suma IVA</th>
                          <th>Estado</th>
                        </tr>
                      </thead>
                      {/* <tfoot>
                        <tr>
                          <th>Identificador</th>
                          <th>Fecha</th>
                          <th>Centro</th>
                          <th>00,00 €</th>
                          <th>00,00 €</th>
                          <th>00,00 €</th>
                        </tr>
                      </tfoot> */}
                      <tbody>
                        {/* Inicio del map */}
                        {store.deliveryNotes.map((row, id) => (
                          <tr key={id}>
                            <td>{row.id}</td>
                            <td>{row.date}</td>
                            <td>{row.center_id}</td>
                            <td>{row.sum_costs}</td>
                            <td>{row.sum_totals}</td>
                            <td>{row.sum_vat}</td>
                            <td>{row.status}</td>
                          </tr>
                        ))}
                        {/* Fin del map */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          }

        </div>
      }
    </div>
  );
};