import React, { useState, useRef } from 'react'
import { Route, Redirect } from 'react-router-dom';
import SignInService from '../services/SignInService'
import Footer from './Footer'
import Home from './Home'
import Logo from './Logo'
import { Form, Card, Button,Alert } from 'react-bootstrap'
import '../css/SignIn.css'
function SignIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const [signedIn, setSignedIn] = useState(false)

    const credentialsObj = {
        email_mobile : "",
        password : ""
    }
    async function handleSubmit(e)
    {
        e.preventDefault()
        setLoading(true);
        try{
            setError('')
            var userData = {'email':emailRef.current.value,'password':passwordRef.current.value};
            console.log(userData);
            var response = await SignInService.login(userData)
            if(response.data.Error == undefined)
            {
                setSignedIn(true);
                // <Route exact path="/">
                // {/* {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />} */}
                // </Route>
            }
            if(response.data.Error !=undefined && response.data.Error.code== "auth/user-not-found")
            {
                return setError('User not found!');
            }
            if(response.data.Error !=undefined && response.data.Error.code== "auth/invalid-email")
            {
                return setError('Invalid email address');
            }
            if(response.data.Error !=undefined && response.data.Error.code== "auth/wrong-password")
            {
                return setError('Incorrect Password!');
            }
            //auth/wrong-password
        }   
        catch(error){
            console.log(error)
            setError('Failed to login user')
        }   
        setLoading(false);
    }
    const [credentials,setCredentials] = useState(credentialsObj)

    const saveUser=(e)=>{
        e.preventDefault()
        console.log(credentials);
    }

    const onChange=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    console.log(signedIn)
    if(signedIn)
    {
        console.log('h111')
        return(
        <Redirect to={{ pathname: '/' }} />)
    }
    else
    {
    return (
        
        <div>
            
             <Logo/>
             <Form id = "signInForms">
            <Card.Body>
                <h2 id = "signUpText" className='text-center mb4' >
                    Sign In
                </h2>
                 {error && <Alert variant = "danger">{error}</Alert>} 
            </Card.Body>
            <input id='email' type="text" placeholder='Email Id' name="email" ref = {emailRef}   required ></input>
            <input id='password' type="password" placeholder='Password' name="password" ref = {passwordRef}  required ></input>
            <button disabled = {loading} id = 'submit' type='submit' value= 'Sign In'  className = "w-100" onClick={handleSubmit}>Sign In</button> 
            <a href = "/forgotPassword" id = "forgotPassword"  className = "text-center mb4">Forgot Password?</a>
             </Form>
             <h2 id = "newToCraftastic">New to Craftastic?</h2>
             <a href = "/signUp"><input id = 'signUp' type='submit' value= 'Sign Up'  className = "w-100"></input></a>
        </div>
    )
    }
}

export default SignIn
