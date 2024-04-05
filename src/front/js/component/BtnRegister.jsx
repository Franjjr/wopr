import React from "react";
import { Link } from "react-router-dom";


export const BtnRegister = () => {

  return (
    <Link className="button3" to="/register">
      <i className="fa-solid fa-user-plus"></i>
      <div className="label4">Crear Cuenta</div>
    </Link>
  )
}
