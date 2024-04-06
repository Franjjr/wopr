import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import logo from "../../img/Logo.png";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center my-auto">
      <div className="error mx-auto" data-text="Bienvenido">
        Bienvenido
      </div>
      <p>
        <img src={logo} />
      </p>
      <h3><p>Warehouse and Operations Planning & Reporting</p></h3>
    </div>
  );
};
