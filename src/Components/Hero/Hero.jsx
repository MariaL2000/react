import React from 'react'
import './Hero.css'
import house from '../Assets/house.png'
import f2 from '../Assets/f2.jpg'


const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>Neew arrivals only</h2>

                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={house} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collections</div>
                    <img src={house} alt="" />
                </div>

            </div>
            <div className="hero-right">
                <img src={f2} alt="" />
            </div>
        </div>
    )
}

export default Hero;