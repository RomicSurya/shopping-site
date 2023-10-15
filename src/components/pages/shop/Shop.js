import React from 'react'
import './Shop.css'
import { ProductStore } from './products/ProductStore';
import Products from './products/Products';



function Shop() {

  console.log(ProductStore);
  return (
    <div className='shopContainer'>
      <div className='topContainer'>
        <div className='filterTitle'>
        <p><b>FILTER</b></p>
        </div>
        <div className='fSize'>    
        <select className='fselectSize'>
        <option>38</option>
        <option>40</option>
        <option>42</option>
        <option>44</option>
        <option>46</option>
        <option>48</option>
      </select>
      </div>
        <div>
        <select className='fsortby'>
        <option>Recommended</option>
        <option>What's New</option>
        <option>Popularity</option>
        <option>Better Discount</option>
        <option>Price:High to Low</option>
        <option>Price:Low to High</option>
      </select>
        </div>
      </div>
      <div className='leftContainer'>
        <form>  
          <div className='fGender'>
          <input type='radio' name='gender' value={'men'}/>
          <label>Men</label><br/>
          <input type='radio' name='gender' value={'women'}/>
          <label>Women</label><br/>
          <input type='radio' name='gender' value={'kids'}/>
          <label>Kids</label><br/>
        </div>
        <div className='fPrice'>
          <p><b>PRICE</b></p>
        <input type='checkbox' name='price' value={'172 to 21754'}/>
          <label>Rs.172 to Rs.2175</label><br/>
          <input type='checkbox' name='price' value={'2174 to 43336'}/>
          <label>Rs.2174 to Rs.43336</label><br/>
          <input type='checkbox' name='price' value={'43336 to 64918'}/>
          <label>Rs.43336 to Rs.64918</label><br/>
          <input type='checkbox' name='price' value={'64918 to 86500'}/>
          <label>Rs.64918 to Rs.86500</label><br/>
        </div>
        </form>
      </div>
      <div className='righContainer'>
      {ProductStore.map((productItems)=>(<Products data={productItems}/>))}
      </div>
    </div>
  )
}

export default Shop