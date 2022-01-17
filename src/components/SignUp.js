import React, { useState, useRef } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { Form, Card, Button,Alert } from 'react-bootstrap'
import SignUpService from '../services/SignUpService'
import Footer from './Footer'
import Home from './Home'
import Logo from './Logo'
import '../css/SignUp.css'
function SignUp() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error,setError] = useState('')
    const [signedUp, setSignedUp] = useState(false)
    const [loading,setLoading] = useState(false)
    //const {signup} = useAuth()
    
    const userObj = {
        name : "",
        mobileNumber : "",
        email : "",
        password : ""
    }
    async function handleSubmit(e)
    {
        e.preventDefault()
        setLoading(true);
        console.log(passwordRef.current.value,passwordConfirmRef.current.value)
        if(nameRef.current.value=='')
        {
            setLoading(false);
            return setError('Name field cannot be empty');
        }
        if(emailRef.current.value=='')
        {
            setLoading(false);
            return setError('Email field cannot be empty');
        }
        if(passwordRef.current.value=='')
        {
            setLoading(false);
            return setError('Paaword field cannot be empty');
        }
        if(passwordRef.current.value!==passwordConfirmRef.current.value)
        {
            setLoading(false);
            return setError('Passwords do not match');
        }
        try{
           // setLoading(true);
            setError('')
            console.log(emailRef.current.value,passwordConfirmRef.current.value)
            var userData = {'username':nameRef.current.value, 'email':emailRef.current.value,'password':passwordRef.current.value};
            console.log(userData);
            var response = await SignUpService.saveUser(userData)
            console.log(response)
            if(response.data.Error == undefined)
            {
                console.log('Signedup')
                return setSignedUp(true);
                // <Route exact path="/">
                // {/* {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />} */}
                // </Route>
            }
            if(response.data.Error !=undefined && response.data.Error.code== "auth/email-already-in-use")
            {
                setLoading(false);
                return setError('Email already exists');
            }
        }   
        catch(error){
            console.log(error)
            setLoading(false);
            return setError('Failed to create the account')
        }   
        setLoading(false);
    }
    const [user,setUser] = useState(userObj)

    const saveUser=(e)=>{
     //   e.preventDefault()
        console.log(user);
    //  SignUpService.saveUser(user)
    //  .then(response=>{
    //     console.log(response.data)
    //    //  e.target.reset();
    //  })
    }

    const onChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    if(signedUp)
    {
        console.log('h111')
        return(
        <Redirect to={{ pathname: '/' }} />)
    }
    else
    {
    return (
        
        <>
        <Card>
            </Card>
        <div id = "signUpDiv">
            <Logo/>
            <Form id = "signUpForm" onSubmit={handleSubmit}>
            <Card.Body>
                <h2 id = "signUpText" className='text-center mb4' >
                    Sign Up
                </h2>
                {error && <Alert variant = "danger">{error}</Alert>}
            </Card.Body>
            <input id='name' type="text" placeholder='Your Name' name="name" ref ={nameRef}   required></input>
            <input id='mobileNumber' type="text" placeholder='Mobile Number' name="mobileNumber"   required ></input>
            <input id='email' type="text" placeholder='Email Id' name="email" ref = {emailRef}   required ></input>
            <input id='password' type="password" placeholder='Password' name="password" ref = {passwordRef}   required ></input>
            <input id='confirmPassword' type="password" placeholder='Confirm Password' name="confirmPassword" ref = {passwordConfirmRef}   required ></input>
            <button id = 'submit' disabled ={loading} type='submit' value= 'Create an account'  className = "w-100" onClick={handleSubmit}>Create an account</button> 
            </Form>
            <div id = "signInForm">
            <p id='para' className='text-center mb4'>Already have an account?</p>
            <a href='/signin'><input id = 'signIn' type='submit' value= 'Sign In'  className = "w-100"></input></a>
            </div>
           <Footer></Footer>
        </div>
        </>
    
       // {/* // <div id='signUpDiv'>

        //     <form id='signUpForm' onSubmit={saveUser}>
        //         <label id = "signUpText">Sign-Up</label>

        //         <input id='name' type="text" placeholder='Your Name' name="name" onChange={onChange} required></input>

        //         <input id='mobileNumber' type="text" placeholder='Mobile Number' name="mobileNumber"  onChange={onChange} required ></input>

        //         <input id='email' type="text" placeholder='Email Id' name="email"  onChange={onChange} required ></input>

        //         <input id='password' type="password" placeholder='Password' name="password"  onChange={onChange} required ></input>

        //         <input id='button' type="submit" value="Submit" ></input>

        //     </form>

        //     <p id='para'>Already have an account ?</p>

        //     <a id='signin' href='/signin'>Sign In</a>

        // </div> */}
    );
    }
}

export default SignUp
