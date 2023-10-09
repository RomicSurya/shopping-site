import React from 'react'
import './Products.css'
import {Heart} from 'phosphor-react'

function Products(props) {
  const {id,productImage,productName,price,productDis} = props.data
  function Wishlist(){
    console.log("Wishlisted");
  }
  return (
    <div className='box'>
      <img className='productImage' src={productImage}/>
      <div className='productDisContainer'>
      <button className='Wishlistbtn' onClick={()=>Wishlist()}><Heart className='WishlistbtnIcon'/><b>Wishlist</b></button>
        <p className='productName'><b>{productName}</b></p>
        <p className='productDis'>{productDis}</p>
        <p className='price'><b>Rs.{price}</b></p>
      </div>
    </div>
  )
}

export default Products