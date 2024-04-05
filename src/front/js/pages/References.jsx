import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { Link } from "react-router-dom";
import LogoSidebar from "../../img/LogoSidebar.png";

export const References = () => {
    const { store, actions } = useContext(Context);

    return (
        <div id="page-top">
{ !store.isLogin ? <h1>FORBIDEN</h1>:
            
                        <div className="container-fluid">
                            <h1 class="h3 mb-2 text-gray-800">References <i class="fa-solid fa-magnifying-glass"></i> </h1>
                            <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                                For more information about DataTables, please visit the <a target="_blank"
                                    href="https://datatables.net">official DataTables documentation</a>.</p>

                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">References</h6>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Reference</th>
                                                    <th>CategoryId</th>
                                                    <th>FamilyId</th>
                                                    <th>TypeId</th>
                                                    <th>SubtypeId</th>
                                                    <th>MeasureUnitId</th>
                                                    <th>MeasurePriceLastPurchase</th>
                                                    <th>MeasurePriceAverage</th>
                                                    <th>DisplayUnitId</th>
                                                    <th>EquivalenceBetweenMeasureAndDisplay</th>
                                                    <th>Active</th>
                                                    <th>CreationDate</th>
                                                    <th>ModificationDate</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Reference</th>
                                                    <th>CategoryId</th>
                                                    <th>FamilyId</th>
                                                    <th>TypeId</th>
                                                    <th>SubtypeId</th>
                                                    <th>MeasureUnitId</th>
                                                    <th>MeasurePriceLastPurchase</th>
                                                    <th>MeasurePriceAverage</th>
                                                    <th>DisplayUnitId</th>
                                                    <th>EquivalenceBetweenMeasureAndDisplay</th>
                                                    <th>Active</th>
                                                    <th>CreationDate</th>
                                                    <th>ModificationDate</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
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