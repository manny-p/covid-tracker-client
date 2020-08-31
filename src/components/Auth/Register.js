import React, {useState, useContext, useRef} from "react"
import {Context} from "../../store"
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

    const passwordCheck = useRef(null)
    const emailCheck = useRef(null)

    const {setUser, setToken} = useContext(Context)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // global state
    // const [, setToken] = useGlobalState("token")
    // const [, setUser] = useGlobalState("user")

    const handleEmail = e => setEmail(e.target.value)

    const handlePassword = e => setPassword(e.target.value)

    const handleSubmit = async (e) => {

        try {
            // const url = "http://localhost:4000/users/register"
            const url = "https://covid-tracker-api-sei.herokuapp.com/users/register"

            // stop form reloading aka browser default behavior
            e.preventDefault()

            // fetch request (backend)

            // if  (password.length < 5) {
            //     passwordCheck.current.value = ''
            //     emailCheck.current.value = ''
            // }



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
            setToken(saveData.token)
            // console.log(saveData.token)

            setUser(saveData.user)
            console.log(JSON.stringify(saveData.user,null, 2))
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
                <input type="text" id='email' ref={emailCheck} autoComplete="off" onChange={handleEmail}/>
                <label htmlFor='password'>Password</label>
                <input autoComplete="off" type="password" id='password' value={password} ref={passwordCheck} onChange={handlePassword}/>
                <button type='submit'>Sign Up</button>
                <p className="message">Already registered? <Link to="/login"><span
                    style={{color: "blue"}}>Sign In</span></Link></p>
            </form>
        </div>
        </div>
    )
}

