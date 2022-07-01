import { useForm, ValidationError } from "@formspree/react"
import toast from "react-hot-toast"

export const ContactForm = ({hidden, setShow}) =>{
    const [state, handleSubmit] = useForm("xwkyjzje")

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


    return(
        <form onSubmit={RealHandleSubmit} className={"col-md-6 col-12 contact-form "+hidden}>
        <h2 className="text-center pb-5 hiddenDesktop">Contact Me</h2>
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

    )
}