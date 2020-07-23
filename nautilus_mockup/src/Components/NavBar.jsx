import React from 'react'
import './Styles/navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <p>logo</p>
            </div>
            
            <div className="links">
            <ul>
                <li>ISSUES</li>
                <li>TOPICS</li>
                <li>BLOG</li>
                <li>NEWSLETTER</li>
                <li>FACEBOOK</li>
                <li>TWITTER</li>
                <li>LOGIN</li>
            </ul>
            </div>

            <div className="subscribe">
                <p>SUBSCRIBE</p>
            </div>

        </div>
    );
}

export default Navbar;