import React from "react";
import { Link } from "react-router-dom";
import "../../styles/landingpage.css";

export const BtnContact = () => {

  return (
    <Link className="button3" to="/contact">
      <i className="fa-solid fa-rocket"></i>
      <div className="label4">Contacto</div>
    </Link>
  )
}
