import React from "react";
import { Link } from "react-router-dom";


export const BtnCreate = () => {

  return (
    <Link className="button5" to="/recipes">
      <div className="label4">Crear nueva receta</div>
    </Link>
  )
}