import React, { useContext } from 'react'
import './Wishlist.css'
import { ProductStore } from '../shop/products/ProductStore'
import {shopContext} from '../../../context/ShopContext'
import WishlistProducts from './WishlistProducts/WishlistProducts'

function Wishlist() {
  const {wishlistItems} = useContext(shopContext)
  return (
    <div className='WishlistContainer'>
      <div className='myWishlist'><h2 className='myWishlistTitle'>My Wishlist Items</h2></div>
      <div className='wishlistItems'>
      {ProductStore.map((productItems)=> 
      {
        if(wishlistItems[productItems.id] !== 0){
          return <WishlistProducts data={productItems}/>
        }
      }
      )}
      </div>
    </div>
  )
}

export default Wishlist