import { Navb } from "../components/Navb/Navb.js"
import { MediaButtons } from "../components/MediaButtons/MediaButtons.js"
import { ReactComponent as GithubLogo } from "../components/MediaButtons/github.svg"
import Fade from 'react-reveal/Fade';
import CV from "../assets/EZEQUIELMARTINO.docx"
import { ContactMobile } from "../components/ContactMobile/ContactMobile.js"
import { useState } from "react"
import { ContactForm } from "../components/ContactForm/ContactForm.js"
import { Toaster } from "react-hot-toast";

export const Home = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="mainwrapper">
            <Navb />
                <section id="coffe" className="container-fluid descripcion">
                    <div className="row ">
                        <div className="col-12 col-md-6 text-white align-self-center mb-5 text-center">
                            <p className="descripcion-text">Hello, im Ezequiel Martino</p>
                            <h1>Im a full-stack web developer</h1>
                            <div className="coffe-texture" />
                            <br/>
                            <a href={CV} download="EZEQUIELMARTINO.docx">
                                <button className="btn btn-outline-light ">Download my resume</button>
                            </a>
                        </div>
                        <Fade right duration={1500} >
                        <div className="col-12 col-md-6 justify-content-center">
                            <img className="coffe-cup " src="https://www.picng.com/upload/mug_coffee/png_mug_coffee_12098.png" alt="..." />
                        </div>
                        </Fade>
                    </div>
                </section>
            <section className="about d-flex align-items-center" id="about">
                <div className="container">
                    <div className="row">
                        <Fade left duration={1500}>
                            <div className="col-12 col-md-6 mb-5">
                                <img className="about-image" src="https://i.imgur.com/sxS3v0F.png" alt="..." />
                            </div>
                        </Fade>
                        <div className="col-12 col-md-6 about-text">
                            <p>
                                I'm Ezequiel Martino a passionate developer and student based in Buenos Aires, Argentina focused on creating digital experiences on the web.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="portfolio" id="portfolio">
                <div className="container text-white">
                    <div className="row portfolio-difficult ">
                        <div className="col-md-6 col-12 mb-5 d-flex flex-column portfolio-difficult justify-content-center">
                            <h2>Difficult</h2>
                            <p className="portfolio-subtext">its a responsive e-commerce type application that has 6 views, built with ReactJs + Bootstrap, Kotlin + Spring, Mysql, Neo4J, Mongodb, Redis and Dockerized.</p>
                            <button onClick={() => {
                                window.open("https://github.com/Emart99/Difficult", "_blank")
                            }} className="btn btn-outline-light portfolio-button" >
                                <GithubLogo className="github-button" /> Source code
                            </button>
                        </div>
                        <Fade duration={1500} right>
                            <div className="col-md-6 col-12">
                                <img src="https://i.imgur.com/WOPtyJ2.gif" alt="..." className="portfolio-image" />
                            </div>
                        </Fade>
                    </div>
                    <br />
                    <hr className="solid" />
                    <div className="row portfolio-rampapp">
                        <Fade duration={1500} left>
                            <div className="col-md-6 col-12 mb-2 d-flex flex-column align-items-center">
                                <img src="https://i.imgur.com/tpn4YbZ.gif" alt="..." className="portfolio-mobile-image" />
                            </div>
                        </Fade>
                        <div className="col-md-6 col-12 d-flex flex-column justify-content-center">
                            <h2 >RampApp</h2>
                            <p className="portfolio-subtext">It's a mobile parking application, built with React Native + Paper, Kotlin + Spring, Mysql </p>
                            <button onClick={() => {
                                window.open("https://github.com/Emart99/RampApp", "_blank")
                            }} className="btn btn-outline-light portfolio-button mb-5 align-self-end">
                                <GithubLogo className="github-button" /> Source code
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact" id="contact">
                <div className="container mb-5 ">
                    <div className="row">
                        <div className="col-md-6 col-12 contact-info ">
                            <h1 className="mb-5">Let's get in touch</h1>
                            <h5>Email</h5>
                            <p className="contact-text"> ezequielmartino1999@gmail.com</p>
                            <h5>Telephone</h5>
                            <p className="contact-text">+54 11-3771-0208</p>
                            <h5>Address</h5>
                            <p className="contact-text">Jose Hernandez 3964 , Villa Ballester, Buenos Aires, Argentina</p>
                            <MediaButtons />
                        </div>
                        <ContactMobile show={show} setShow={setShow} />
                        <ContactForm setShow={setShow} hidden={"hiddenMobile"}/>
                    </div>
                </div>
            </section>
            <Toaster position="bottom-center" reverseOrder={false} />
        </div>
    )
}