import { useState } from "react"
import logo from "./images/Logo.svg"

export default function Nav(){
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className={'navbar'}>
            <a href="/">
            <img src={logo} alt="Logo"></img>
            </a>

            {/* Mobile Navbar */}

            <div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul>
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