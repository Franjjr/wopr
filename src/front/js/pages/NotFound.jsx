import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

export const NotFound = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center">
      <p>
        <img src={rigoImageUrl} />
      </p>
      <div className="error mx-auto" data-text="404">
        404
      </div>
      <p className="lead text-gray-800 mb-5">Page Not Found</p>
      <p className="text-gray-500 mb-0">
        It looks like you found a glitch in the matrix...
      </p>
      {store.isLogin ? 
        <Link to="/dashboard">&larr; Back to Dashboard</Link>
      : 
        <Link to="/">&larr; Back to Home</Link>
      }
    </div>
  );
};
