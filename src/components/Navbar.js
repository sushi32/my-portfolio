import React from "react";
import '../components/css/Navbar.css'
import { NavLink } from 'react-router-dom';
import hamburgerIcon from '../components/icons/hamburger-menu.svg'

function Navbar() {
        
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <button className="hamburger" onClick={toggleMenu}>
                <img src={hamburgerIcon} alt="Menu" className="hamburger-icon"></img>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <nav className={`nav ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><NavLink to="/" activeClassName="active" onClick={toggleMenu}>Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active" onClick={toggleMenu}>About</NavLink></li>
                    <li><NavLink to="/skills" activeClassName="active" onClick={toggleMenu}>Skills</NavLink></li>
                    <li><NavLink to="/projects" activeClassName="active" onClick={toggleMenu}>Projects</NavLink></li>
                    <li><NavLink to="/resume" activeClassName="active" onClick={toggleMenu}>Resume</NavLink></li> 
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
