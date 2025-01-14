import { useState } from "react"
import logo from "./images/Logo.svg"

export default function Nav(){
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo">
            <img src={logo} alt="logo"></img>
            </a>

            {/* Mobile Navbar */}

            <div className= "menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/Menu">Menu</a>
                </li>
                <li>
                    <a href="/Reservations">Reservations</a>
                </li>
                <li>
                    <a href="/Order">Order Online</a>
                </li>
                <li>
                    <a href="/Login">Login</a>
                </li>
            </ul>
        </nav>
    )
}