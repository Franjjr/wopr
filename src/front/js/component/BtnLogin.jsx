import React from "react";
import { Link } from "react-router-dom";


export const BtnLogin = () => {

  return (
    <Link className="button4" to="/login">
      <i class="fa-solid fa-rocket"></i>
      <div className="label4">Entrar</div>
    </Link>
  )
}
