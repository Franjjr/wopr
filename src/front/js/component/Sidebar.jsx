import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/index.css";

export const Sidebar = () => {
  
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div className="col-1">
        <Link to="/">
        <i className="fa-solid fa-kitchen-set fs-2 text-dark"></i>
        </Link>
        </div>
        <div className="col-2">
        <Link to="/">
        <p className="text-dark fs-5">KITCHEN CENTER</p>
        </Link>
        </div>
        
        <div className="ml-auto">
        <Link to="/login">
            <button className="btn btn-primary mx-3">Sign in</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-info">Sign up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
