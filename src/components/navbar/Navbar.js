import React from 'react'
import { Bag, Heart} from 'phosphor-react';
import {BsPerson} from 'react-icons/bs'
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/shoppingLogo.jpg'


function Navbar() {
  return (
    <div>
        <div className='navbarContainer'>
        <Link to={'/'}><img src={logo} className='logo'/></Link>

        <div className='LISTITEMS'>
        <ul>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>HOME & LIVING</li>
            <li>BEAUTY</li>
        </ul>
        </div>    
      
        <input type='text' className='searchBar' placeholder='Search for products,brands and more'/>
        
        <div className='iconsContainer'>

        <div className='profile'>
            <BsPerson className='icons'/>
            <p className='iconDiscriptions'>Profile</p>
            </div>

        <div className='Wishlist'>
            <Link to={'/Wishlist'} style={{textDecoration:'none'}}><Heart className="icons Link"/>
            <p className='iconDiscriptions'>Wishlist</p></Link>
        </div>
       
        <div className='bag'>
            <Link to={'/Bag'} style={{textDecoration:'none'}}>
            <Bag className='icons'/>
            <p className='iconDiscriptions'>Bag</p></Link>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar