import React from "react";
import {viewRecipes} from "../pages/ViewRecipes.jsx"

const btnViewRecipes = ({ onClick }) => {
  return <i class="fa-regular fa-eye"> onClick={viewRecipes()} </i>;
};

export default btnViewRecipes;