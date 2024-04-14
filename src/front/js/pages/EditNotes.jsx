import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const EditNotes = () => {
    const { store, actions } = useContext(Context);
    const [date, setDate] = useState(store.currentDeliveryNotes.date);
    const [centerId, setCenterId] = useState(store.currentDeliveryNotes.center_id);
    const [sumCosts, setSumCosts] = useState(store.currentDeliveryNotes.sum_costs);
    const [sumTotals, setSumTotals] = useState(store.currentDeliveryNotes.sum_totals);
    const [sumVat, setSumVat] = useState(store.currentDeliveryNotes.sum_vat);
    const [status, setStatus] = useState(store.currentDeliveryNotes.status);
    const [userId, setUserId] = useState(store.currentDeliveryNotes.user_id);
    const url_edit =
        process.env.BACKEND_URL + "/api/manufacturing-orders/" + store.currentManufacturingOrders.id;
    const navigate = useNavigate();

    const submitEdit = async (e) => {
        e.preventDefault();

        const notesData = {
            date: date,
            centerId: center_id,
            sumCosts: sum_costs,
            sumTotals: sum_totals,
            sumVat: sum_vat,
            status: status,
            userId: user_id
        };
        // Enviar token para autorizacion
        const response = await fetch(url_edit, {
            method: "PUT",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
            body: JSON.stringify(notesgData),
        });
        if (response.ok) {
            const data = await response.json();
            // Redirigir a delivery notes
            navigate("/delivery-notes");
        } else {
            // Manejar el caso en que la respuesta no sea exitosa
            console.error("Acceso denegado", response.status, response.statusText);
        }
    };

    return store.currentDeliveryNotes.id ? (
        <div className="container">
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
                                                Actualizar Orden:" {store.currentDeliveryNotes.id} "
                                            </h1>
                                        </div>
                                        <form className="user" onSubmit={submitEdit}>
                                            <div className="form-group">
                                                <input
                                                    type="checkbox"
                                                    className=""
                                                    checked={date}
                                                    onChange={(e) => setDate(e.target.checked)}
                                                    required
                                                /> Orden Activa?
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-user"
                                                    value={centerId}
                                                    onChange={(e) => setCenterId(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-user"
                                                    value={sumCosts}
                                                    onChange={(e) => setSumCosts(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-user"
                                                    value={sumTotals}
                                                    onChange={(e) => setSumTotals(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-user"
                                                    value={sumVat}
                                                    onChange={(e) => setSumVat(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-user"
                                                    value={status}
                                                    onChange={(e) => setStatus(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-user"
                                                    value={userId}
                                                    onChange={(e) => setUserId(e.target.value)}
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-user btn-block"
                                            >
                                                Actualizar Envio
                                            </button>
                                        </form>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    ) : (<p>On LOAD...</p>);
};
