import React, { createContext, useState } from 'react'
import { ProductStore } from '../components/pages/shop/products/ProductStore';

export const shopContext = createContext(null)
const getWishlistItems = () => {
    const wishlist = {};
    for(let i=1; i<ProductStore.length + 1; i++){
        wishlist[i] = 0;
    }
    return wishlist
}

export const ShopContextProvider = (props) => {
    const [wishlistItems, setWishlistItems] = useState(getWishlistItems())
    const [bagItems, setBagItems] = useState(getWishlistItems())
    const addToWishlist = (itemId) => {
        setWishlistItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
    }
    const removeToWishlist = (itemId) => {
        setWishlistItems((prev)=>({...prev, [itemId]:prev[itemId]=0}))
    }
    const moveToBag = (itemId) => {
        setBagItems((bagprev)=>({...bagprev, [itemId]:wishlistItems[itemId]}));
        setWishlistItems((prev)=>({...prev, [itemId]:0}));
    }
    const removeFromBag = (itemId)=>{
        setBagItems((prev)=>({...prev, [itemId]:0}));
    }
    const increaseBagItem = (itemId) => {
        setBagItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
    }
    const decreaseBagItem = (itemId) => {
        setBagItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }
    const getValues = {wishlistItems,addToWishlist,removeToWishlist,moveToBag,bagItems,removeFromBag,increaseBagItem,decreaseBagItem}
  return <shopContext.Provider value={getValues}>{props.children}</shopContext.Provider>
}
