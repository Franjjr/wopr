import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { Link } from "react-router-dom";
import LogoSidebar from "../../img/LogoSidebar.png";

export const Previsions = () => {
  const { store, actions } = useContext(Context);
  
  return (
<div id="page-top"> 
{ !store.isLogin ? <h1>FORBIDEN</h1>:
            <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Previsions <i className="fa-regular fa-clipboard"></i> </h1>
    <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
        For more information about DataTables, please visit the <a target="_blank"
            to="https://datatables.net">official DataTables documentation</a>.</p>
    
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Orders</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Center to</th>
                            <th>User To</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Center to</th>
                            <th>User To</th>
                            <th>Date</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td>Cobarcho</td>
                            <td>Marina Martin</td>
                            <td>2/2/24</td>      
                        </tr>
                        <tr>
                            <td>Gastrobare El Perdido</td>
                            <td>Pablo Perez</td>
                            <td>4/2/24</td> 
                        </tr>
                        <tr>
                            <td>Restaurante El Parque</td>
                            <td>Angel Alvarez</td>
                            <td>16/3/24</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
            

            </div>
}
        </div>
      );
    };