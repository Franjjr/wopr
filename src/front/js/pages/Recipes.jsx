import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { Link } from "react-router-dom";
import LogoSidebar from "../../img/LogoSidebar.png";

export const Recipes = () => {
  const { store, actions } = useContext(Context);

  // Falta poner el BtnCreate dentro de la tabla.


  return (
<div id="page-top"> 
{ !store.isLogin ? <h1>FORBIDEN</h1>:
            <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Recetas  <i className="fa-solid fa-plate-wheat"></i> </h1>
    <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
        For more information about DataTables, please visit the </p>
    
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Recipes Info</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Meals</th>
                            <th>Cost Meals</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Meals</th>
                            <th>Cost Meals</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td>Salsa Bolognesa</td>
                            <td>500</td>
                            <td>3400 €</td>
                        </tr>
                        <tr>
                            <td>Salsa Tartufo</td>
                            <td>300</td>
                            <td>1200 €</td>
                        </tr>
                        <tr>
                            <td>Tortilla de Patatas</td>
                            <td>450</td>
                            <td>1500 €</td>
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