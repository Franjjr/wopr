import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { Link } from "react-router-dom";
import LogoSidebar from "../../img/LogoSidebar.png";

export const DeliveryNotes = () => {
  const { store, actions } = useContext(Context);
  
  return (
<div>
{ !store.isLogin ? <h1>FORBIDEN</h1>:
            <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Albaranes <i className="fa-solid fa-file-invoice-dollar"></i></h1>
    <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
        For more information about DataTables, please visit the <Link target="_blank"
            to="https://datatables.net">official DataTables documentation</Link>.</p>
    
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Delivery Notes Info</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Date</th>
                            <th>Sum Cost</th>
                            <th>Sum Total</th>
                            <th>Sum Vat</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>idNumber</th>
                            <th>03/02/2024</th>
                            <th>00,00 €</th>
                            <th>00,00 €</th>
                            <th>00,00 €</th>
                            <th> <div className="form-check">
  <input clasName="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Facturado
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Pendiente de Facturar
  </label>
</div> </th>
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