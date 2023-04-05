import { useState } from "react"
import { CardAviso } from "./CardAviso"

export const Form = () => {

    const [form, setForm] = useState({
        nombreCompleto: "",
        email: ""
    })
    
    const { nombreCompleto, email } = form

    const [show, setShow] = useState(false);
    const [err, setErr] = useState(false);

    const onChangeInput = ({ target }) => {
        const { name, value } = target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (nombreCompleto.trim().length >= 5) {
            setShow(true)
            setErr(false)
            event.target.reset()
        } else {
            setShow(false)
            setErr(true)
        }
    }

    return (
        <div >
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Nombre Completo</label>
                    <input type="text" placeholder="Ingresá tu nombre completo" onChange={onChangeInput} name="nombreCompleto" />
                </div>
                <div>
                    <label>Escribe tu e-mail</label>
                    <input type="email" placeholder="Ingresá tu e-mail" onChange={onChangeInput} name="email" />
                </div>
                <div>
                    <button type="submit" >Enviar</button>
                </div>
            </form>

            {err ? <p>Los datos estan incompletos, por favor rellenar todo el formulario.</p> : null}
            {show && <CardAviso nombreCompleto={nombreCompleto} />}
        </div>
    )
}

