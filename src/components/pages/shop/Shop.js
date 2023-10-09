import React from 'react'
import './Shop.css'
import { ProductStore } from './products/ProductStore';
import Products from './products/Products';



function Shop() {

  console.log(ProductStore);
  return (
    <div className='shopContainer'>
      <div className='topContainer'>Top</div>
      <div className='leftContainer'>Left</div>
      <div className='righContainer'>
      {ProductStore.map((productItems)=>(<Products data={productItems}/>))}
      </div>
    </div>
  )
}

export default Shop