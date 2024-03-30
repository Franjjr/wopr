import React from "react";


export const Footer = () => (
  <footer className="footer bg-light mt-auto py-1 text-center fixed-bottom">
    <div className="container">
      <div className="row">
        <div className="col-6 col-md-3 mb-1">
          <h4 style={{ textDecoration: "underline" }}>Creadores:</h4>
          <div className="d-flex flex-column flex-md-row">
            <ul className="nav flex-column mr-md-3">
              <li className="nav-item mb-2">
                <a href="https://www.linkedin.com/in/fran-julian-1b150921/" target="_blank" className="nav-link p-0 text-light">Fran Julián</a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://www.linkedin.com/in/mercedes-s%C3%A1nchez-pe%C3%B1a-32625821a/" target="_blank" className="nav-link p-0 text-light">Mercedes Sánchez</a>
              </li>
            </ul>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="https://www.linkedin.com/in/irene-vazquez-sanchez-727a662a2/" target="_blank" className="nav-link p-0 text-light">Irene Vázquez</a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://www.linkedin.com/in/matteo-scilleri-b565a117a/" target="_blank" className="nav-link p-0 text-light">Matteo Scilleri</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-md-end align-items-center">
          <p className="mb-0">© WOPR, 2024.</p>
        </div>
      </div>
    </div>
  </footer>
);

