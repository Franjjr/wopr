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
            {!store.isLogin ? <h1>FORBIDEN</h1> :
                <div className="container-fluid">

                    <h1 class="h3 mb-2 text-gray-800">Recetas  <i class="fa-solid fa-plate-wheat"></i> </h1>
                    <div className="text-right">
                        <Link to="/new-recipes">
                            <button type="button" className="btn btn-primary">Crear receta</button>
                        </Link>
                    </div>
                    <p className="mb-4">Recetas disponibles:</p>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Recetas disponibles</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Is Active</th>
                                            <th>Cantidad</th>
                                            <th>Coste</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Is Active</th>
                                            <th>Cantidad</th>
                                            <th>Coste</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {/* Mapea sobre los datos para renderizar cada fila */}
                                        {store.recipes.map((row, id) => (
                                            <tr key={id}>
                                                <td>{row.id}</td>
                                                <td>{row.name}</td>
                                                <td>{row.is_active}</td>
                                                <td>{row.meals}</td>
                                                <td>{row.cost_meals}</td>
                                            </tr>
                                        ))}
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