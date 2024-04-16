import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const EditPrevisions = () => {
  const { store, actions } = useContext(Context);
  const [centerId, setCenterId] = useState(store.currentPrevisions.center_id);
  const [date, setDate] = useState(store.currentPrevisions.date);
  const [userId, setUserId] = useState(store.currentPrevisions.user_id);
  const url_edit =
    process.env.BACKEND_URL + "/api/previsions/" + store.currentPrevisions.id;
  const navigate = useNavigate();

  const submitEdit = async (e) => {
    e.preventDefault();

    const previsionsData = {
      center_id: centerId,
      date: date,
      user_id: userId,
    };
    // Enviar token para autorizacion
    const response = await fetch(url_edit, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(previsionsData),
    });
    if (response.ok) {
      const data = await response.json();
      // Redirigir a previsions
      navigate("/previsions");
    } else {
      // Manejar el caso en que la respuesta no sea exitosa
      console.error("Acceso denegado", response.status, response.statusText);
    }
  };

  return store.currentPrevisions.id ?  ( 
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
                        Actualizar Pedido:" {store.currentPrevisions.id} "
                      </h1>
                    </div>
                    <form className="user" onSubmit={submitEdit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          value={centerId}
                          onChange={(e) => setCenterId(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="checkbox"
                          className=""
                          checked={date}
                          onChange={(e) => setDate(e.target.checked)}
                          required
                        /> Receta Activa ?
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          value={userId}
                          onChange={(e) => setUserId(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Actualizar Pedido
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
