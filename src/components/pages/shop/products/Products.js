import React, { useContext } from 'react'
import './Products.css'
import {Heart} from 'phosphor-react'
import {shopContext} from '../../../../context/ShopContext'

function Products(props) {

  const {wishlistItems,addToWishlist} = useContext(shopContext)
  const {id,productImage,productName,price,productDis} = props.data
  console.log(wishlistItems);
const wishlistAmount = wishlistItems[id]
 


  return (
    <div className='box'>
      <img className='productImage' src={productImage}/>
      <div className='productDisContainer'>
      <button className='Wishlistbtn' onClick={()=>addToWishlist(id)}><Heart className='WishlistbtnIcon'/><b>Wishlist{wishlistAmount > 0 && <>({wishlistAmount})</>}</b></button>
        <p className='productName'><b>{productName}</b></p>
        <p className='productDis'>{productDis}</p>
        <p className='price'><b>Rs.{price}</b></p>
      </div>
    </div>
  )
}

export default Products