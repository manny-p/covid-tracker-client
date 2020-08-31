import React, {useContext, useState} from "react"

import {Link} from "react-router-dom";
import "./auth.css";
import {Context} from '../store'

const styles = {
    backgroundColor: "black",
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
}

export default ({history}) => {
    const {setUser, setToken, setCountries} = useContext(Context)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    // global state
    // const [, setUser] = useGlobalState("user")
    // const [, setToken] = useGlobalState("token")

    const handleEmail = e => setEmail(e.target.value)
    // console.log(handleEmail)

    const handlePassword = e => setPassword(e.target.value)
    // console.log(handlePassword)


    const handleSubmit = async (e) => {

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
            console.log("FETCHDATA PUNK BITCH: ", fetchData.user);
            setToken(fetchData.token)
            console.log(`Token: ${fetchData.token}`)
            setCountries(fetchData.user.countries)
            console.log("Countries:", fetchData.user.countries)
            setUser(fetchData.user)
            console.log('User :', JSON.stringify(fetchData.user,null,2))

            history.push("/")

        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div style={styles}>
            <div className='register'>
                <form className="register-form" onSubmit={handleSubmit}>
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

