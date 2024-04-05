import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import logo from "../../img/Logo.png";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center">
      <p>
        <img src={logo} />
      </p>
      <div className="error mx-auto" data-text="Dashboard">
        Dashboard
      </div>
      <p className="lead text-gray-800 mb-5">Bienvenido</p>
    </div>
  );
};
