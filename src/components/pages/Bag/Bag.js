import React, { useContext } from 'react'
import './Bag.css'
import {shopContext} from '../../../context/ShopContext'
import { ProductStore } from '../shop/products/ProductStore';
import BagProducts from './BagProducts/BagProducts';

function Bag() {
const {bagItems} = useContext(shopContext)
console.log(bagItems);
  return (
    <div className='bagContainer'>
        <div className='bagTitle'>Title</div>
        <div className='bagPayment'></div>
        <div className='bagItems'>{ProductStore.map((products)=>{
            if(bagItems[products.id] !== 0){
                return <BagProducts data={products}/>
            }
        })} </div>
    </div>
  )
}

export default Bag