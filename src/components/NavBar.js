import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo-f.png"
import './NavBar.css'
import {FaBars, FaTimes} from 'react-icons/fa'

// Making responsive navbar that shows nav items when clicked ONLY
const NavBar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
  return (
<header>
    <nav className='NavBar'>
        <div className='logo'>
            <Link to =''><img src={Logo} alt=''/></Link>
        </div>
        
        <ul className={click ? "nav-menu active" : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/pricing' className='nav-link'>Pricing</Link>
            </li>
            <li className='nav-item'>
                <Link to='/FAQ' className='nav-link'>FAQ</Link>
            </li>
            <li className='nav-item'>
                <Link to='/contact' className='nav-link'>Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#ffffff'}}/>) : (<FaBars size={20} style={{color: '#ffffff'}}/>)}
         
        </div>
    </nav>
</header>
  )
}

export default NavBar