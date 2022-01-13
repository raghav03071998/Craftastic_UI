import React from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Cart from './components/Cart'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
    return (
        <div>

            <BrowserRouter>
            
                <Switch>

                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    
                    <Route path='/signin'>
                        <SignIn/>
                    </Route>

                    <Route path='/signup'>
                        <SignUp/>
                    </Route>

                    <Route path='/cart'>
                        <Cart/>
                    </Route>

                    <Route path='/productdetails'>
                        <ProductDetails/>
                    </Route>

                </Switch>
            
            </BrowserRouter>

        </div>
    )
}

export default App
