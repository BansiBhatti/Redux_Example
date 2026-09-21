import logo from './logo-light.svg'
import { NavLink } from 'react-router';
import { FiSun, FiMenu } from "react-icons/fi";


export default function Navbar() {
  const toggleMenu = () => {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
  };

  return (
    <div className='navbar'>
      <div className='navbar-inner'>
        <img src={logo} alt='logo' />
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/service">Services</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="right-section">
          <FiSun className="sun-icon" />
          <button className="quote-btn">Get Free Quote</button>
          <div className="menu-icon" onClick={toggleMenu}>
            <FiMenu />
          </div>
        </div>
      </div>
    </div>
  )
}