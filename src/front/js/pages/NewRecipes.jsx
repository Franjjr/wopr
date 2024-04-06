import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import LogoSidebar from "../../img/LogoSidebar.png";

export const NewRecipes = () => {
    const { store, actions } = useContext(Context);

    return (
        <form>
            <div className="form-group mt-4">
                <label for="exampleFormControlInput1">Título de la receta</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nombre de la receta"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Ingredientes</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" className="btn btn-success">Guardar</button>
            <button type="button" className="btn btn-danger ml-2">Cancelar</button>
        </form>
    );
};
