import React from 'react'
import './Styles/navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <p className="logoname">NAUTILUS</p>
            </div>
            
            <div classname="linkscontainer">
            <ul className="links">
                <li className="link">ISSUE</li>
                <li className="link">TOPICS</li>
                <li className="link">BLOG</li>
                <li className="link">NEWSLETTER</li>
                <li className="link">FACEBOOK</li>
                <li className="link">TWITTER</li>
                <li className="link">LOGIN</li>
                <li className="subscribe"><button className="subscribebtn">SUBSCRIBE</button></li>
            </ul>

            </div>

            

        </div>
    );
}

export default Navbar;