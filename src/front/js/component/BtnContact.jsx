import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const BtnContact = () => {

  return (
    <Link to="/contact">
      <button className="btn btn-info mx-2" type="button"><i className="fa-solid fa-rocket"></i> Contacto</button>
    </Link>
  )
}