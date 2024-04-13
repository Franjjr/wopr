import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { Link, useNavigate } from "react-router-dom";

export const NewRecipes2 = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState();
  const [isActive, setIsActive] = useState();
  const [meals, setMeals] = useContext();
  const [costMeals, setCostMeals] = useContext();
  // const url_line = process.env.BACKEND_URL + "/api/recipes/" + store.currentRecipes.id;
  const [newName, setNewName] = useState(store.currentRecipes.name);
  const [newIsActive, setNewIsActive] = useState(store.currentRecipes.is_active);
  const [newMeals, setNewMeals] = useState(store.currentRecipes.meals);
  const [newCostMeals, setNewCostMeals] = useState(store.currentRecipes.cost_meals);
  const [newId, setNewId] = useState(store.currentRecipes.id);
  const navigate = useNavigate();
  const url_add = process.env.BACKEND_URL + "/api/recipes/";

  const submitRecipe = async (e) => {
    e.preventDefault();

    const newRecipe = {
      name: name,
      is_active: isActive,
      meals: meals,
      cost_meals: costMeals,
    };

    const response = await fetch(url_add, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });

    if (response.ok) {
      const row = await response.json();
      actions.selectRecipes(row);
    } else {
      console.error("Acceso denegado", response.status, response.statusText);
    }
  };

  const editBtn = (row) => {
    actions.selectRecipes(row);
    // navigate("/edit-line-recipes");
  } 

  const delBtn = (row) => {
    actions.selectRecipes(row);
    // navigate("/del-line-recipes")
  }

  const sumLine = () => {
    actions.selectRecipes(row);
    actions.getLinesRecipes()
    navigate("/add-line");
  }

  return (
    <div className="container">
      {store.currentRecipes.id ? (
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-register-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Nueva Receta</h1>
                      </div>
                      <form className="user" onSubmit={submitRecipe}>
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
                          />{" "}
                          Receta Activa ?
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
                          className="btn btn-primary btn-user btn-block"
                        >
                          Grabar Receta
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
      ) : (
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
                          Completar Receta: "{store.currentRecipes.name}"
                        </h1>
                      </div>
                      <form className="user" onSubmit={submitLine}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            readOnly
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="checkbox"
                            className=""
                            checked={newIsActive}
                            onChange={(e) => setNewIsActive(e.target.checked)}
                            readOnly
                          />{" "}
                          Receta Activa ?
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            value={newMeals}
                            onChange={(e) => setNewMeals(e.target.value)}
                            readOnly
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            value={newCostMeals}
                            onChange={(e) => setNewCostMeals(e.target.value)}
                            readOnly
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Grabar Receta
                        </button>
                      </form>
                      <hr></hr>
                      <p className="mb-4">Ingredientes de la Receta:</p>
                      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-primary">
                            Ingredientes
                          </h6>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table
                              className="table table-bordered"
                              id="dataTable"
                              width="100%"
                              cellSpacing="0"
                            >
                              <thead>
                                <tr>
                                  <th>Id</th>
                                  <th>Receta</th>
                                  <th>Referencia</th>
                                  <th>Qty</th>
                                  <th>Cost</th>
                                  <th>Total</th>
                                  <th>Unidades</th>
                                  <th>Coste Unidad</th>
                                </tr>
                              </thead>

                              <tfoot>
                                <tr>
                                  <th>Id</th>
                                  <th>Receta</th>
                                  <th>Referencia</th>
                                  <th>Qty</th>
                                  <th>Cost</th>
                                  <th>Total</th>
                                  <th>Unidades</th>
                                  <th>Coste Unidad</th>
                                </tr>
                              </tfoot>
                              <tbody>
                                {store.lineRecipes.map((row, id) => (
                                  <tr key={id}>
                                    <td>{row.id}</td>
                                    <td>{row.recipe_to}</td>
                                    <td>{row.reference_to}</td>
                                    <td>{row.qty}</td>
                                    <td>{row.cost}</td>
                                    <td>{row.total}</td>
                                    <td>{row.units}</td>
                                    <td>{row.cost_unit}</td>
                                    <td><i className="fa-solid fa-pen-to-square" onClick={() => editBtn(row)}></i>
                                      &nbsp;&nbsp;&nbsp;<i className="fa-solid fa-trash" onClick={() => delBtn(row)}></i>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                              <button type="button" className="btn btn-primary" onClick={() => sumLine()}>
                              Sumar Ingrediente
                              </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
