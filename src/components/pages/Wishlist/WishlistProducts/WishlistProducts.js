import React from 'react'

function WishlistProducts(props) {
    const {id,productImage,productName,price,productDis} = props.data
  return (
    <div className='WishlistProductsContainer'>
        <img className='productImage' src={productImage}/>
        <div className='productDisContainer'>
        <p className='productName'><b>{productName}</b></p>
        <p className='productDis'>{productDis}</p>
        <p className='price'><b>Rs.{price}</b></p>
      </div>
    </div>
  )
}

export default WishlistProducts