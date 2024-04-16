import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const url_register = process.env.BACKEND_URL + "/api/register";
  const url_login = process.env.BACKEND_URL + "/api/login";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construir el objeto con los datos del usuario
    const userData = {
      email: email,
      name: name,
      rol: rol,
      password: password,
    };

    try {
      // Enviar los datos del usuario al servidor
      const response = await fetch(url_register, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        // El usuario se registró correctamente, redirigir a la página de inicio
        const response = await fetch(url_login, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
          const data = await response.json();
          // Guardar el token de acceso en el Local Storage
          console.log(data);
          localStorage.setItem("token", data.token);
          localStorage.setItem("rol", data.user.rol);
          localStorage.setItem("name", data.user.name);
          actions.login();
          // Redirigir a la página principal
          navigate("/dashboard");
        } else {
          // Manejar el caso en que la respuesta no sea exitosa
          console.error(
            "Error al iniciar sesión",
            response.status,
            response.statusText
          );
        }
      } else {
        // Ocurrió un error al registrar al usuario
        console.error("Error al registrar el usuario");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <div className="container" style={ {height: '47rem' }}>
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-register-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Crear un nuevo usuario!
                      </h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Nombre"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <select
                          className="form-control form-control-user"
                          value={rol}
                          onChange={(e) => setRol(e.target.value)}
                          required
                        >
                          <option value="">Seleccionar Rol</option>
                          <option value="Admin">Admin</option>
                          <option value="Jefe de Compras">
                            Jefe de Compras
                          </option>
                          <option value="Cocinero">Cocinero</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Crear nuevo usuario
                      </button>
                    </form>
                    <hr></hr>
                    <div className="text-center">
                      <Link to="/login" className="small">
                        Ya tienes una cuenta creada? Login!
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
  );
};
