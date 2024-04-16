import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Logout = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    actions.logout();
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          De verdad te quieres ir de WOPR!
                        </h1>
                      </div>
                      <form className="user" onSubmit={handleLogin}>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Salir de WOPR
                        </button>
                        <Link
                          to="/dashboard"
                          className="btn btn-secondary btn-user btn-block"
                        >
                          Cancelar
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
