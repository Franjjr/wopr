import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const SumLine = () => {
  const { store, actions } = useContext(Context);
  // const [recipeId, setRecipeId] = useState(store.currentRecipes.id);
  const [referenceId, setReferenceId] = useState("");
  const [qty, setQty] = useState(0);
  const [cost, setCost] = useState(0);
  const [total, setTotal] = useState(0);
  const [units, setUnits] = useState(0);
  const [costUnit, setCostUnit] = useState(0);
  const url_sum = process.env.BACKEND_URL + "/api/line-recipes";
  const navigate = useNavigate();
  const [references, setReferences] = useState(store.references);

  const submitLine = async (e) => {
    e.preventDefault();

    const data = {
      recipe_id: store.currentRecipes.id,
      reference_id: referenceId,
      qty: qty,
      cost: cost,
      total: total,
      units: units,
      cost_unit: costUnit,
    };
    // Enviar token para autorizacion
    const response = await fetch(url_sum, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      await actions.getLinesRecipes();
      actions.sumLineOff();
      // navigate("/new-recipes");
    } else {
      // Manejar el caso en que la respuesta no sea exitosa
      console.error("Acceso denegado", response.status, response.statusText);
    }
  };

  const handleQtyChange = (e) => {
    const newQty = e.target.value;
    setQty(newQty);
    // Calcular el valor total cuando cambie la cantidad
    const newTotal = newQty * cost;
    setTotal(newTotal);
  };

  const handleCostChange = (e) => {
    const newCost = e.target.value;
    setCost(newCost);
    // Calcular el valor total cuando cambie el costo
    const newTotal = qty * newCost;
    setTotal(newTotal);
  };

  const handleUnitChange = (e) => {
    const newUnits = e.target.value;
    setUnits(newUnits);
    // Calcular el coste por unidade cuando cambie las unidades
    const newCostUnit = total / newUnits;
    setCostUnit(newCostUnit);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                {/* <div className="col-lg-6 d-none d-lg-block bg-register-image"></div> */}
                <div className="col-lg-12">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Ingredientes de la Receta:" {store.currentRecipes.name} "
                      </h1>
                    </div>
                    <form className="user" onSubmit={submitLine}>
                      <div className="form-group">
                        <label htmlFor="ingrediente">Ingrediente:</label>
                        <select
                          className="form-control"
                          id="ingrediente"
                          value={referenceId}
                          onChange={(e) => setReferenceId(e.target.value)}
                          required
                        >
                          <option value="">Seleccionar Ingrediente</option>
                          {references.map((item) => (
                            <option key={item.id} value={item.idWopr}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="nombre">Nombre de la Receta:</label>
                        <input
                          type="text"
                          id="nombre"
                          className="form-control form-control-user"
                          key={store.currentRecipes.id}
                          value={store.currentRecipes.name}
                          onChange={(e) => setId(e.target.value)}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cantidad">Cantidad:</label> 
                        <input
                          type="text"
                          id="cantidad"
                          className="form-control form-control-user"
                          value={qty}
                          onChange={handleQtyChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="coste">Coste:</label> 
                        <input
                          type="text"
                          id="coste"
                          className="form-control form-control-user"
                          value={cost}
                          onChange={handleCostChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="total">Total:</label> 
                        <input
                          type="text"
                          id="total"
                          className="form-control form-control-user"
                          value={total}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="unidades">Unidades:</label>
                        <input
                          type="text"
                          id="unidades"
                          className="form-control form-control-user"
                          value={units}
                          onChange={handleUnitChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="costeu">Coste por Unidad:</label> 
                        <input
                          type="text"
                          id="costeu"
                          className="form-control form-control-user"
                          value={costUnit}
                          readOnly
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
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
