import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";


export const ContactForm = () => {

  const { store, actions } = useContext(Context);

  return (
    <div className="container">
            <div className="row justify-content-center" style={ {height: '47rem' }}>

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">

                            <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-contact-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Contacta con nosotros</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="Name" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Nombre" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Correo electrónico" />
                                            </div>
                                            <div className="form-group">
                                                <input type="help" className="form-control form-control-user"
                                                    id="exampleInputHelp" placeholder="¿En que podemos ayudarte?" />
                                            </div>
                                            <Link to="index.html" className="btn btn-primary btn-user btn-block">
                                                Enviar
                                            </Link>
                                        </form>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

  )
};

