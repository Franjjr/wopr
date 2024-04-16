import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const ViewRecipes = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState(store.currentEditRecipes.name);
  const [isActive, setIsActive] = useState(store.currentEditRecipes.is_active);
  const [meals, setMeals] = useState(store.currentEditRecipes.meals);
  const [costMeals, setCostMeals] = useState(store.currentEditRecipes.cost_meals);
  const navigate = useNavigate();
  const url_edit = process.env.BACKEND_URL + "/api/recipes/" + store.currentEditRecipes.id;

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
      setStore({currentEditRecipes: {}});
      navigate("/recipes");
    } else {
      // Manejar el caso en que la respuesta no sea exitosa
      console.error("Acceso denegado", response.status, response.statusText);
    }
  };

  const exit = () => {
    setStore({currentEditRecipes: { }});
    navigate("/recipes")
  }
  
  //editLineBtn
  //delLineBtn
  //addLine


  return ( 
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-12">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Receta:" {store.currentEditRecipes.name} "
                      </h1>
                    </div>
                    <form className="user" onSubmit={submitEdit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="checkbox"
                          className=""
                          checked={isActive}
                          onChange={(e) => setIsActive(e.target.checked)}
                          readOnly
                        /> Receta Activa ?
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          value={meals}
                          onChange={(e) => setMeals(e.target.value)}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          value={costMeals}
                          onChange={(e) => setCostMeals(e.target.value)}
                          readOnly
                        />
                      </div>
                      {/* <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block">
                        Actualizar Receta
                      </button> */}
                    </form>
                    <hr></hr>
                    <div>
                        <p className="mb-4"></p>
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
                                  {store.lineEditRecipes.map((row, id) => (
                                    <tr key={id}>
                                      <td>{row.id}</td>
                                      <td>{row.recipe_to}</td>
                                      <td>{row.reference_to}</td>
                                      <td>{row.qty}</td>
                                      <td>{row.cost}</td>
                                      <td>{row.total}</td>
                                      <td>{row.units}</td>
                                      <td>{row.cost_unit}</td>
                                      <td><i className="fa-solid fa-pen-to-square" onClick={() => editLineBtn(row)}></i>
                                        &nbsp;&nbsp;&nbsp;<i className="fa-solid fa-trash" onClick={() => delLineBtn(row)}></i>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-user btn-block"
                                  onClick={() => exit()} >
                                Terminar
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
      </div>
    </div>
    
  );
};