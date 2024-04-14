import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext, { Context } from "./store/appContext";
// Import custom component
import ScrollToTop from "./component/scrollToTop.js";
import { BackendURL } from "./component/BackendURL.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { Sidebar } from "./component/Sidebar.jsx";
import { Footer } from "./component/Footer.jsx";
// Import custom pages
import { Home } from "./pages/Home.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { Recipes } from "./pages/Recipes.jsx";
import { Previsions } from "./pages/Previsions.jsx";
import { DeliveryNotes } from "./pages/DeliveryNotes.jsx";
import { ManufacturingOrders } from "./pages/ManufacturingOrders.jsx";
import { References } from "./pages/References.jsx";
import { Suppliers } from "./pages/Suppliers.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { ContactForm } from "./component/ContactForm.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { NewRecipes } from "./pages/NewRecipes.jsx";
import { Logout } from "./pages/Logout.jsx";
import { EditRecipes } from "./pages/EditRecipes.jsx"
import { DeleteRecipe } from "./pages/DeleteRecipe.jsx"
import {ViewRecipes} from "./pages/ViewRecipes.jsx"
import { EditRecipes } from "./pages/EditRecipes.jsx";
import { DeleteRecipe } from "./pages/DeleteRecipe.jsx";
import { EditPrevisions } from "./pages/EditPrevisions.jsx";
import { DeletePrevisions } from "./pages/DeletePrevisions.jsx";
import { EditManufacturing} from "./pages/EditManufacturing.jsx";
import { DeleteManufacturing } from "./pages/DeleteManufacturing.jsx";
import { EditNotes } from "./pages/EditNotes.jsx";
import { DeleteNotes } from "./pages/DeleteNotes.jsx";


// Create your first component
const Layout = () => {
    // The basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    const { store, actions } = useContext(Context);

    return (
        <div className="min-hv-100">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    {!store.isLogin ?
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<Login />} path="/login" />
                            <Route element={<Register />} path="/register" />
                            <Route element={<ContactForm />} path="/contact" />
                            <Route element={<NotFound />} path="*" />
                    
                        </Routes>
                    :
                        <div className="row">
                            <div className="col-2">
                                <Sidebar />
                            </div>
                            <div className="col-10 mt-4">
                                <Routes>
                                    <Route element={<Dashboard />} path="/dashboard" />
                                    <Route element={<Recipes />} path="/recipes" />
                                    <Route element={<NewRecipes />} path="/new-recipes" />
                                    <Route element={<Previsions />} path="/previsions" />
                                    <Route element={<DeliveryNotes />} path="/delivery-notes" />
                                    <Route element={<ManufacturingOrders />} path="/manufacturing-orders" />
                                    <Route element={<References />} path="/references" />
                                    <Route element={<Suppliers />} path="/suppliers" />
                                    <Route element={<Logout />} path="/logout" />
                                    <Route element={<NotFound />} path="*" />
                                    <Route element ={<EditRecipes />} path="/edit-recipes" />
                                    <Route element ={<DeleteRecipe />} path="/del-recipes" />
                                    <Route element ={<ViewRecipes />} path="/view-recipes" />
                                    <Route element ={<EditPrevisions />} path="/edit-previsions" />
                                    <Route element ={<DeletePrevisions />} path="/del-previsions" />
                                    <Route element ={<EditManufacturing />} path="/edit-manufacturing" />
                                    <Route element ={<DeleteManufacturing />} path="/del-manufacturing" />
                                    <Route element ={<EditNotes />} path="/edit-notes" />
                                    <Route element ={<DeleteNotes />} path="/del-notes" />
                                </Routes>
                            </div>
                        </div>
                    }
                    <Footer/>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};


export default injectContext(Layout);
