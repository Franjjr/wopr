import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { Link, useNavigate } from "react-router-dom";


export const NewRecipes = () => {
    const { store, actions } = useContext(Context);
    const [titulo, setTitulo] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const navigate = useNavigate();

    const handleGuardar = (event) => {
        event.preventDefault();
        // Guarda la receta
        const newRecipe = { 
            "name": titulo,
            "description": ingredientes,
            "meals": raciones,
            "cost_meals": cost,
        };
        actions.addRecipe(newRecipe); // Esto tendría que hacer que se guarde en el listado de recipes.
        // Deja los campos de nuevo en blanco
        setTitulo('');
        setIngredientes('');
        navigate("/recipes");
    };


    return (
        <form onSubmit={handleGuardar}>
            <div className="form-group mt-4">
                <label for="exampleFormControlInput1">Título de la receta</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Nombre de la receta"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Ingredientes</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={ingredientes}
                    onChange={(e) => setIngredientes(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-success">Guardar</button>
            <Link to="/recipes">
                <button type="reset" className="btn btn-secondary ml-2">Cancelar</button>
            </Link>
        </form>
    );
};
