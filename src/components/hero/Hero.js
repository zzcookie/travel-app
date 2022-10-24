import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch, AiOutlineSend} from 'react-icons/ai'

import Video from '../../assets/Sunrise - 74704.mp4'


function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>Wanna travel with us? Hop on !</h1>
                <h2>Simple three steps to start</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><AiOutlineSend className='icon'/> 
                           <div>Let's go</div>
                        
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
