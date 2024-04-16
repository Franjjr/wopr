import React from "react";
import { Link } from "react-router-dom";


export const BtnRegister = () => {

  return (
    <Link to="/register">
        <button className="btn btn-success" type="button"><i className="fa-solid fa-user-plus"></i> Registrarse</button>
    </Link>
  )
}