import React from "react";  // Import react into the bundle
import ReactDOM from "react-dom";
import "../js/vendor/jquery.min.js";
import "../js/vendor/sb-admin-2.min.js";
import "../js/vendor/jquery.easing.min.js";
import "../js/vendor/bootstrap.bundle.min.js";
import "../styles/index.css";  // Include your index.scss file into the bundle
import ".././styles/home.css";
import Layout from "./Layout.jsx";  // Import your own components

//render your react application
ReactDOM.render(<Layout/>, document.querySelector("#app"));