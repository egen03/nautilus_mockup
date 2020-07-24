import React from 'react'
import './Styles/spotlight.css';

const Spotlight = () => {
    return (
        <div className="Spotlight">
            <div className="sltitle">
            <p>The Nautilus Spotlight</p>
            </div>
            <div className="slsubtitle">
            <p> Why the laws of physics are inevitable</p>
            </div>
            <div>
            <button className="slbtn">read now</button>
            </div>
        </div>
    );
}
export default Spotlight;