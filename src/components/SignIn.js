import React, { useState } from 'react'

function SignIn() {

    const credentialsObj = {
        email_mobile : "",
        password : ""
    }

    const [credentials,setCredentials] = useState(credentialsObj)

    const saveUser=(e)=>{
        e.preventDefault()
        console.log(credentials);
    }

    const onChange=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form id='signInForm' onSubmit={saveUser}>
                <input id='email_mobile' type="text" placeholder='Email or Mobile Number' name="email_mobile"  onChange={onChange} required />
                <input id='password' type="password" placeholder='Password' name="password"  onChange={onChange} required />
                <input id='button' type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SignIn
