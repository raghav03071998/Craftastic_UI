import React, { useState, useRef } from 'react'
import { Form, Card, Button,Alert } from 'react-bootstrap'
import SignUpService from '../services/SignUpService'
import Footer from './Footer'
function SignUp() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error,setError] = useState('')
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
        console.log('h1');
        e.preventDefault()
        setLoading(true);
        console.log(passwordRef.current.value,passwordConfirmRef.current.value)
        if(passwordRef.current.value!==passwordConfirmRef.current.value)
        {
            console.log('h1 e');
            return setError('Passwords do not match');
        }
        try{
            setError('')
            console.log(emailRef.current.value,passwordConfirmRef.current.value)
            var userData = {'username':nameRef.current.value, 'email':emailRef.current.value,'password':passwordRef.current.value};
            console.log(userData);
            var response = await SignUpService.saveUser(userData)
            console.log(response)
        }   
        catch(error){
            console.log(error)
            setError('Failed to create the acount')
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

    return (
        <>
        <Card>
            </Card>
        <div id = "signUpDiv">
            <img src="./assets/craftastic_logo.png" alt="Italian Trulli" id = "logo"></img>
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
            <button id = 'submit' type='submit' value= 'Create an account'  className = "w-100" onClick={handleSubmit}>Create an account</button>
            <p id='para' className='text-center mb4'>Already have an account ?</p>
            <input id = 'signIn' type='submit' value= 'Sign In'  className = "w-100"></input>
            
            </Form>
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

export default SignUp
