import { useState } from "react"
import logo from "../assets/logo.png"

function Navbar() {

    const [open, setOpen] = useState(false)

    const closeMenu = () => setOpen(false)

    return (
        <div className="navbar">

            {/* Logo */}
            <div className="nav-left">
                <img src={logo} alt="OPAAS" />
                <h2 className="logo-text">Om Protection and Allied Services</h2>
            </div>

            {/* Hamburger */}
            <div className="hamburger" onClick={() => setOpen(!open)}>
                ☰
            </div>

            {/* Menu */}
            <div className={`menu ${open ? "active" : ""}`}>

                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#about" onClick={closeMenu}>About</a>

                <div className="dropdown">
                    <a className="menu-link">Services ▾</a>

                    <div className="dropdown-content">
                        <a href="#services" onClick={closeMenu}>Security Guards</a>
                        <a href="#services" onClick={closeMenu}>Security Officers</a>
                        <a href="#services" onClick={closeMenu}>Security Supervisors</a>
                        <a href="#services" onClick={closeMenu}>Vigilance Officers</a>
                        <a href="#services" onClick={closeMenu}>CCTV Services</a>
                    </div>
                </div>

                <a href="#clients" onClick={closeMenu}>Clients</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>

            </div>

        </div>
    )
}

export default Navbar
