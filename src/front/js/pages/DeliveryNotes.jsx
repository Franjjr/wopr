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
            <h1 class="h3 mb-2 text-gray-800">Albaranes <i class="fa-solid fa-file-invoice-dollar"></i></h1>
    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
        For more information about DataTables, please visit the <a target="_blank"
            href="https://datatables.net">official DataTables documentation</a>.</p>
    
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Delivery Notes Info</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                            <th> <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Facturado
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
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