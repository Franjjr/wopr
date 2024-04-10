import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const DeleteRecipe = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate();
  const url_del =
    process.env.BACKEND_URL + "/api/recipes/" + store.currentRecipes.id;

  const submitDel = async () => {
    const response = await fetch(url_del, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      
    });
    if (response.ok) {
      const data = await response.json();
      // Redirigir a la página recetas
      navigate("/recipes");
    } else {
      // Manejar el caso en que la respuesta no sea exitosa
      console.error("Acceso denegado", response.status, response.statusText);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Estas seguro?</h1>
                      </div>
                      <form className="user" onSubmit={submitDel}>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Estoy Seguro
                        </button>
                        <Link
                          to="/dashboard"
                          className="btn btn-secondary btn-user btn-block"
                        >
                          Cancelar
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
