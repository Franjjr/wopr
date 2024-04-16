
import React from "react";
import {editRecipes} from "../pages/EditRecipes.jsx"

const btnEditRecipes = ({ onClick }) => {
  return <i className="fa-solid fa-pen-to-square"> onClick={editRecipes()} </i>;
};

export default btnEditRecipes;
