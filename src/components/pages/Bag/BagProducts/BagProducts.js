import React, { useContext } from 'react'
import {shopContext} from '../../../../context/ShopContext'
import './BagProducts.css'
import {BsXLg} from 'react-icons/bs'


function BagProducts(props) {
    const {id,productImage,productName,price,productDis,} = props.data
    const {removeFromBag,increaseBagItem,decreaseBagItem,bagItems} = useContext(shopContext)
    const bagAmount = bagItems[id]
  return (
    <div className='bagItemsBox'>
    <img className='bagProductImage' src={productImage}/>
    <div className='bagProductDisContainer'>
      <p className='bagProductName'><b>{productName}</b></p>
      <p className='bagProductDis'>{productDis}</p>
      <p className='baglistPrice'><b>Rs.{price}</b></p>
      <div className='itemOpContainer'>
      <p><b>Size</b></p>
      <select className='selectSize'>
        <option>38</option>
        <option>40</option>
        <option>42</option>
        <option>44</option>
        <option>46</option>
        <option>48</option>
      </select>
      <p><b>Quantity</b></p>
      <button className='decreasebtn' onClick={() => decreaseBagItem(id)}>-</button>
      <input className='bagAmount' value={bagAmount}/>
      <button className='increasebtn' onClick={() => increaseBagItem(id)}>+</button>
      </div>
    </div>
    <BsXLg className='removeItemBagIcon' size={20} onClick={()=>removeFromBag(id)}/>
  </div>
  )
}

export default BagProducts