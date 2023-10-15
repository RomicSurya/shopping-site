import React, { useContext } from 'react'
import './Bag.css'
import {shopContext} from '../../../context/ShopContext'
import { ProductStore } from '../shop/products/ProductStore';
import BagProducts from './BagProducts/BagProducts';
import BagPayment from './BagPayment/BagPayment';

function Bag() {
const {bagItems,getTotalAmount} = useContext(shopContext)
const totalAmountOfBag = getTotalAmount()
  return (
    <div className='bagContainer'>
        <div className='bagTitle'>
            <h3>Your Bag Items</h3>
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
        <div className='totalAmount'><span>Total Amount</span><span><b>₹{totalAmountOfBag}</b></span></div>
        </div>
         </div>
         </div>
    </div>
  )
}

export default Bag