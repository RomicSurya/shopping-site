import React from 'react'
import { useContext } from 'react'
import { shopContext } from '../../../../context/ShopContext'
import './BagPayment.css'

function BagPayment(props) {
    const {id,productImage,productName,price,productDis,} = props.data
    const {bagItems} = useContext(shopContext)
    const bagAmount = bagItems[id]
    const bagItemsAmount = () => {
        let x = 0;
        for(let i=0; i>bagItems.length +1; i++){
            if(bagItems[i] !== 0){
                x = x + 1;
            }
            return x;
        }
    } 
    console.log(bagItemsAmount());
  return (
    <div className='bagPaymentDetailsCon'>
        <span>{productName}</span><span><b>₹{price*bagItems[id]}</b></span>
    </div>
  )
}

export default BagPayment