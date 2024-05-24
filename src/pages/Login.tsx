import React, { FormEvent } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";



import './Login.css'





function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const navigate = useNavigate()

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log("Hai cliccato Invia.")
        setEmailError("")
        setPasswordError("")

        if ("" === email) {
            setEmailError("Inserisci la tua email")
            return
        }
        if ("" === password) {
            setPasswordError("inserisci la tua vera password")
            return
        }
        if (password.length < 7) {
            setPasswordError("i caratteri devono essere minimo 8 o più!")
            return
        }

        navigate("/App")
    }



    return (
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input name="boia"
                        value={email}
                        placeholder="Inserisci la tua email quì"
                        onChange={ev => setEmail(ev.target.value)}
                        className={"user-box"}

                    />
                    <label className="'errorLabel">{emailError}</label>
                </div>
                <div className="user-box">
                    <input
                        name="ciao"
                        value={password}
                        placeholder="Inserisci la tua password quì"
                        onChange={ev => setPassword(ev.target.value)}
                        className={"user-box"}
                    />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <input
                    className={"inputButton"}
                    type="submit"
                    value={"Submit"}



                />



            </form>
        </div>
    )


}


export default Login