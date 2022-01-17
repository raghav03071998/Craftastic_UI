import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeService from '../services/HomeService'
import '../css/Home.css'

function Home() {

    const [categories,setCategories] = useState([]);
    
    useEffect(()=>{
        HomeService.categories()
        .then(response=>response.data)
         .then(res=>{
            console.log(res)
             setCategories(res)
        })
    },[])

    return (
        <div>

            <div>
                <Header/>
            </div>

            <div>
                <img id='craftastic' src='./logo/craft.jpg'/>
                <p id='title'>Buy or sell hand-crafted items at one place</p>
                <a href='/signup'><button id='join'> Join Now</button></a>
            </div>

            <div>
                <p id='cat-tag'>Categories</p>
                <button id='cat-btn'>View All</button>
                <div id='cat-img'>
                {
                    categories.map((cat)=>(
                            <img className='rendered-img' src={`${cat.image}`}/>
                    ))
                }
                </div> 
            </div>

            <div>
                <p id='discount-tag'>Items with discount</p>
                <button id='discount-btn'>View All</button>
            </div>

            <div>
                <p id='auction-tag'>Items for auction</p>
                <button id='auction-btn'>View All</button>
            </div>

            <div>
                <p id='seller-p1'>Are you Craftastic?</p>
                <p id='seller-p2'>Sell to millions of customers on Craftastic, all across the globe!</p>
                <p id='seller-p3'>All you need to sell on Craftastic is</p>
                <a href='/signin'><button id='seller-btn'>Create your Seller Account</button></a>
                <img id='gstin-icon' src='./logo/doc-icon.png' />
                <p id='gstin'>GSTIN</p>
                <img id='bank-icon' src='./logo/bank-account.png' />
                <p id='bank'>Bank Account</p>
                <img id='product-icon' src='./logo/product.png' />
                <p id='product'>Product to sell</p>
            </div>

            <div>
                <p id='why-sell-tag'>Why sell at Craftastic?</p>
                <div>
                    <div id='box-1'/>
                    <img id='rupee-icon' src='./logo/rupee.png' /> 
                    <p id='box-1-p1'>Sell directly to the buyer</p>
                    <p id='box-1-p2'>Sell your products directly to the customers at minimum commision</p>
                </div>
                <div>
                    <div id='box-2'/>
                    <img id='courier-icon' src='./logo/courier.jpg' /> 
                    <p id='box-2-p1'>Reach thousands of customers</p>
                    <p id='box-2-p2'>Sell to thousands of engaged customer visiting Craftastic</p>
                </div>
                <div>
                    <div id='box-3'/>
                    <img id='all-ind-srv' src='./logo/all-india-service.png' /> 
                    <p id='box-3-p1'>Stress-free delivery across India</p>
                    <p id='box-3-p2'>Deliver to 100% of India's serviceable pincodes, through Easy Ship & Fulfillment by Craftastic</p>
                </div>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home
