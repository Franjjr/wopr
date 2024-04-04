import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { Link } from "react-router-dom";

export const ManufacturingOrders = () => {
    const { store, actions } = useContext(Context);

    return (
        <div id="page-top">
            {!store.isLogin ? <h1>FORBIDEN</h1> :
                <div className="container-fluid">
                    <h1 class="h3 mb-2 text-gray-800">Manufacturing Orders <i class="fa-regular fa-paper-plane"></i> </h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Orders</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Recipe to</th>
                                            <th>Delivery Date</th>
                                            <th>Qty</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Recipe to</th>
                                            <th>Delivery Date</th>
                                            <th>Qty</th>
                                            <th>Status</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <td>Salsa Bolognesa</td>
                                            <td>2/2/24</td>
                                            <td>5</td>
                                            <td>In progress</td>
                                        </tr>
                                        <tr>
                                            <td>Salsa Tartufo</td>
                                            <td>4/2/24</td>
                                            <td>10</td>
                                            <td>OK</td>
                                        </tr>
                                        <tr>
                                            <td>Tortilla de Patatas</td>
                                            <td>16/3/24</td>
                                            <td>8</td>
                                            <td>In progress</td>
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