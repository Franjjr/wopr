import React from "react";
import { Link } from "react-router-dom";


export const BtnLogin = () => {

  return (
    <Link to="/login">
       <button class="btn btn-primary mx-2" type="button"><i className="fa-solid fa-rocket"></i> Entrar</button>
    </Link>
  )
}