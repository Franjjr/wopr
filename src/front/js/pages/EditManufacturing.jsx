import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const EditManufacturing = () => {
  const { store, actions } = useContext(Context);
  const [recipeId, setRecipeId] = useState(store.currentManufacturingOrders.recipe_id);
  const [deliveryDate, setDeliveryDate] = useState(store.currentManufacturingOrders.delivery_date);
  const [qty, setQty] = useState(store.currentManufacturingOrders.qty);
  const [status, setStatus] = useState(store.currentManufacturingOrders.status);
  const url_edit =
    process.env.BACKEND_URL + "/api/manufacturing-orders/" + store.currentManufacturingOrders.id;
  const navigate = useNavigate();

  const submitEdit = async (e) => {
    e.preventDefault();

    const manufacturingData = {
      recipe_id: recipeId,
      deliveryDate: delivery_date,
      qty: qty,
      status: status,
      recipeTo: recipe_to
    };
    // Enviar token para autorizacion
    const response = await fetch(url_edit, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(manufacturingData),
    });
    if (response.ok) {
      const data = await response.json();
      // Redirigir a manufacturing orders
      navigate("/manufacturing-orders");
    } else {
      // Manejar el caso en que la respuesta no sea exitosa
      console.error("Acceso denegado", response.status, response.statusText);
    }
  };

  return store.currentManufacturingOrders.id ?  ( 
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-register-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Actualizar Orden:" {store.currentManufacturingOrders.id} "
                      </h1>
                    </div>
                    <form className="user" onSubmit={submitEdit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          value={recipeId}
                          onChange={(e) => setRecipeId(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="checkbox"
                          className=""
                          checked={deliveryDate}
                          onChange={(e) => setDeliveryDate(e.target.checked)}
                          required
                        /> Orden Activa?
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Actualizar Orden
                      </button>
                    </form>
                    <hr></hr>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  ) : (<p>On LOAD...</p>) ;
};
