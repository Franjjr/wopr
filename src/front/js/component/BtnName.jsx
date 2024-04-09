import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const BtnName = () => {
  const { actions } = useContext(Context)

  return <div className="texto">
    <div className="col-8">
      <Link to={path}>
        <div className="mb-2">
          <code>.btn-circle</code>
        </div>
        <Link to="#" className="btn btn-info btn-circle">
          <i className="fas fa-info-circle"></i>
        </Link>
      </Link>
    </div>
  </div>
}