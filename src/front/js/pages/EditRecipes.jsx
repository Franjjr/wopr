import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const EditRecipes = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState(store.currentRecipes.name);
  const [isActive, setIsActive] = useState(store.currentRecipes.is_active);
  const [meals, setMeals] = useState(store.currentRecipes.meals);
  const [costMeals, setCostMeals] = useState(store.currentRecipes.cost_meals);
  const url_edit =
    process.env.BACKEND_URL + "/api/recipes/" + store.currentRecipes.id;
  const navigate = useNavigate();

  const submitEdit = async (e) => {
    e.preventDefault();

    const recipeData = {
      name: name,
      is_active: isActive,
      meals: meals,
      cost_meals: costMeals,
    };
    // Enviar token para autorizacion
    const response = await fetch(url_edit, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
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
                        Actualizar Receta:" {store.currentRecipes.name} "
                      </h1>
                    </div>
                    <form className="user" onSubmit={submitEdit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="checkbox"
                          className=""
                          checked={isActive}
                          onChange={(e) => setIsActive(e.target.checked)}
                          required
                        /> Receta Activa ?
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          value={meals}
                          onChange={(e) => setMeals(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          value={costMeals}
                          onChange={(e) => setCostMeals(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block">
                        Actualizar Receta
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
    
  );
};
