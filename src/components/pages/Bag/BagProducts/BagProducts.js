import React, { useContext } from 'react'
import {shopContext} from '../../../../context/ShopContext'
import './BagProducts.css'


function BagProducts(props) {
    const {id,productImage,productName,price,productDis,} = props.data
    const {removeToWishlist} = useContext(shopContext)
  return (
    <div className='bagItemsBox'>
    <img className='bagProductImage' src={productImage}/>
    <div className='bagProductDisContainer'>
      <p className='bagProductName'><b>{productName}</b></p>
      <p className='bagProductDis'>{productDis}</p>
      <p className='baglistPrice'><b>Rs.{price}</b></p>
    </div>
  </div>
  )
}

export default BagProducts