import React, {useState} from "react"
import useGlobalState from "../../state"
import {Link} from "react-router-dom"
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

export default ({history}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // global state
    const [, setToken] = useGlobalState("token")
    const [, setUser] = useGlobalState("user")

    const handleEmail = e => setEmail(e.target.value)

    const handlePassword = e => setPassword(e.target.value)

    const handleSubmit = async (e) => {

        try {
            const url = "http://localhost:4000/users/register"

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

            // parse the token, save data
            const saveData = await results.json()

            // higher order function
            // take the initial value of token and modify it
            setToken(() => saveData.token)
            // console.log(saveData.token)

            setUser(() => saveData.user)
            // console.log(saveData.user)

            history.push("/")

        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div style={styles}>
        <div className='register'>
            <form className="redgister-form" onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input type="text" id='email' autoComplete="off" onChange={handleEmail}/>
                <label htmlFor='password'>Password</label>
                <input autoComplete="off" type="password" id='password' value={password} onChange={handlePassword}/>
                <button type='submit'>Sign Up</button>
                <p className="message">Already registered? <Link to="/login"><span
                    style={{color: "blue"}}>Sign In</span></Link></p>
            </form>
        </div>
        </div>
    )
}

