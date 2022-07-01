import Modal from 'react-bootstrap/Modal';
import { ContactForm } from '../ContactForm/ContactForm';
import "./ContactMobile.css"

export const ContactMobile = ({ show, setShow}) => {

    return (
        <div className="hiddenDesktop">
            <button onClick={() => setShow(true)} className="btn btn-outline-dark">Contact Me</button>
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <ContactForm setShow={setShow} hidden={"hiddenDesktop"}/> 
                </Modal.Body>
            </Modal>
        </div>
    )
}