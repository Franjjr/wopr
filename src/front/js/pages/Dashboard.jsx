import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import logo from "../../img/Logo.png";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center mt-5">
    
        <h2 className="">Bienvenido, <strong>{store.name}</strong></h2>

        <img className="logodash mt-3" src={logo}/>
      <h5>Warehouse and Operations Planning & Reporting</h5>
    </div>
  );
};
