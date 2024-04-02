import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";


export const Register = () => {
    const { store, actions } = useContext(Context);

    return (

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
                                <div className="col-lg-6 d-none d-lg-block bg-register-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Create a new Register!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="Name" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Email Address" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <input type="Rol" className="form-control form-control-user"
                                                    id="exampleInputRol" placeholder="Rol" />
                                            </div>
                                            <a href="index.html" className="btn btn-primary btn-user btn-block">
                                                Create a new Register
                                            </a>
                                        </form>
                                        <hr></hr>
                                        <div className="text-center">
                                            <Link to="/login">
                                                <a className="small" href="register.html">Already have an account? Login!</a>
                                            </Link>
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