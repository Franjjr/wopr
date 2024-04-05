import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";

export const Formats = () => {
  const { store, actions } = useContext(Context);

  return (
    <div id="page-top">
      {!store.isLogin ? (
        <h1>FORBIDEN</h1>
      ) : (
        <div className="container-fluid">
          <h1 class="h3 mb-2 text-gray-800">
            Formatos de las Referencias <i class="fa-solid fa-magnifying-glass"></i>{" "}
          </h1>
          <p class="mb-4">
            Tabla con los formatos de las referencias actualizados, importados de Gstock, recuerde que WOPR solo muestra los formatos que existen en Gstock, si quiere modificar, eliminar o dar de alta es necesario hacerlo desde la app de Gstock.
          </p>

          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Formatos de las References</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table
                  class="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>Id Wopr</th>
                      <th>Id Gstock</th>
                      <th>id producto compra</th>
                      <th>Referencia</th>
                      <th>Nombre</th>
                      <th>Ud.Almacen</th>
                      <th>Ud.Pedido</th>
                      <th>Equivalencia medida, almacen</th>
                      <th>Equivalencia almacen, pedido</th>
                      <th>Barcode Almacen</th>
                      <th>Barcode Pedido</th>
                      <th>Peso ud. Almacen</th>
                      <th>Peso ud. Pedido</th>
                      <th>Conservacion</th>
                      <th>Medida ultima precio compra</th>
                      <th>Medida promedio</th>
                      <th>Precio ud. almacen</th>
                      <th>Precio promedio ud. almacen</th>
                      <th>Precio ud. pedido</th>
                      <th>Precio promedio ud. pedido</th>
                      <th>Fecha Creacion</th>
                      <th>Fecha modificacion</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                    <th>Id Wopr</th>
                      <th>Id Gstock</th>
                      <th>id producto compra</th>
                      <th>Referencia</th>
                      <th>Nombre</th>
                      <th>Ud.Almacen</th>
                      <th>Ud.Pedido</th>
                      <th>Equivalencia medida, almacen</th>
                      <th>Equivalencia almacen, pedido</th>
                      <th>Barcode Almacen</th>
                      <th>Barcode Pedido</th>
                      <th>Peso ud. Almacen</th>
                      <th>Peso ud. Pedido</th>
                      <th>Conservacion</th>
                      <th>Medida ultima precio compra</th>
                      <th>Medida promedio</th>
                      <th>Precio ud. almacen</th>
                      <th>Precio promedio ud. almacen</th>
                      <th>Precio ud. pedido</th>
                      <th>Precio promedio ud. pedido</th>
                      <th>Fecha Creacion</th>
                      <th>Fecha modificacion</th>
                    </tr>
                  </tfoot>
                  <tbody>
                  {store.formats.map((row, idWopr) => (
                    <tr key={idWopr}>
                      <td>{row.idWopr}</td>
                      <td>{row.id}</td>
                      <td>{row.productPurchaseId}</td>
                      <td>{row.reference}</td>
                      <td>{row.name}</td>
                      <td>{row.storageUnit}</td>
                      <td>{row.orderUnit}</td>
                      <td>{row.equivalenceBetweenMeasureAndStorage}</td>
                      <td>{row.equivalenceBetweenStorageAndOrder}</td>
                      <td>{row.storageBarcode}</td>
                      <td>{row.orderBarcode}</td>
                      <td>{row.storageWeight}</td>
                      <td>{row.orderWeight}</td>
                      <td>{row.conservationState}</td>
                      <td>{row.measurePriceLastPurchase}</td>
                      <td>{row.measurePriceAverage}</td>
                      <td>{row.storagePrice}</td>
                      <td>{row.storagePriceAverage}</td>
                      <td>{row.orderPrice}</td>
                      <td>{row.orderPriceAverage}</td>
                      <td>{row.creationDate}</td>
                      <td>{row.modificationDate}</td>
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
