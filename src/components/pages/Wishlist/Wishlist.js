import React, { useContext } from 'react'
import './Wishlist.css'
import { ProductStore } from '../shop/products/ProductStore'
import {shopContext} from '../../../context/ShopContext'
import WishlistProducts from './WishlistProducts/WishlistProducts'

function Wishlist() {
  const {wishlistItems} = useContext(shopContext)
  return (
    <div className='WishlistContainer'>
      {ProductStore.map((productItems)=>{
        if(wishlistItems[productItems.id] !== 0){
          (<WishlistProducts data={productItems}/>)
        }
      }
      )}
    </div>
  )
}

export default Wishlist