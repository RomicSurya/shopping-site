import React, { useContext } from 'react'
import './WishlistProducts.css'
import {BsXCircle,BsFillXCircleFill} from 'react-icons/bs'
import {shopContext} from '../../../../context/ShopContext'

function WishlistProducts(props) {
    const {id,productImage,productName,price} = props.data
    const {removeToWishlist,moveToBag} = useContext(shopContext)
  return (
    <div className='wishlistItemsBox'>
      <button className='removeBtn' onClick={() => removeToWishlist(id)}><BsFillXCircleFill className='xIcon' size={20}/></button>
    <img className='wishlistProductImage' src={productImage}/>
    <div className='wishlistProductDisContainer'>
      <p className='wishlistProductName'><b>{productName}</b></p>
      <p className='wishlistPrice'><b>Rs.{price}</b></p>
    </div>
    <button className='moveToBagBtn' onClick={() => moveToBag(id)}>MOVE TO BAG</button>
  </div>
  )
  }

export default WishlistProducts