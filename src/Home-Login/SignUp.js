import React, {useState} from 'react'

export default () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = e => setEmail(() => e.value)
    const handlePassword = e => setPassword(() => e.value)

    return (
        <div className='login'>
            <form className="login-form">
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="email address" value={email} onChange={handleEmail}/>
                <input type="password" placeholder="password" value={password} onChange={handlePassword}/>
                <button>Sign Up</button>
                <p className="message">Already registered? <a href="#">Sign In</a></p>
            </form>
        </div>
    )
}

