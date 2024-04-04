import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../img/Logo.png";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";


export const Login = () => {
  const {store, actions} = useContext(Context)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ominous-spoon-pjrrxgvv64p726gqw-3001.app.github.dev/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Guardar el token de acceso en el Local Storage
        console.log(data)
        localStorage.setItem("token", data.token);
        localStorage.setItem("rol", data.user.rol);
        localStorage.setItem('name', data.user.name);
        actions.login();
        // Redirigir a la página principal
        navigate('/recipes');
      } else {
        // Manejar el caso en que la respuesta no sea exitosa
        console.error("Error al iniciar sesión", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="logo mt-4 mr-12">
          <img className="logo" src={Logo} />
        </div>
        <hr></hr>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Bienvenido!</h1>
                      </div>
                      <form className="user" onSubmit={handleLogin}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Direccion de mails..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck"
                            >
                              Recuerdame
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>
                      </form>
                      <hr></hr>
                      <div className="text-center">
                        <Link className="small" to="//">
                          Perdiste la clave?
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link to="/register">
                          Crear Cuenta
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <footer className="footer bg-white mt-auto py-1 text-center fixed-bottom text-dark">
          <div className="container">
            <hr></hr>
            <div className="row">
              <div>
                <h6><b>© WOPR, 2024.</b></h6>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
