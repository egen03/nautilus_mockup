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
                <p className="link"><li>ISSUE</li></p>
                <p><li className="link">TOPICS</li></p>
                <p><li className="link">BLOG</li></p>
                <p><li className="link">NEWSLETTER</li></p>
                <p><li className="link">FACEBOOK</li></p>
                <p><li className="link">TWITTER</li></p>
                <p><li className="link">LOGIN</li></p>
                <p><li className="subscribe"><button className="subscribebtn">SUBSCRIBE</button></li></p>
            </ul>

{/* <p><a href="http://nautil.us/issues">ISSUES</a></p>
                        <p className="link"><a href="http://nautil.us/#">TOPICS</a></p>
                        <p className="link"><a href="http://nautil.us/blog">BLOGS</a></p>
                        <p><div><button>NEWSLETTERS</button></div></p>
                        <p>
                            <a href="http://www.facebook.com/NautilusMag">
                                Facebook
                            </a>
                        </p>
                        <p><a  href="http://twitter.com/NautilusMag">Twitter</a></p>
                        <p><a href="http://nautil.us/primeuser">LOGIN</a></p>
                        <button className="subBtn">SUBSCRIBE</button>  */}

            </div>

            

        </div>
    );
}

export default Navbar;