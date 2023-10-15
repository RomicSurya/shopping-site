import React from 'react'
import { useContext } from 'react'
import { shopContext } from '../../../../context/ShopContext'
import './BagPayment.css'

function BagPayment(props) {
    const {id,productImage,productName,price,productDis,} = props.data
    const {bagItems} = useContext(shopContext)
  return (
    <div className='bagPaymentDetailsCon'>
        <span className='payProductName'>{productName}</span>
        <span className='price'><b>₹{price*bagItems[id]}</b></span>
    </div>
  )
}

export default BagPayment