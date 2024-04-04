import React, { useContext, useCallback } from "react";
import { Context } from "../store/appContext";
/* import "../../styles/home.css"; */
import "../../styles/landingpage.css";
/* import {IMG_8962} from  "../../../front/img/IMG_8962.jpg" */
import Mercedes from "../../img/IMG_8973.jpg";
import Fran from "../../img/IMG_8964.jpg";
import Irene from "../../img/IMG_8972.jpg";
import Matteo from "../../img/IMG_8975.jpg";
import Montaditos from "../../img/Montaditos.png";
import Vicio from "../../img/Vicio.png";
import TGB from "../../img/TGB.png";
import Wok from "../../img/Wok.png";
import Foster from "../../img/Foster.png";
import LaCueva from "../../img/LaCueva.png";
import Stock from "../../img/Stock.png";
import Ayuda from "../../img/Ayuda.png";
import Pedido from "../../img/Pedido.png";
import FotoFinal from "../../img/FotoFinal.png";
import Inteligente from "../../img/Inteligente.png";
import Logo from "../../img/Logo.png";

export const Home = () => {
  const onButtonContainerClick = useCallback(() => {
    window.open(
      "#"
    );
  }, []);

  const onButtonContainer1Click = useCallback(() => {
    window.open(
      "#"
    );
  }, []);

  const onButtonContainer2Click = useCallback(() => {
    window.open(
      "#"
    );
  }, []);

  const onButtonContainer3Click = useCallback(() => {
    window.open(
      "#"
    );
  }, []);

  const onButtonContainer12Click = useCallback(() => {
    window.open(
      "/login"
    );
  }, []);

  const onButtonContainer4Click = useCallback(() => {
    window.open(
      "/login"
    );
  }, []);

  const onButtonContainer13Click = useCallback(() => {
    window.open(
      "#"
    );
  }, []);

  const onButtonContainer5Click = useCallback(() => {
    window.open(
      "#"
    );
  }, []);

  const onButtonContainer6Click = useCallback(() => {
    window.open(
      "#"
    );
  }, []);

  const onButtonContainer7Click = useCallback(() => {
    window.open(
      "#"
    );
  }, []);

  const onButtonContainer8Click = useCallback(() => {
    window.open(
      "#"
    );
  }, []);

  const onButtonContainer9Click = useCallback(() => {
    window.open(
      "#"
    );
  }, []);

  const onButtonContainer10Click = useCallback(() => {
    window.open(
      "#"
    );
  }, []);

  const onButtonContainer11Click = useCallback(() => {
    window.open(
      "#"
    );
  }, []);

  const onSocialIconsClick = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons1Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons2Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons3Click = useCallback(() => {
    window.open("https://twitter.com/animaapp");
  }, []);

  const onButtonContainer14Click = useCallback(() => {
    window.open(
      "#"
    );
  }, []);

  const onButtonContainer15Click = useCallback(() => {
    window.open(
      "#"
    );
  }, []);

  const onSocialIcons4Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons12Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons22Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons5Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons13Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons23Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons6Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons14Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons24Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons7Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons15Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons25Click = useCallback(() => {
    window.open("#");
  }, []);

  const onButtonContainer16Click = useCallback(() => {
    window.open(
      "#"
    );
  }, []);

  const onSocialIcons8Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons16Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons26Click = useCallback(() => {
    window.open("#");
  }, []);

  const onSocialIcons32Click = useCallback(() => {
    window.open("#");
  }, []);

  return (
    <div className="landing-page-v1-desktop1">
      <div className="navbar">
        <div className="logo">
          <img className="logo" src={Logo} />
        </div>
        <div className="navigation-menu">
          <div className="button" onClick={onButtonContainerClick}>
            <img className="arrowright-icon" alt="" src="/arrowright.svg" />
            <div className="label">How it works</div>
          </div>
          <div className="button1" onClick={onButtonContainer1Click}>
            <img className="arrowright-icon1" alt="" src="/arrowright.svg" />
            <div className="label1">Menu 2</div>
          </div>
          <div className="button2" onClick={onButtonContainer2Click}>
            <img className="arrowright-icon2" alt="" src="/arrowright.svg" />
            <div className="label2">Contacto</div>
          </div>
          <div className="highlighted-ctas">
            <div className="button3" onClick={onButtonContainer3Click}>
              <img className="arrowright-icon3" alt="" src="/arrowright.svg" />
              <div className="label3">Crear cuenta</div>
            </div>
            <div className="button4" onClick={onButtonContainer12Click}>
              <i class="fa-solid fa-rocket"></i>
              <div className="label4" src="/login">Entrar</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="header">
          <div className="header1">
            <b className="create-engaging-landing">
              Gestiona el stock de tu restaurante de forma fácil
            </b>
            <div className="build-beautiful-landing">
              ¡Olvídate de contar croquetas! Comparte el stock con la comunidad
              y siente el apoyo de otros restaurantes y bares.
            </div>
          </div>
          <div className="ctas">
            <div className="button5" onClick={onButtonContainer4Click}>
              <i class="fa-solid fa-rocket"></i>
              <div className="label5">Entrar</div>
            </div>
            <div className="button6" onClick={onButtonContainer13Click}>
              <img className="arrowright-icon5" alt="" src="" />
              <div className="label6">Crear cuenta</div>
            </div>
          </div>
        </div>
        <img className="visuals-icon" alt="" src="https://images.pexels.com/photos/17318176/pexels-photo-17318176/free-photo-of-restaurante-trabajando-hombres-cocinando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </div>
      <div className="logo-bar">
        <div className="logos">
          <img
            className="logo-restauracin-icon"
            alt=""
            src={Montaditos}
          />
          <img
            className="logo-restauracin-icon1"
            alt=""
            src={Vicio}
          />
          <img
            className="logo-restauracin-icon2"
            alt=""
            src={TGB}
          />
          <img
            className="logo-restauracin-icon3"
            alt=""
            src={Wok}
          />
          <img
            className="logo-restauracin-icon4"
            alt=""
            src={Foster}
          />
          <img
            className="logo-restauracin-icon5"
            alt=""
            src={LaCueva}
          />
        </div>
      </div>
      <div className="features">
        <div className="headline-subhead">
          <b className="features1">
            Descripción y 3 funcionalidades destacadas
          </b>
          <div className="few-good-reasons">
            Few good reasons why you should use Anima Landing Page Ui Kit to
            make your own pages.
          </div>
        </div>
        <div className="cards-row">
          <div className="feature-card">
            <div className="card-info">
              <div className="icon">
                <img className="magicwand-icon" alt="" src={Stock} />
              </div>
              <div className="text">
                <div className="write-a-feature">Controla tu Stock</div>
                <div className="write-benefits-focused-clear">
                  Tailor Anima's Landing Page UI Kit to your unique style and
                  brand with customisable components, in no time!
                </div>
              </div>
            </div>
            <div className="button7" onClick={onButtonContainer5Click}>
              <div className="label7">Learn More</div>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="feature-card1">
            <div className="card-info1">
              <div className="icon1">
                <img
                  className="flyingsaucer-icon"
                  alt=""
                  src={Ayuda}
                />
              </div>
              <div className="text1">
                <div className="write-a-feature1">
                  Pide ayuda a la comunidad
                </div>
                <div className="write-benefits-focused-clear1">
                  No need to worry about screen size. Anima's Landing Page UI
                  Kit adapts to any screen size, from desktop to mobile.
                </div>
              </div>
            </div>
            <div className="button8" onClick={onButtonContainer6Click}>
              <div className="label8">Learn More</div>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="feature-card2">
            <div className="card-info2">
              <div className="icon2">
                <img className="confetti-icon" alt="" src={Pedido} />
              </div>
              <div className="text2">
                <div className="write-a-feature2">Realiza tu pedido</div>
                <div className="write-benefits-focused-clear2">
                  Zero coding skills required, Anima's Landing Page UI Kit
                  empowers you to create stunning landing pages with ease.
                </div>
              </div>
            </div>
            <div className="button9" onClick={onButtonContainer7Click}>
              <div className="label9">Learn More</div>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="headline-subhead1">
          <b className="discover-our-latest">Imágenes</b>
          <div className="explore-our-portfolio">
            Explore our portfolio and see the latest and greatest projects that
            we've brought to life.
          </div>
        </div>
        <div className="cards-row1">
          <img
            className="project-card-icon"
            alt=""
            src="/project-card@2x.png"
          />
          <img
            className="project-card-icon1"
            alt=""
            src="/project-card@2x.png"
          />
          <img
            className="project-card-icon2"
            alt=""
            src="/project-card@2x.png"
          />
        </div>
      </div>
      <div className="highlighted-cta">
        <div className="highlighted-cta1">
          <div className="header2">
            <b className="get-landing-page">
              Lema guay con mockup de la plataforma
            </b>
            <div className="break-figma-limits">Contar algo más</div>
          </div>
          <div className="ctas1">
            <div className="ctas2">
              <div className="button10" onClick={onButtonContainer8Click}>
                <i class="fa-solid fa-rocket"></i>
                <div className="label10">Crear cuenta</div>
              </div>
            </div>
          </div>
          <img className="mockup-icon" alt="" src="/mockup@2x.png" />
        </div>
      </div>
      <div className="testimonials">
        <div className="headline-subhead2">
          <b className="real-stories-from">Testimonio de clientes</b>
          <div className="see-how-our">
            See how our landing page ui kit is making an impact.
          </div>
        </div>
        <div className="cards-row2">
          <div className="testimonial-card">
            <div className="testimonial-info">
              <div className="client-info">
                <img className="photo-icon" alt="" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div className="person-details">
                  <div className="john-doe">Sarah K.</div>
                  <div className="vice-president">UX Designer @Brello</div>
                </div>
              </div>
              <div className="text3">
                <div className="write-short-specific">
                  "I was looking for a way to streamline my design process and
                  the Anima’s Landing Page UI Kit was a lifesaver! The intuitive
                  design and ease of customisation have saved me hours of time
                  and effort. Highly recommend!"
                </div>
              </div>
            </div>
            <div className="star-rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>  
            </div>
          </div>
          <div className="testimonial-card1">
            <div className="testimonial-info1">
              <div className="client-info1">
                <img className="photo-icon1" alt="" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div className="person-details1">
                  <div className="john-doe1">Michael L.</div>
                  <div className="vice-president1">Creative Director @Yo</div>
                </div>
              </div>
              <div className="text4">
                <div className="write-short-specific1">
                  “The Landing Page UI Kit has been a game changer for my
                  agency. The pre-designed components and templates have helped
                  us deliver projects faster and with more consistency. Great
                  job!"
                </div>
              </div>
            </div>
            <div className="star-rating1">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i> 
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
          <div className="testimonial-card2">
            <div className="testimonial-info2">
              <div className="client-info2">
                <img className="photo-icon2" alt="" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div className="person-details2">
                  <div className="john-doe2">Lauren M.</div>
                  <div className="vice-president2">UI Designer @Boo</div>
                </div>
              </div>
              <div className="text5">
                <div className="write-short-specific2">
                  "Anima’s Landing Page UI Kit has become a staple in my design
                  toolkit. Whether I'm working on a new project or need to make
                  updates to an existing one, this kit has everything I need to
                  get the job done quickly and efficiently."
                </div>
              </div>
            </div>
            <div className="star-rating2">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>  
            </div>
          </div>
        </div>
      </div>
      <div className="pricing">
        <div className="headline-subhead3">
          <b className="pick-your-perfect">
            Precios adaptados a toda la hostelería
          </b>
          <div className="find-the-perfect">
            Find the perfect plan for your business with our flexible pricing
            options.
          </div>
        </div>
        <div className="cards-row3">
          <div className="pricing-card">
            <div className="text6">
              <div className="pricing-info">
                <div className="free">Free</div>
                <div className="pricing1">
                  <b className="b">$0</b>
                  <b className="month">/ month</b>
                </div>
                <div className="short-description-goes">
                  Best for Small Teams or Individuals.
                </div>
              </div>
              <div className="pricing-features">
                <div className="pricing-feature">
                  <i class="fa-solid fa-check"></i>
                  <b className="feature-details-in">
                    Write feature details here
                  </b>
                </div>
                <div className="pricing-feature1">
                  <i class="fa-solid fa-check"></i>
                  <b className="feature-details-in1">
                    Write feature details here
                  </b>
                </div>
                <div className="pricing-feature2">
                  <i class="fa-solid fa-check"></i>
                  <b className="feature-details-in2">
                    Write feature details here
                  </b>
                </div>
                <div className="pricing-feature3">
                  <i class="fa-solid fa-check"></i>
                  <b className="feature-details-in3">Feature Details in plan</b>
                </div>
              </div>
            </div>
            <div className="button11" onClick={onButtonContainer9Click}>
              <div className="label11">Get Started</div>
            </div>
          </div>
          <div className="pricing-card1">
            <div className="text7">
              <div className="pricing-info1">
                <div className="free1">Professional</div>
                <div className="pricing2">
                  <b className="b1">$19</b>
                  <b className="month1">/ month</b>
                </div>
                <div className="short-description-goes1">
                  Ideal for Growing Companies.
                </div>
              </div>
              <div className="pricing-features1">
                <div className="pricing-feature4">
                  <i class="fa-solid fa-check"></i>
                  <b className="feature-details-in4">
                    Write feature details here
                  </b>
                </div>
                <div className="pricing-feature5">
                  <i class="fa-solid fa-check"></i>
                  <b className="feature-details-in5">
                    Write feature details here
                  </b>
                </div>
                <div className="pricing-feature6">
                  <i class="fa-solid fa-check"></i>
                  <b className="feature-details-in6">
                    Write feature details here
                  </b>
                </div>
                <div className="pricing-feature7">
                  <img className="check-icon7" alt="" src="/check.svg" />
                  <b className="feature-details-in7">Feature Details in plan</b>
                </div>
              </div>
            </div>
            <div className="button12" onClick={onButtonContainer10Click}>
              <div className="label12">Get Started</div>
            </div>
          </div>
          <div className="pricing-card2">
            <div className="text8">
              <div className="pricing-info2">
                <div className="special">Enterprise</div>
                <div className="pricing3">
                  <b className="b2">$49</b>
                  <b className="month2">/ month</b>
                </div>
                <div className="short-description-goes2">
                  Ultimate for Enterprise Solutions.
                </div>
              </div>
              <div className="pricing-features2">
                <div className="pricing-feature8">
                  <i class="fa-solid fa-check"></i>
                  <b className="feature-details-in8">
                    Write feature details here
                  </b>
                </div>
                <div className="pricing-feature9">
                  <i class="fa-solid fa-check"></i>
                  <b className="feature-details-in9">
                    Write feature details here
                  </b>
                </div>
                <div className="pricing-feature10">
                  <img className="check-icon10" alt="" src="/check-10.svg" />
                  <b className="feature-details-in10">
                    Feature Details in plan
                  </b>
                </div>
                <div className="pricing-feature11">
                  <i class="fa-solid fa-check"></i>
                  <b className="feature-details-in11">
                    Write feature details here
                  </b>
                </div>
              </div>
            </div>
            <div className="button13" onClick={onButtonContainer11Click}>
              <div className="label13">Get Started</div>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <div className="contact-form1">
          <div className="header3">
            <div className="headline-subhead4">
              <b className="contacta-con-nosotros">Contacta con nosotros</b>
              <div className="got-questions-about">{`¿Quieres más información? ¡Preguntamos lo que quieras! `}</div>
            </div>
          </div>
          <div className="header4">
            <div className="contact-details">
              <div className="contact-details1">
                <div className="phone">
                  <i class="fa-solid fa-phone-volume"></i>
                  <div className="div">+012 345 6789</div>
                </div>
                <div className="mail">
                  <i class="fa-regular fa-envelope"></i>
                  <div className="hellowoprcom">Hello@wopr.com</div>
                </div>
              </div>
              <div className="social-media">
                <div className="encuntranos-tambin">Encuéntranos también</div>
                <div className="social-links">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                </div>
              </div>
            </div>
            <div className="input-fields-button">
              <div className="input-fields">
                <div className="input-field">
                  <div className="icon3">
                    <i class="fa-regular fa-user"></i>
                    <div className="divider" />
                  </div>
                  <div className="nombre">Nombre</div>
                </div>
                <div className="input-field1">
                  <div className="icon4">
                    <i class="fa-regular fa-envelope"></i>
                    <div className="divider1" />
                  </div>
                  <div className="mail1">Mail</div>
                </div>
                <div className="input-field2">
                  <div className="icon5">
                    <img className="lockkey-icon" alt="" src="/lockkey.svg" />
                    <div className="divider2" />
                  </div>
                  <div className="escribe-aqu">Escribe aquí</div>
                </div>
              </div>
              <div className="button14" onClick={onButtonContainer14Click}>
                <img
                  className="arrowright-icon16"
                  alt=""
                  src="/arrowleft.svg"
                />
                <div className="label14">Envíar</div>
                <img className="arrowleft-icon9" alt="" src="/arrowleft.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="highlighted-cta2">
        <img className="visuals-icon1" alt="" src={Inteligente} />
        <div className="header5">
          <div className="header6">
            <b className="get-landing-page1">
              ¡Haz que tu negocio crezca de forma inteligente!
            </b>
            <div className="break-the-figma">
              Break the Figma limits and explore the endless possibilities with
              Anima.
            </div>
          </div>
          <div className="ctas3">
            <div className="button15" onClick={onButtonContainer15Click}>
              <div className="label15">Get Started</div>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="headline-subhead5">
          <b className="conoce-a-nuestro">Conoce a nuestro equipo</b>
          <div className="get-to-know">
            Get to know the faces behind the scenes and learn about the values
            that drive us.
          </div>
        </div>
        <div className="cards-row4">
          <div className="member-card">
            <img className="profile-image-placeholder-1" src={Irene} />
            <div className="text9">
              <div className="john-doe3">Irene Vazquez</div>
              <div className="lead-designer">Full Stack</div>
            </div>
            <div className="social-links1">
                <i class="fa-brands fa-twitter" onClick={onSocialIcons4Click}></i>
                <i class="fa-brands fa-linkedin" onClick={onSocialIcons12Click}></i>
                <i class="fa-brands fa-github" onClick={onSocialIcons22Click}></i>
            </div>
          </div>
          <div className="member-card1">
            <img className="profile-image-placeholder-11" src={Mercedes} />

            <div className="text10">
              <div className="john-doe4">Mercedes Sánchez</div>
              <div className="lead-designer1">Full Stack</div>
            </div>
            <div className="social-links2">
            <i class="fa-brands fa-twitter" onClick={onSocialIcons5Click}></i>
                <i class="fa-brands fa-linkedin" onClick={onSocialIcons13Click}></i>
                <i class="fa-brands fa-github" onClick={onSocialIcons23Click}></i>
            </div>
          </div>
          <div className="member-card2">
            <img className="profile-image-placeholder-12" src={Fran} />
            <div className="text11">
              <div className="john-doe5">Francisco Julian</div>
              <div className="lead-designer2">Full Stack</div>
            </div>
            <div className="social-links3">
                <i class="fa-brands fa-twitter" onClick={onSocialIcons6Click}></i>
                <i class="fa-brands fa-linkedin" onClick={onSocialIcons14Click}></i>
                <i class="fa-brands fa-github" onClick={onSocialIcons24Click}></i>
            </div>
          </div>
          <div className="member-card3">
            <img className="profile-image-placeholder-13" src={Matteo}
            />
            <div className="text12">
              <div className="john-doe6">Mateo Scilleri</div>
              <div className="lead-designer3">Full Stack</div>
            </div>
            <div className="social-links4">
                <i class="fa-brands fa-twitter" onClick={onSocialIcons7Click}></i>
                <i class="fa-brands fa-linkedin" onClick={onSocialIcons15Click}></i>
                <i class="fa-brands fa-github" onClick={onSocialIcons25Click}></i>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="highlighted-cta3">
        <div className="highlighted-cta4">
          <div className="content">
            <div className="text13">
              <b className="get-landing-page2">¡Descárgala ya!</b>
              <div className="break-the-figma-container">
                <a
                  className="anima"
                  href={`#`}
                  target="_blank"
                >
                  Anima
                </a>
              </div>
            </div>
            <div className="button16" onClick={onButtonContainer16Click}>
              <img className="arrowright-icon18" alt="" src="/arrowright.svg" />
              <div className="label16">Get Started</div>
              <img className="arrowleft-icon11" alt="" src="/arrowright.svg" />
            </div>
          </div>
          <img className="mockup-icon1" alt="" src={FotoFinal} />
        </div>
      </div> */}

      {/* <div className="footer">
        <div className="anima-landing-page">© 2024 WOPR</div>
        <div className="social-links5">
          <img
            className="social-icons16"
            alt=""
            src="/social-icons-1.svg"
            onClick={onSocialIcons8Click}
          />
          <img
            className="social-icons17"
            alt=""
            src="/social-icons.svg"
            onClick={onSocialIcons16Click}
          />
          <img
            className="social-icons18"
            alt=""
            src="/social-icons-3.svg"
            onClick={onSocialIcons26Click}
          />
          <img
            className="social-icons19"
            alt=""
            src="/social-icons-1.svg"
            onClick={onSocialIcons32Click}
          />
        </div>
      </div> */}
       <div className="container-fluid">
        <footer className="footer bg-light mt-auto py-1 text-center text-dark">
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
