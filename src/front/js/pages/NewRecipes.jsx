import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { SumLine } from "./SumLine.jsx";
import { useNavigate } from "react-router-dom";
import { Spiner } from "../component/Spiner.jsx";

export const NewRecipes = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [meals, setMeals] = useState(0);
  const [costMeals, setCostMeals] = useState(0);
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  const url_add = process.env.BACKEND_URL + "/api/recipes";

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
      actions.selectRecipes(row.data);
      setName(store.currentRecipes.name);
      setMeals(store.currentRecipes.meals);
      setCostMeals(store.currentRecipes.cost_meals);
      setIsActive(store.currentRecipes.is_active);
      setId(store.currentRecipes.id);
    } else {
      console.error("Acceso denegado", response.status, response.statusText);
    }
  };

  const editLineBtn = (row) => {
    actions.selectLineRecipes(row);

  } 

  const delLineBtn = (row) => {
    actions.selectLineRecipes(row);
    
  }

  const addLine = () => {
    actions.sumLineOn();

  }

  const endEdit = () => {
    navigate("/recipes")
  }

  return (
    <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            {!store.sumLineActive ? 
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  {/* <div className="col-lg-6 d-none d-lg-block bg-register-image"></div> */}
                  <div className="col-lg-12">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          {!store.currentRecipes.id ? (<div><h3>Nueva Receta</h3></div>) : (<div><h3>Completar Receta: {store.currentRecipes.name}</h3></div>) }
                        </h1>
                      </div>
                      <form className="user" onSubmit={submitRecipe}>
                        <div className="form-group">
                          <label htmlFor="nombre">Nombre de la Receta</label>
                          <input
                            type="text"
                            id="nombre"
                            className="form-control form-control-user"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required={store.currentRecipes.id ? false : true}
                            readOnly={store.currentRecipes.id ? true : false}
                          />
                        </div>
                        <div className="form-group">
                          <labe htmlFor="active">Receta Activa?:  </labe>
                          <input
                            type="checkbox"
                            id="active"
                            className="form-control-user"
                            checked={isActive}
                            onChange={(e) => setIsActive(e.target.checked)}
                            required={store.currentRecipes.id ? false : true}
                            readOnly={store.currentRecipes.id ? true : false}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="raciones">Raciones</label>
                          <input
                            type="text"
                            id="raciones"
                            className="form-control form-control-user"
                            value={meals}
                            onChange={(e) => setMeals(e.target.value)}
                            required={store.currentRecipes.id ? false : true}
                            readOnly={store.currentRecipes.id ? true : false}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="cost">Coste Receta</label>
                          <input
                            type="text"
                            id="cost"
                            className="form-control form-control-user"
                            value={costMeals}
                            onChange={(e) => setCostMeals(e.target.value)}
                            required={store.currentRecipes.id ? false : true}
                            readOnly={store.currentRecipes.id ? true : false}
                          />
                        </div>
                        {!store.currentRecipes.id ? 
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Grabar Receta
                        </button>
                        : <></> }
                      </form>
                      <hr></hr>
                      {!store.currentRecipes.id ?  <></>  : 
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
                                      <td><i className="fa-solid fa-pen-to-square" onClick={() => editLineBtn(row)}></i>
                                        &nbsp;&nbsp;&nbsp;<i className="fa-solid fa-trash" onClick={() => delLineBtn(row)}></i>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                                <button type="button" className="btn btn-primary btn-user btn-block" onClick={() => addLine()}>
                                Sumar Ingrediente
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-user btn-block"
                                  onClick={() => endEdit()} >
                                Terminar
                                </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            : <SumLine />}
          </div>
        </div>
    </div>
  );
};

