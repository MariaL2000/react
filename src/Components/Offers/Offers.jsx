import React from 'react'
import './Offers.css'
import f5 from '../Assets/f5.jpg'

const Offers =()=>{
    return(
        <div className='offers'>
            <div className="offers-left">
                <h1>EXLUCISVE</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check noq</button>
            </div>

            <div className="offers-right">
                <img src={f5} alt="" />

            </div>

        </div>
    )
}

export default Offers