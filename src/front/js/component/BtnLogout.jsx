import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const BtnLogout = () => {
    // Llamar a la función de logout pasada como prop
    const {store, actions} = useContext(Context);
    actions.logout()

    return (
    <Link className="dropdown-item" onClick={BtnLogout} to="/" data-toggle="modal" data-target="#logoutModal">
        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
    Logout
    </Link>

    );

};
