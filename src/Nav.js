import logo from "./images/Logo.svg"

export default function Nav(){
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo"></img>
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