import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>Hop On</h2>
            </div>
            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                {/* <a herf='/' >Home</a> */}
                <a>   l   </a>
                <Link to='destinations' smooth={true} duration={500} ><li>Team up  </li></Link>
                {/* <a herf='/Route' >Route</a> */}
                <a>   l   </a>
                <Link to='carousel' smooth={true} duration={500} ><li>Route</li></Link>
                {/* <a herf='/Teamup' >Team up</a> */}
                <a>   l   </a>
                {/* cards */}

                <Link to='search' smooth={true} duration={500} ><li>Book</li></Link>
                {/* <a herf='/Book' >Book</a> */}
                <a>   l   </a>
                <Link to='views' smooth={true} duration={500} ><li>Views</li></Link>
                {/* <a herf='/Views' >Views</a> */}
            </ul>
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                {/* <BsPerson className='icon' herf='/member' /> */}

                <BsPerson className='icon' Link to='carousel' smooth={true} duration={500} />
                
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>Team up  </li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>Route</li></Link>
                
                {/* cards */}
                
                <Link to='destinations' smooth={true} duration={500} ><li>Book</li></Link>
                <Link to='views' smooth={true} duration={500} ><li>Views</li></Link>
                {/* <a herf='/' >Home</a>
                <a herf='/Route' >Route</a>
                <a herf='/Teamup' >Team up</a>
                <a herf='/Book' >Book</a>
                <a herf='/Views' >Views</a> */}

                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button Link to='carousel' smooth={true} duration={500}>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
