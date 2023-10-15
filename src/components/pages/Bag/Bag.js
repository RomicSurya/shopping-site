import React, { useContext } from 'react'
import './Bag.css'
import {shopContext} from '../../../context/ShopContext'
import { ProductStore } from '../shop/products/ProductStore';
import BagProducts from './BagProducts/BagProducts';
import BagPayment from './BagPayment/BagPayment';
import { useNavigate } from 'react-router-dom';


function Bag() {
const {bagItems,getTotalAmount} = useContext(shopContext)
const totalAmountOfBag = getTotalAmount()
const navigate = useNavigate()
const continueToShop =() =>{
    navigate("/")}
  return (
    <div className='bagContainer'>
        <div className='bagTitle'>
            <h2>Bag Items</h2>
        </div>
        <div className='bagBody'>
        <div className='bagItems'>{ProductStore.map((products)=>{
            if(bagItems[products.id] !== 0){
                return <BagProducts data={products}/>
            }
        })} </div>
         <div className='bagPaymentContainer'>
        <div className='bagPayment'>
        <p><b>PRICE DETAILS</b></p>
        {ProductStore.map((products)=>{
            if(bagItems[products.id] !== 0){
                return <BagPayment data={products}/>
            }
        })}
        <hr></hr>
        <div className='totalAmount'>
            <span className='tTitle'>Total Amount</span>
            <span className='tAmount'><b>₹{totalAmountOfBag}</b></span>
            </div>
        <div className='btnCon'>
         <button className='CTSBtn' onClick={()=>continueToShop()}><b>CONTINUE</b></button><button className='logoutbtn'><b>LOGOUT</b></button>
         </div>
        </div>
         </div>
         </div>

    </div>
  )
}

export default Bag