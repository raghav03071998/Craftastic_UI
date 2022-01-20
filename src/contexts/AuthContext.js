import React, {useContext, useEffect, useState} from 'react'
import {auth} from '../firebase'
const authContext = React.createContext();

export function useAuth()
{
    return useContext(authContext)

}

export  function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState()

    function signup(email, password)
    {
        var promise = auth.createUserWithEmailAndPassword(email, password).then(()=>{
            auth.signInWithEmailAndPassword(email,password).catch(function(error) {console.log(error)});
        var user =auth.currentUser;
        user.sendEmailVerification().then(function() {
            window.alert("Verification link sent to your email. Kinldy check to verify your account")
        }).catch(function(error) {
            console.log(error);
            // An error happened.
        });
        }).catch(function(error){
            return error;
        });
        
        
        // promise.then(function(user) {// You are forgetting this reference.
        //   console.log(user);
          
        //   user.sendEmailVerification()
        //  // user.sendEmailVerification();
        //   // You can also call this.
        // //   auth().currentUser.sendEmailVerification();
        //   // Email sent.
        // }, function(error) {
        //   console.log(error);
        // })
        // return auth.createUserWithEmailAndPassword(email,password)

    }
    useEffect(()=>
    {
        const unsubscribe = auth.onAuthStateChanged(user => setCurrentUser(user))
        return unsubscribe;
    },[])
    auth.onAuthStateChanged(user=>
        {
            setCurrentUser(user);
        })
    const value = {
        currentUser,
        signup
    }
    return (
       <authContext.Provider value={value}>
           {children}
       </authContext.Provider>
    )
}







