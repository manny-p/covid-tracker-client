import React, {useState} from "react"
import useGlobalState from "../../state";
import {Link} from "react-router-dom";
import "./auth.css";

const styles = {
    backgroundColor: 'rgb(66, 101, 138)',
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
}

export default  ({history}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // global state
    const [, setUser] = useGlobalState("user")
    const [, setToken] = useGlobalState("token")

    const handleEmail = e => setEmail(e.target.value)
    // console.log(handleEmail)

    const handlePassword = e => setPassword(e.target.value)
    // console.log(handlePassword)

    const handleSubmit = async (e) => {
        console.log("SUBMITED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        try {
            const url = "http://localhost:4000/users/login"
            // stop form reloading aka browser default behavior
            e.preventDefault()

            // fetch request (backend)
            const results = await fetch(url, {
                // fetch options
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password}),
            })

            // parse the token
            const fetchData = await results.json();

            // higher order function
            // take the initial value of token and modify it
            setToken(() => fetchData.token)
            console.log(`Token: ${fetchData.token}`)

            setUser(() => fetchData.user)
            console.log(`User ${fetchData.user}`)
            console.trace(`User ${fetchData.user}`)

            history.push("/")

        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div style={styles}>
            <div className='login'>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email</label>
                    <input type="text" id='email' autoComplete="off" onChange={handleEmail}/>
                    <label htmlFor='password'>Password</label>
                    <input autoComplete="off" type="password" id='password' value={password} onChange={handlePassword}/>
                    <button type='submit'>Login</button>
                    <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
                </form>
            </div>
        </div>
    )
}

