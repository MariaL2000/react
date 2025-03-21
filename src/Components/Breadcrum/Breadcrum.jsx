import React from 'react'
import './Breadcrum.css'
import home from '../Assets/home.png'

const Breadcrum =(props)=>{
    const{product} =props
    return(
        <div className='breadcrum'>
            Home <img src={home}/> <img src={home} alt="" /> {product.category} <img src={home} alt="" /> {product.name}
        </div>
    )
}

export default Cart;