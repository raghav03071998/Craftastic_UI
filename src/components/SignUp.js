import React, { useState } from 'react'
import SignUpService from '../services/SignUpService'
import Footer from './Footer'
function SignUp() {

    const userObj = {
        name : "",
        mobileNumber : "",
        email : "",
        password : ""
    }

    const [user,setUser] = useState(userObj)

    const saveUser=(e)=>{
        e.preventDefault()
        console.log(user);
    // SignUpService.saveUser(user)
    // .then(response=>{
    //     console.log(response.data)
    //     e.target.reset();
    // })
    }

    const onChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    return (
        <div id = "signUpDiv">
            <img src="./assets/craftastic_logo.png" alt="Italian Trulli" id = "logo"></img>
            <form id = "signUpForm">
            <label id = "signUpText">Sign Up</label>
            <input id='name' type="text" placeholder='Your Name' name="name" onChange={onChange} required></input>
            <input id='mobileNumber' type="text" placeholder='Mobile Number' name="mobileNumber"  onChange={onChange} required ></input>
            <input id='email' type="text" placeholder='Email Id' name="email"  onChange={onChange} required ></input>
            <input id='password' type="password" placeholder='Password' name="password"  onChange={onChange} required ></input>
            <input id='confirmPassword' type="password" placeholder='Confirm Password' name="password"  onChange={onChange} required ></input>
            <input id = 'submit' type='submit' value= 'Create an account'></input>
            <p id='para'>Already have an account ?</p>
            <input id = 'signIn' type='submit' value= 'Sign In'></input>
            </form>
           <Footer></Footer>
        </div>
    
        // <div id='signUpDiv'>

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

        // </div>
    );
}

export default SignUp
