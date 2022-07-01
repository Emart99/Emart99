import { Navb } from "../components/Navb/Navb.js"
import { Footer } from "../components/Footer/Footer.js"
import { ReactComponent as GithubLogo } from "../components/Footer/github.svg"
import { useForm, ValidationError } from "@formspree/react"
import toast, { Toaster } from "react-hot-toast"
import Fade from 'react-reveal/Fade';
import CV from "../assets/EZEQUIELMARTINO.docx"
import { ContactMobile } from "../components/ContactMobile/ContactMobile.js"
import { useState } from "react"
export const Home = () => {
    const [state, handleSubmit] = useForm("xwkyjzje")
    const [show, setShow] = useState(false);

    const RealHandleSubmit = async (e) => {
        e.preventDefault()
        handleSubmit(e).then((response) => {
            if (response.body.error) {
                return toast.error(response.body.error)
            }
            setShow(false)
            return toast.success("Message sent")
        })
    }

    return (
        <div className="mainwrapper">
            <Navb />
            
                <header id="coffe" className="container-fluid descripcion">
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
                </header>
            
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
                            <p className="portfolio-subtext">its a responsive e-commerce type application that has 8 views, built with ReactJs + Bootstrap, Kotlin + Spring, Mysql, Neo4J, Mongodb, Redis and Dockerized.</p>
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
                    <hr className="solid hidden?" />
                    <div className="row portfolio-rampapp">
                        <Fade duration={1500} left>
                            <div className="col-md-6 col-12 mb-5 d-flex flex-column align-items-center">
                                <img src="https://i.imgur.com/tpn4YbZ.gif" alt="..." className="portfolio-mobile-image" />
                            </div>
                        </Fade>
                        <div className="col-md-6 col-12 d-flex flex-column justify-content-center">
                            <h2 >RampApp</h2>
                            <p className="portfolio-subtext">It's a mobile parking application, built with React Native + Paper, Kotlin + Spring, Mysql </p>
                            <button onClick={() => {
                                window.open("https://github.com/Emart99/RampApp", "_blank")
                            }} className="btn btn-outline-light portfolio-button align-self-end">
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
                            <h1>Let's get in touch</h1>
                            <h5>Email</h5>
                            <p className="contact-text"> ezequielmartino1999@gmail.com</p>
                            <h5>Telephone</h5>
                            <p className="contact-text">+54 11-3771-0208</p>
                            <h5>Address</h5>
                            <p className="contact-text">Jose Hernandez 3964 , Villa Ballester, Buenos Aires, Argentina</p>
                            <Footer />
                        </div>
                        <ContactMobile state={state} ValidationError={ValidationError} RealHandleSubmit={RealHandleSubmit} show={show} setShow={setShow} />

                        <form onSubmit={RealHandleSubmit} className="col-md-6 col-12 hiddenMobile">
                            <div className="form-floating mb-3">
                                <input placeholder="a" type="text" name="name" className="form-control" id="full-name" />
                                <label htmlFor="full-name">Name</label>
                            </div>
                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                            <div className="form-floating mb-3">
                                <input placeholder="a" type="email" name="email" className="form-control" id="email" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                            <div className="form-floating mb-3">
                                <input placeholder="a" type="telephone" name="telephone" className="form-control" id="telephone" />
                                <label htmlFor="telephone">Phone</label>
                            </div>
                            <ValidationError prefix="Telephone" field="telephone" errors={state.errors} />
                            <div className="form-floating mb-3">
                                <textarea placeholder="a" name="message" className="form-control contact-message" id="message"></textarea>
                                <label htmlFor="message">&nbsp;&nbsp;Message</label>
                            </div>
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                            <button type="submit" disabled={state.submitting} className=" btn btn-outline-dark btn-block col-6 col-md-4 m-auto mt-4">Send</button>
                        </form>
                    </div>
                </div>
            </section>
            <Toaster position="bottom-center" reverseOrder={false} />
        </div>
    )
}