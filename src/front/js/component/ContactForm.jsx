import React from "react";
import "../../styles/landingpage.css";


export const ContactForm = () => {

  const onClick = () => {

  };

  return (
    <div className="contact-form">
      <div className="contact-form1">
        <div className="header3">
          <div className="headline-subhead4">
            <div className="contacta-con-nosotros">Contacta con nosotros</div>
            <div className="got-questions-about">{`¿Quieres más información? ¡Preguntamos lo que quieras! `}</div>
          </div>
        </div>
        <div className="header4">
          <div className="contact-details">
            <div className="contact-details1">
              <div className="phone">
                <i className="fa-solid fa-phone-volume"></i>
                <div className="div">+012 345 6789</div>
              </div>
              <div className="mail">
                <i className="fa-regular fa-envelope"></i>
                <div className="hellowoprcom">hello@wopr.com</div>
              </div>
            </div>
            <div className="social-media">
              <div className="encuntranos-tambin">Encuéntranos también</div>
              <div className="social-links">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="input-fields-button">
            <div className="input-fields">
              <div className="input-field">
                <div className="icon3">
                  <i className="fa-regular fa-user"></i>
                  <div className="divider" />
                </div>
                <div className="nombre">Nombre</div>
              </div>
              <div className="input-field1">
                <div className="icon4">
                  <i className="fa-regular fa-envelope"></i>
                  <div className="divider1" />
                </div>
                <div className="mail1">Mail</div>
              </div>
              <div className="input-field2">
                <div className="icon5">
                  {/* <img className="lockkey-icon" alt="" src="/lockkey.svg" /> */}
                  <div className="divider2" />
                </div>
                <div className="escribe-aqu">Escribe aquí</div>
              </div>
            </div>
            <div className="button14" onClick={onClick}>
              {/* <img className="arrowright-icon16" alt="" src="/arrowleft.svg"/> */}
              <div className="label14">Enviar</div>
              {/* <img className="arrowleft-icon9" alt="" src="/arrowleft.svg" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
