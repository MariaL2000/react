import React, { useState } from 'react'
import './Navbar.css'
import house from '../Assets/house.png'
import cart from '../Assets/cart.png'
import { Link } from 'react-router-dom';


const Navbar = () => {

  const[ menu, setmenu]= useState("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={house} alt="" />
        <p> Home </p>
        <ul className='nav-menu'>
          <li onClick={()=>{setmenu("shop")}}>    <Link  style={{ textDecoration: 'none'}} to='/'>Shop</Link>     {menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu("mens")}}>     <Link style={{ textDecoration: 'none'}} to='/mens'>Men</Link>  {menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu("womens")}}>   <Link style={{ textDecoration: 'none'}} to='/womens'>Women</Link>  {menu==="womens"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        <Link to='/login'> <button>Login</button></Link>
        <Link to='/cart'> <img src={cart} alt="" /></Link> 
          <div className="nav-cart-count">0</div>
        </div>
      </div>


    </div>
  )
}

export default Navbar